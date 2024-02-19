"use client";
import Image from "next/image";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import {ArrowsRightLeftIcon} from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { swapAsset, usdConverter, getTokenList } from "@/utils/smart_contract";
import { useParticleProvider } from "@particle-network/connect-react-ui";
import Web3 from "web3";

function TokenSelectorBox({showMaxBtn}){
    return (
      
        <div className="grid grid-rows-2 bg-[#111111] divide-y divide-lightGray rounded-lg px-5 w-full">
          <div className="flex justify-between items-center w-full">
            <div className="flex justify-center items-center">
              <div className="font-bold text-darkGray">From:</div>
              {/* Token dropdown */}
              <div className="flex justify-center items-center space-x-2 p-3">
                <Image src="/logo.png" width={20} height={20} alt="history" />
                <div className="text-lg">ETH</div>
                <Image
                  src="/dropdown.svg"
                  width={8.41}
                  height={5.36}
                  alt="icon"hmm
                />
              </div>
            </div>

            <div className="flex justify-center items-center space-x-4">
              <div className="font-bold text-darkGray">Wallet Bal:</div>
              <div className="font-semibold text-lg">23.72</div>
              {
                showMaxBtn ? (<div
                onClick={() => {}}
                className="btn-gradient px-1 rounded-lg text-black  transition duration-300 transform hover:scale-105"
              >
                Max
              </div>) : ""
              }
              
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex justify-center items-center space-x-2">
              <div className="font-semibold text-2xl">2.1</div>
              <div className="font-bold text-darkGray">($4602.43)</div>
            </div>
            <div className="flex justify-center items-center space-x-2">
              <Image src="/logo.png" width={25} height={25} alt="history" />
              <div className="text-2xl font-bold pr-2">Ethereum</div>
              <Image src="/dropdown.svg" width={18} height={18} alt="icon" />
            </div>
          </div>
        </div>
    );
}

export default function SwapPage() {
    const provider = useParticleProvider()
    
    useEffect(()=>{
        (async ()=> {
        //   const amount = await getSwapAmount("0x1A8904d9dE95C0aAfe81250E106364Bf21fEECaB", "0xD2DfbdA8F99b59B88Ff6926FDdc45244D877bB69", 1)
        //   console.log(amount)

        const tokens = await usdConverter(
          provider,
          "0x1A8904d9dE95C0aAfe81250E106364Bf21fEECaB"
        );
        console.log("Tokens:    ",tokens);
        })();
    })
    return (
        <div className="flex justify-center w-full my-12">
        {/* Swap box */}
        <div className="flex flex-col justify-start items-start w-[30rem] h-[36rem] border border-solid border-lightGray rounded-3xl p-8">
            {/* Swap header and settings */}
            <div className="flex  items-center justify-between mb-4 w-full ">
            <div className="font-bold text-2xl">Swap</div>
            <div className="flex items-center justify-center space-x-4">
                <Image
                src="/historyIcon.svg"
                width={20}
                height={20}
                alt="history"
                />
                <Cog6ToothIcon className="h-6 w-6 text-[#AFAFAF]" />
            </div>
            </div>

            <div className="flex flex-col space-y-1 justify-center items-center w-full">
            <TokenSelectorBox showMaxBtn={true} />
            <ArrowsRightLeftIcon className="h-6 w-6 rotate-90 text-[#C2C2C2]" />
            <TokenSelectorBox showMaxBtn={false} />
            </div>

            {/* Summary */}
            <div className="flex flex-col justify-center w-full mt-10 space-y-2">
            <div className="font-semibold text-lg">Summary</div>
            <div className="flex justify-between items-center w-full">
                <div className="text-darkGray font-semibold">Cross Chain rate</div>
                <div className="">1 USDT on ETH= 1 USDT on WAS</div>
            </div>
            <div className="flex justify-between items-center w-full">
                <div className="text-darkGray font-semibold">
                Amount Recieved (Estimated)
                </div>
                <div className="">0.000WAS</div>
            </div>
            <div className="flex justify-between items-center w-full">
                <div className="text-darkGray font-semibold">Gas Fee</div>
                <div className="">0.000USDC</div>
            </div>

            {/* Swap */}
            <div
                onClick={() => {}}
                className="flex justify-center px-4 py-3 btn-gradient  rounded-lg text-black font-bold  transition duration-300 transform hover:scale-105"
            >
                Swap
            </div>
            </div>
        </div>
        </div>
    );
}
