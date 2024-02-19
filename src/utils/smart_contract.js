import Web3 from "web3";
import WeaveSwapAbi from '../assets/abi/Weaveswap.json'
import PoolTrackerAbi from "../assets/abi/PoolTracker.json"
import LendingTrackerAbi from "../assets/abi/lendingTracker.json"

export const swapAsset = async (provider, address1, address2, inputAmount) => {
  try {
      const web3 = new Web3(provider);

      // Set up contract instance using contract ABI and address
      const contract = new web3.eth.Contract(
        WeaveSwapAbi,
        process.env.NEXT_PUBLIC_SWAP_ROUTER_ADDRESS
      );

      // Call your smart contract function
      const functionResult = await contract.methods
        .swapAsset(address1, address2, inputAmount)
        .call();

      return functionResult;
  } catch (error) {
    console.error("Error calling smart contract function:", error);
  }
};

export const getTokenList = async (provider, index) => {
  try {
      const web3 = new Web3(provider);

      // Set up contract instance using contract ABI and address
      const contract = new web3.eth.Contract(
        PoolTrackerAbi,
        process.env.NEXT_PUBLIC_POOL_TRACKER_ADDRESS
      );

      // Call your smart contract function
      const functionResult = await contract.methods
        .tokens(index)
        .call();

      return functionResult;
  } catch (error) {
    console.error("Error calling smart contract function:", error);
  }
};

export const usdConverter = async (provider, priceAddress) => {
  try {
    const web3 = new Web3(provider);

    // Set up contract instance using contract ABI and address
    const contract = new web3.eth.Contract(
      LendingTrackerAbi,
      process.env.NEXT_PUBLIC_LENDING_TRACKER
    );

    // Call your smart contract function
    const functionResult = await contract.methods
      .usdConverter(priceAddress)
      .call();

    return functionResult;
  } catch (error) {
    console.error("Error calling smart contract function:", error);
  }
};
