"use client";
import React from "react";
import { useWeb3Modal } from "@web3modal/react";

interface Props {}

const Connects = () => {
  const { open } = useWeb3Modal();

  return (
    <button
      className="font-normal text-base rounded-lg py-1.5 px-4 bg-[#0D6EFD] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#0B0F16] duration-300"
      onClick={() => open()}
    >
      Connect Wallet
    </button>
  );
};

export default Connects;
