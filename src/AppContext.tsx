"use client"
import { createContext, useEffect } from "react";
import { useState } from "react";
import { useContract } from "@thirdweb-dev/react";
import WeaveSwapAbi from "./assets/abi/Weaveswap.json";
import PoolTrackerAbi from "./assets/abi/PoolTracker.json";
import LendingTrackerAbi from "./assets/abi/lendingTracker.json";

export const AppContext = createContext(null);

export function AppContextProvider({ children }) {

  const { contract: lendingContract } = useContract(
    process.env.NEXT_PUBLIC_LENDING_TRACKER,
    LendingTrackerAbi
  );
  
  const { contract: swapContract } = useContract(
    process.env.NEXT_PUBLIC_SWAP_ROUTER_ADDRESS,
    WeaveSwapAbi
  );

  const { contract: PoolTrackerContract } = useContract(
    process.env.NEXT_PUBLIC_POOL_TRACKER_ADDRESS,
    PoolTrackerAbi
  );

  return (
    <AppContext.Provider
      value={{ lendingContract, swapContract, PoolTrackerContract }}
    >
      {children}
    </AppContext.Provider>
  );
}
