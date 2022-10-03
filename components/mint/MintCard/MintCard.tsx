import React, { useEffect, useState } from 'react'
import style from './MintCard.module.css'
import Countdown from '../Countdown/Countdown'
import Image from 'next/image'
import MintButton from '../mintButton/MintButton'
import {
    useClaimedNFTSupply,
    useContractMetadata,
    useUnclaimedNFTSupply,
    useActiveClaimCondition,
    Web3Button,
    useContract
} from "@thirdweb-dev/react";
import { formatUnits, parseUnits } from "ethers/lib/utils";
import toast, { Toaster } from 'react-hot-toast';

const myNftDropContractAddress = "0x6287CA8488279fDc19DDF162B78f125fECeA2410";

const MintCard = () => {
    const { contract: nftDrop } = useContract(myNftDropContractAddress);

    // The amount the user claims
    const [quantity, setQuantity] = useState(1); // default to 1

    // Load contract metadata
    const { data: contractMetadata } = useContractMetadata(nftDrop);

    // Load claimed supply and unclaimed supply
    const { data: unclaimedSupply } = useUnclaimedNFTSupply(nftDrop);
    const { data: claimedSupply } = useClaimedNFTSupply(nftDrop);
    // Load the active claim condition
    const { data: activeClaimCondition } = useActiveClaimCondition(nftDrop);

    // Check if there's NFTs left on the active claim phase
    const isNotReady = 
        activeClaimCondition &&
        parseInt(activeClaimCondition?.availableSupply) === 0;

    // Check if there's any NFTs left
    const isSoldOut = unclaimedSupply?.toNumber() === 0;

    // Check price
    const price = parseUnits(
        activeClaimCondition?.currencyMetadata.displayValue || "0",
        activeClaimCondition?.currencyMetadata.decimals
    );

    // Multiply depending on quantity
    const priceToMint = price.mul(quantity);

    // Loading state while we fetch the metadata
    if (!nftDrop || !contractMetadata) {
        return <div className={style.cardContainer}>Loading...</div>;
    }
    return (
        <div className={style.cardContainer}>
            <Toaster />
            <div className={style.card}>
                <div className={style.cardTittle}>
                    <p>ASTROGUYS</p>
                    <h2>GENESIS DROP</h2>
                    <div className={style.revealImg}>
                        <img src={contractMetadata?.image} alt="astroguys" className={style.imgContract} />
                    </div>
                </div>
                <div className={style.downSection}>
                    <div className={style.mintedContainer}>
                        <p>Total Minted</p>
                        {claimedSupply && unclaimedSupply ? (
                            <p>
                                {/* Claimed supply so far */}
                                <b>{claimedSupply?.toNumber()}</b>
                                {" / "}
                                {
                                    "100"
                                }
                                {/* {
                                    // Add unclaimed and claimed supply to get the total supply
                                    claimedSupply?.toNumber() + unclaimedSupply?.toNumber()
                                } */}
                            </p>
                        ) : (
                            // Show loading state if we're still loading the supply
                            <p>Loading...</p>
                        )}
                    </div>
                    <div className={style.priceContainer}>
                        <p>Price</p>
                        {activeClaimCondition?.price.eq(0)
                                                ? " (Not yet)"
                                                : activeClaimCondition?.currencyMetadata.displayValue
                                                    ? ` ${formatUnits(
                                                        priceToMint,
                                                        activeClaimCondition.currencyMetadata.decimals
                                                    )} ${activeClaimCondition?.currencyMetadata.symbol}`
                                                    : ""
                                            }
                    </div>
                </div>
                <div>
                    {
                        // Sold out or show the claim button
                        isSoldOut ? (
                            <div>
                                <h2>Sold Out</h2>
                            </div>
                        ) : isNotReady ? (
                            <div>
                                <h2>Not ready to be minted yet</h2>
                            </div>
                        ) : (
                            <>
                                <div className={style.quantityContainer}>
                                    <button
                                        className={`${style.quantityControlButton}`}
                                        onClick={() => setQuantity(quantity - 1)}
                                        disabled={quantity <= 1}
                                    >
                                        -
                                    </button>

                                    <h4>{quantity}</h4>

                                    <button
                                        className={`${style.quantityControlButton}`}
                                        onClick={() => setQuantity(quantity + 1)}
                                        disabled={
                                            quantity >=
                                            parseInt(
                                                activeClaimCondition?.quantityLimitPerTransaction || "0"
                                            )
                                        }
                                    >
                                        +
                                    </button>
                                </div>

                                <div className={style.mintContainer}>
                                    <Web3Button
                                        contractAddress={myNftDropContractAddress}
                                        action={async (contract) =>
                                            await contract.erc721.claim(quantity)
                                        }
                                        // If the function is successful, we can do something here.
                                        onSuccess={(result) =>
                                            toast.success(
                                                `Successfully minted ${result.length} NFT${result.length > 1 ? "s" : ""
                                                }!`
                                            )
                                        }
                                        // If the function fails, we can do something here.
                                        onError={(error) => toast.error(error?.reason)}
                                        accentColor="#9e53fa"
                                        colorMode="dark"
                                    >
                                        {`Mint${quantity > 1 ? ` ${quantity}` : ""}${
                                            activeClaimCondition?.price.eq(0)
                                                ? " (Free)"
                                                : activeClaimCondition?.currencyMetadata.displayValue
                                                    ? ` (${formatUnits(
                                                        priceToMint,
                                                        activeClaimCondition.currencyMetadata.decimals
                                                    )} ${activeClaimCondition?.currencyMetadata.symbol})`
                                                    : ""
                                            }`}
                                    </Web3Button>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
           
};

export default MintCard