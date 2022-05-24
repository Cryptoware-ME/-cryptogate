# Cryptogate/react-ui
<p align="center">
    <blockquote>One Stop Shop For All Your React/Next UI Components With Web3 Integration Pre-configured</blockquote>
</p>

## Installation

Using yarn: 
```bash
yarn add @Cryptogate/react-ui
```
Using npm:
```bash
npm install @Cryptogate/react-ui
```

## Required Dependecies

- "@cryptogate/react-providers": "^0.0.34"<br/>
- "@cryptogate/core": "^0.0.10"<br/>
- "@metamask/detect-provider": "^1.2.0"<br/>
- "ethers": "^5.6.4"<br/>
- "react-device-detect": "^2.2.2"<br/>
- "react-jazzicon": "^1.0.3"<br/>

## ConnectWalletComponent
This all in one component is built to assist developers in integrating web3 authentication in 3 minutes.

### Usage

Step 1: Import the component:
```javascript
import {ConnectWalletComponent} from "@cryptogate/react-ui"
```

Step 2: Simply render this component:
```javascript
import {ConnectWalletComponent} from "@cryptogate/react-ui"

<div>
    <ConnectWalletComponent/>
</div>
```

Step 3: Add the list of accepted wallets. How about we add METAMASK?
```javascript
import {ConnectWalletComponent, EthWallets} from "@cryptogate/react-ui"

<div>
    <ConnectWalletComponent
        EthWalletList={[EthWallets.METAMASK]}
    />
</div>
```
For more [details](#customized-wallet-list)  on customizing your own wallet list, check [How To Customize My Wallet List](#customized-wallet-list) 

Additional Step: To request a signature, add an `onSign` callback prop:
```javascript
import {ConnectWalletComponent, EthWallets} from "@cryptogate/react-ui"

<div>
    <ConnectWalletComponent
        EthWalletList={[EthWallets.METAMASK]}
        onSign={(key) => {console.log(key)}}
    />
</div>
```
After signing, a key object is created and saved in the localStorage. check [onSign Method](onsign-method) for the object format.

**And that's it.. Congratulations on integrating a Customized Web3 Authentication. For more customization, check the [Props List](#props)**

#### Props

| Prop                 | Type       | Description                                                                                      | Default                  |
| -------------------- |----------- | ------------------------------------------------------------------------------------------------ | ------------------------ |
| ActiveComponent      | React Node | The first componenet rendered                               |[check default](#default-activecomponent)|
| Disabled Component   | React Node | Rendered while the message is being signed                  |[check default](#default-disabledcomponent)|
| ConnectedComponent   | React Node | This componenet is rendered after signing successfully      |[Identicon](#identicon)|
| EthWalletList        | numbers[]  | Array of accepted ethereum wallets, check [Customize Wallet List](#customized-wallet-list)        | []                       |
| SolWalletList        | numbers[]  | Array of accepted solana wallets, check [Customize Wallet List](#customized-wallet-list)          | []                       |
| onSign               | function   | Called after signing a message, check [onSign Method](#onsign-method)                            |                          |
| SignatureMessage     | string     | The message used on signing | "This is the default signaure message provided by Cryptogate."     |                          |
| NetworkChainIds      | numbers[]  | Array of supported networks                                                                      | [1] (Ethereum Mainnnet)  |
| NetworkAlertMessage  | string     | Alert message when user connects with an unsupported network                                     | "Selected network is not supported." |
| ConnectedMenu        | boolean    | Set `true` or `false` to view menu onClick after connecting                                      | true                     |
| WalletListStyle      | JSON       | Object that takes two entries: `top` and `background` to change the style of wallets lists popup | ```{top: '0', background: 'white'}```

#### Default Active Component
<p align="center">
    <img src="https://github.com/Cryptoware-ME/-cryptogate/blob/main/packages/react-ui/preview/ActiveButton.png?raw=true" alt="Active Component Preview" width="200"/>
</p>

#### Default Disabled Component
<p align="center">
    <img src="https://github.com/Cryptoware-ME/-cryptogate/blob/main/packages/react-ui/preview/DisabledButton.png?raw=true" alt="Disabled Component Preview" width="200"/>
</p>

#### On Sign Method

The **onSign Method** takes a key parameter, this key is the value saved in the local storage after signing. The object is in the form of:
```js
{
  address: "<address used to sign>",
  message: "This is the default signaure message provided by Cryptogate." // or the message passed in the SignatureMessage prop,
  signature: "<The signed message>"
}
```
The **onSign** Method format: 
```javascript
  (key) => {console.log(key)}
```

## Identicon
Simply display a customized jazzicon. 

### Usage

Step 1: Import the component
```javascript
import {Identicon} from "@cryptogate/react-ui"
```

Step 2: Render the component
```javascript
import {Identicon} from "@cryptogate/react-ui"

<Identicon/>
```

**And That's It.. Here's your customized jazzicon:**
<p align="center">
    <img src="https://github.com/Cryptoware-ME/-cryptogate/blob/main/packages/react-ui/preview/Identicon.png?raw=true" alt="Identicon Component Preview" width="200"/>
</p>


## Customized Wallet List

With cryptogate, you have complete controll over adding/removing wallets from the list. No configuration needed, simply update the props.

### Usage:

Let's customize our list of Ethereum wallets

Step 1: Importing the list of supported ethereum wallets
```javascript
import {EthWallets} from "@cryptogate/react-ui"
```

Step 2:
If we observe the imported object `EthWallets`, it's an enum of supported wallets. All we have to do is pass the wallets we want in the `EthWalletList` prop:
```javascript
import {ConnectWalletComponent, EthWallets} from "@cryptogate/react-ui"

<div>
    <ConnectWalletComponent
        EthWalletList={[EthWallets.METAMASK, EthWallets.COINBASE]}
    />
</div>
```

The current list of supported ethereum wallets:<br/>
    - Metamask: `EthWallets.METAMASK`<br/>
    - Coinbase: `EthWallets.COINBASE`<br/>
    - Wallet Connect: `EthWallets.WALLETCONNECT`<br/>
    
If you want to add all supported wallets, simply pass the `EthWallets.ALL` value:
```javascript
<ConnectWalletComponent
        EthWalletList={[EthWallets.ALL]}
    />
```

For solana wallets, use the SolWallets,
```javascript
import {ConnectWalletComponent, EthWallets} from "@cryptogate/react-ui"

<div>
    <ConnectWalletComponent
        EthWalletList={[EthWallets.PHANTOM, EthWallets.SOLFLARE]}
    />
</div>
```

The current list of supported ethereum wallets:<br/>
    - Phantom: `EthWallets.PHANTOM`<br/>
    - Slope: `EthWallets.SLOPE`<br/>
    - Solflare Connect: `EthWallets.SOLFLARE`<br/>
