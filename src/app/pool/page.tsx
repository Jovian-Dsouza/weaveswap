"use client";
import DataTable from "@/components/DataTable";
import SearchInput from "@/components/SearchInput";
import { useState } from "react";
import Image from "next/image";

function PoolTableRow({ index, item, btnName, btnOnClick }) {
  return (
    <tr className="border-b border-lightGray">
      <td className="px-6 py-4 uppercase">
        {item.asset1}/{item.asset2}
      </td>
      <td className="px-6 py-4 flex justify-center items-center space-x-2">
        <Image src={item.img1} width={28} height={28} alt="logo" />
        <Image src={item.img2} width={28} height={28} alt="logo" />
      </td>
      <td className="px-6 py-4">{item.volume7d}</td>
      <td className="px-6 py-4">{item.volume24h}</td>
      <td className="px-6 py-4">{item.fee}</td>
      <td className="px-6 py-4">{item.totalMarketCap}</td>
      <td className="px-6 py-4">{item.roi}</td>
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

export default function PoolPage() {
  const tableData = [
    {
      asset1: "PLY",
      img1: "/logo.png",
      asset2: "WAS",
      img2: "/logo.png",
      volume7d: "$1M",
      volume24h: "$456K",
      fee: "$35.23",
      totalMarketCap: "15M",
      roi: "13.7%",
    },
  ];

  function handleSearchInput(e) {
    console.log(e.target.value);
  }

  function handleTableButton(e) {
    console.log("Btn clicked: ", e);
  }

  return (
    <div className="flex flex-col mb-16 mt-14 mx-16 ">
      {/* Text content */}
      <div className="flex flex-col space-y-5 max-w-4xl">
        <div className="text-3xl font-bold">
          Put your funds to work by providing for launchpad liquidity
        </div>
        <div className="text-lg font-semibold text-darkGray">
          When you add funds to launchpad liquidity pool, you can receive a
          share of its trading volume and potentially snag extra rewards when
          there are incentives involved!
        </div>
      </div>

      {/* Pool Details */}
      <div className="flex flex-col mt-6">
        <div className="flex justify-between items-center mt-8">
          {/* Select supply borrow */}
          <div className="flex justify-center items-center space-x-16">
            <div className="text-lg font-bold">All Pools</div>
            <SearchInput onChange={handleSearchInput} />
          </div>

          <div className="flex justify-center items-center space-x-8 mr-5">
            <div className="flex justify-center items-center space-x-2">
              <Image src="/reward2.png" width={40} height={40} alt="reward" />
              <div className="font-bold text-lg">My Position</div>
            </div>

            <div className="flex justify-center items-center space-x-2">
              <Image src="/reward1.png" width={40} height={40} alt="reward" />
              <div className="font-bold text-lg">My Rewards</div>
            </div>
          </div>
        </div>

        {/* Table */}
        <DataTable
          className="mt-6"
          btnName="Add Liquidity"
          btnOnClick={handleTableButton}
          data={tableData}
          header={[
            "Pool",
            "Composition",
            "7d Volume",
            "24h Volume",
            "Fee",
            "Total Market Cap",
            "ROI",
            "Action"
          ]}
          RowComponent={PoolTableRow}
        />
      </div>
    </div>
  );
}
