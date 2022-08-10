import type { NextPage } from "next";
import Head from "next/head";
import { ethers } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import contractData from "../constants/contractData.json";

const abi = contractData.abi;

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: { 42: process.env.NEXT_PUBLIC_RPC_URL },
    },
  },
};

let web3Modal: any;

if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    cacheProvider: false,
    providerOptions, // required
  });
}

const Home: NextPage = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [hasWallet, setHasWallet] = useState(false);
  const [signer, setSigner] = useState<any>(undefined); // unused state for now

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasWallet(true);
    }
  });

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        let a = ethers.utils.parseEther("100");
        console.log(a);
        const web3ModalProvider = await web3Modal.connect();
        setIsConnected(true);
        const provider = new ethers.providers.Web3Provider(web3ModalProvider);
        const signer = provider.getSigner();
        setSigner(signer);
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }

  async function execute() {
    if (typeof window.ethereum !== "undefined") {
      const contractAddress = "0x947D0f6E593e30e0eE27f8D4BB6d4805fd1964e6";
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        await contract.vote(0, 5); // to vote of the proposal 0, option 5, reverted if user is not a voter
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Web3 Connection with Frontend</title>
        <meta
          name="metamask-connection-betzabesp94"
          content="Example of connection using nextjs, typescript and web3modal"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="title">Web3 Connection with Frontend</h1>
      <p className={styles.content}>
        This was develop using: Nextjs, typescript and web3Modal
      </p>
      <div className={styles.main}>
        {isConnected ? (
          <button className={styles.btn} type="button" onClick={execute}>
            Execute
          </button>
        ) : (
          <button className={styles.btn} type="button" onClick={connect}>
            Connect
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
