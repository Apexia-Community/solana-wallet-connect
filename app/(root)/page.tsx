"use client";

import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export default function HomePage() {
    const { publicKey, connected } = useWallet();

    return (
        <div className="w-full h-screen flex flex-col gap-4 items-center justify-center">
            <WalletMultiButton />
            <div className="text-2xl text-center mt-4">
                {connected && publicKey ? (
                    <p>Connected to wallet: {publicKey.toBase58()}</p>
                ) : (
                    <p>Please connect your wallet</p>
                )}
            </div>
        </div>
    );
}
