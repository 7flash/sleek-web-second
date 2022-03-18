import { useState } from 'react';

import React from "react";
import ReactDOM from "react-dom";
import { MoralisProvider } from "react-moralis";
import { CryptoCards, Button, ConnectButton } from 'web3uikit';

export default function SleekApp() {
  return (
    <MoralisProvider appId="UI4dBgY0NeEdyLXlaN2Qd0yqwBxezYbw9htD8GJA" serverUrl="https://0hylhiknmwf0.usemoralis.com:2053/server">
        <ConnectButton />
    </MoralisProvider>      
  );
}
