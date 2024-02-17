"use client";
import DataTable from "@/components/DataTable";
import SearchInput from "@/components/SearchInput";
import {
  CreditCardIcon,
  LifebuoyIcon,
  TicketIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";
import Image from "next/image";

function SupplyBorrowTableRow({ index, item, btnName, btnOnClick }) {
  return (
    <tr className="border-b border-lightGray">
      <td className="px-6 py-4 flex justify-center items-center space-x-2">
        <Image src={item.img} width={28} height={28} alt="logo" />
        <div className="uppercase">{item.asset}</div>
      </td>
      <td className="px-6 py-4">{item.totalSupply}</td>
      <td className="px-6 py-4">{item.apy}</td>
      <td className="px-6 py-4">{item.walletBalance}</td>
      <td className="px-6 py-4">
        <div
          onClick={() => {
            btnOnClick(index);
          }}
          className="btn-gradient p-1 rounded-lg text-black  transition duration-300 transform hover:scale-105"
        >
          {btnName}
        </div>
      </td>
    </tr>
  );
}

export default function LendingPage() {
  const [supplySelected, setSupplySelected] = useState(true);

  const tableData = [
    {
      asset: "MATIC",
      totalSupply: "$20M",
      apy: "0.61%",
      walletBalance: "$2999",
      img: "/logo.png",
    },
    {
      asset: "MATIC",
      totalSupply: "$20M",
      apy: "0.61%",
      walletBalance: "$2999",
      img: "/logo.png",
    },
  ];

  function handleSearchInput(e) {
    console.log(e.target.value);
  }

  function handleTableButton(e) {
    console.log("Btn clicked: ", e)
  }

  return (
    <div className="flex flex-col mb-16 mt-14 mx-16 ">
      {/* Text content */}
      <div className="flex flex-col space-y-5 max-w-4xl">
        <div className="text-3xl font-bold">
          Lock in your crypto assets to earn interest
        </div>
        <div className="text-lg font-semibold text-darkGray">
          Enable peer-to-peer lending and borrowing through blockchain
          technology, providing users with direct control, reduced fees, and
          increased financial accessibility!
        </div>
      </div>

      {/* Supply borrow */}
      <div className="flex flex-col mt-6">
        {/* statistics */}
        <div className="grid grid-cols-3 divide-x divide-[#323232] border-[0.6px] border-[#323232] rounded-lg py-5 px-20">
          <div className="flex flex-col space-y-2 justify-center items-center  ">
            <div className="flex space-x-2 justify-center items-center">
              <CreditCardIcon className="h-6 w-6 text-lightGreen" />
              <div className="">Total Supply</div>
            </div>
            <div className="text-3xl font-bold">$0.000</div>
          </div>

          <div className="flex flex-col space-y-2 justify-center items-center  ">
            <div className="flex space-x-2 justify-center items-center">
              <LifebuoyIcon className="h-6 w-6 text-[#11C9BF]" />
              <div className="">Net APY</div>
            </div>
            <div className="text-3xl font-bold">0.00%</div>
          </div>

          <div className="flex flex-col space-y-2 justify-center items-center  ">
            <div className="flex space-x-2 justify-center items-center">
              <TicketIcon className="h-6 w-6 text-[#0740A4]" />
              <div className="">Total Borrow</div>
            </div>
            <div className="text-3xl font-bold">$0.000</div>
          </div>
        </div>

        {/* Select supply/Borrow and search */}
        <div className="flex justify-between items-center mt-8">
          {/* Select supply borrow */}
          <div className="flex justify-center items-center">
            <div
              className={`text-lg font-bold px-8 py-2 border-b-4 ${
                supplySelected ? "border-[#11C9BF]" : "border-[#323232]"
              }`}
              onClick={() => {
                setSupplySelected(true);
              }}
            >
              Supply
            </div>

            <div
              className={`text-lg font-bold px-8 py-2 border-b-4 ${
                !supplySelected ? "border-[#11C9BF]" : "border-[#323232]"
              }`}
              onClick={() => {
                setSupplySelected(false);
              }}
            >
              Borrow
            </div>
          </div>
          {/* Search input */}
          <SearchInput onChange={handleSearchInput} />
        </div>

        {/* Table */}
        <DataTable
          className="mt-10"
          btnName={supplySelected ? "Supply" : "Borrow"}
          btnOnClick={handleTableButton}
          data={tableData}
          header={[
            "Asset",
            "Total Supplied",
            "APY",
            "Wallet Balanace",
            "Action",
          ]}
          RowComponent={SupplyBorrowTableRow}
        />
      </div>
    </div>
  );
}
