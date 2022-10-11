import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import style from '../styles/pages/mynfts.module.css'
import img1 from '../public/images/astro1.png'
import img2 from '../public/images/astro2.png'
import img3 from '../public/images/astro3.png'
import img4 from '../public/images/astro4.png'
import img5 from '../public/images/astro5.png'
import {
  useClaimedNFTSupply,
  useContractMetadata,
  useUnclaimedNFTSupply,
  useActiveClaimCondition,
  Web3Button,
  useContract,
  useNFT,
  useNFTs,
  useAddress,
  ThirdwebNftMedia,
} from "@thirdweb-dev/react";

const myNftDropContractAddress = "0x3163B695dDc10Fa29fdf2ec147F5bb104C3c2608";
const mynfts: NextPage = () => {

  const address = useAddress();
  const { contract: nftDrop } = useContract(myNftDropContractAddress);
  const { data: nfts, isLoading: isReadingNfts } = useNFTs(nftDrop);
const NFTsArray = [img1, img2, img3, img4, img5]

const handlePFP = (image: StaticImageData, index: number)=>{
  const canvas = document.createElement("canvas");
	canvas.setAttribute("href", image.src);

  const originalImage = new (window as any).Image()
  originalImage.src = image.src;

  originalImage.onload = function (){

    const ctx = canvas.getContext('2d');
    canvas.width = 1000;
    canvas.height = 1000;
    ctx?.drawImage(originalImage, 470, 100, 2000, 2000, 0, 0, 2000, 2000); 
  
    const imageURL = canvas.toDataURL("image/jpg", 0.9);
    
    const el = document.createElement("a");
    el.setAttribute("href", imageURL);
    el.setAttribute("download", `astroguy-pfp-${index}` );
    document.body.appendChild(el);
    el.click();
    el.remove();
    canvas.remove()

  }
}

const handlePNG = (image: StaticImageData, index: number)=>{
  const el = document.createElement("a");
	el.setAttribute("href", image.src);
	el.setAttribute("download", `astroguy-${index}` );
	document.body.appendChild(el);
 	el.click();
	el.remove();
}


  return (
    <div className={style.container}>
        { NFTsArray.map((item, index)=>(
            <div className={style.card} key={index} >
                <Image src={item} className={style.img} width={260} height={260}/>
                <div className={style.btnContainer}>
                    <button className={style.btn} onClick={()=>handlePFP(item, index)}>Download Pfp</button>
                    <button className={style.btn} onClick={()=>handlePNG(item, index)} >Download PNG</button>
                </div>
            </div>
        )) }
    </div>
  )
}

export default mynfts