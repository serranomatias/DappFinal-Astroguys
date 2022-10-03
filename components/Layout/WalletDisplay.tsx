import { useAddress, useContract } from '@thirdweb-dev/react'
import React, { useEffect, useState } from 'react'
import style from './LayoutStyles/WalletDisplay.module.css'
import ConnectButton from './WalletDisplayComponents/ConnectButton/ConnectButton'
import { ethers } from "ethers"

type BalanceType = {
  matic: string,
  guys: string
}

const WalletDisplay = () => {

  const guysAddress = '0x74376FaB8Ca4e226B1cF36C637eC1c06e834D989'
  const guysAbi = [
    "function balanceOf(address) view returns (uint)",
  ];

const address = useAddress()
const [balance, setBalance] = useState<BalanceType>()
  useEffect(() => {

    const getBalance = async ()=>{
      if(address){
        const provider = new ethers.providers.JsonRpcProvider('https://polygon-rpc.com')
        const contract = new ethers.Contract(guysAddress, guysAbi, provider)
        const _maticBalance = await provider.getBalance(address)
        const _guysBalance = await contract.balanceOf(address)
        
        const matic = ethers.utils.formatEther(_maticBalance)
        const guys = ethers.utils.formatEther(_guysBalance)
        setBalance({
          matic,
          guys,
        })
      }
    }

    getBalance()

  }, [address])


  return (
    <div className={style.container}>
      <div className={style.bar}>
        <div className={style.walletInfo}>
          <p className={style.info}>
            GUYSCOIN: <span>{ balance?.guys} GUYS</span> 
          </p>
          <p className={style.info}>
              BALANCE: <span>{ balance?.matic.slice(0,5)} MATIC</span> 
          </p>
          <p className={style.info}>
          { address ? `${address?.slice(0, 4)}...${address?.slice(38, 42)}` : '' }
          </p>
        </div>
          <ConnectButton/>
      </div>
    </div>
  )
}

export default WalletDisplay