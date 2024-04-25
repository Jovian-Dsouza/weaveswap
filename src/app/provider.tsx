"use client";

import React from 'react'
import { ModalProvider } from "@particle-network/connect-react-ui"; // @particle-network/connectkit to use Auth Core
import { WalletEntryPosition } from "@particle-network/auth";
import { Avalanche, AvalancheTestnet } from "@particle-network/chains";
import { evmWallets } from "@particle-network/connect";

import { ThirdwebProvider } from "@thirdweb-dev/react";
import { AppContextProvider } from '@/AppContext';

function Provider({ children }) {
  return (
    // <ModalProvider
    //   options={{
    //     projectId: process.env.NEXT_PUBLIC_PARTICLE_PROJECTID,
    //     clientKey: process.env.NEXT_PUBLIC_PARTICLE_CLIENTKEY,
    //     appId: process.env.NEXT_PUBLIC_PARTICLE_APPID,
    //     chains: [Avalanche, AvalancheTestnet ],
    //     particleWalletEntry: {
    //       //optional: particle wallet config
    //       displayWalletEntry: true, //display wallet button when connect particle success.
    //       defaultWalletEntryPosition: WalletEntryPosition.BR,
    //       supportChains: [Avalanche, AvalancheTestnet ],
    //       customStyle: {}, //optional: custom wallet style
    //     },
    //     securityAccount: {
    //       //optional: particle security account config
    //       //prompt set payment password. 0: None, 1: Once(default), 2: Always
    //       promptSettingWhenSign: 1,
    //       //prompt set master password. 0: None(default), 1: Once, 2: Always
    //       promptMasterPasswordSettingWhenLogin: 1,
    //     },
    //     wallets: evmWallets({
    //       projectId: "walletconnect projectId", //replace with walletconnect projectId
    //       showQrModal: false,
    //     }),
    //   }}
    //   theme={"auto"}
    //   language={"en"} //optional:localize, default en
    //   walletSort={["Particle Auth", "Wallet"]} //optional:walelt order
    //   particleAuthSort={[
    //     //optional:display particle auth items and order
    //     "email",
    //     "phone",
    //     "google",
    //     "apple",
    //     "facebook",
    //   ]}
    // >
    //   {children}
    // </ModalProvider>
    <ThirdwebProvider activeChain="avalanche-fuji">
      <AppContextProvider>{children}</AppContextProvider>
    </ThirdwebProvider>
  );
}

export default Provider;