# Frontend of DEX with liquidity pools

![alt text] My Wallet ( UQB3D60vXPyBWUY9RfYzS-zh_wjzwtnErXi8oCClPy_dakNc )

> This page allows users to create a pool, add or remove liquidity, browse through the pools, and exchange two tokens. It was created for the purposes of the competition posted here: https://github.com/newton-blockchain/TIPs/issues/42

**Tech Stack**

- `TypeScript`
- `React` + `Next.js`
- `Redux`
- `Node.js` v16 (**important, otherwise `replaceAll` might complain from `HeadPage.tsx`)** + `Express` (for pseudorandom numbers generators stubs to pools and coins)
- `Bootstrap` + `Sass`

## Getting Started

First, install the packages:

```bash
npm i
# or
yarn install
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
```

## Description

Asynchronous calls to smart contracts have been mocked up.
We designed UI for exchanging one token for another token, a UI for creating a pool with two tokens, a UI for adding and removing liquidity from a pool, and a UI with a list of pools and pool statistics.

We used `TypeScript` + `React` + `Redux` stack with some help from `Bootstrap` and `Sass`. `Express` was used to mock up our data.

When considering the design options, we focused on the ton.org site, the UI of standard wallets and bridge, and Responsive Web Design (RWD).

This application is rich in animation, uses brand styles, and has a minimalistic design in `Telegram`-like style. The only two external dependencies that we are using are `react-table` and `react-select`. `Bootstraap` was minimally used for spacing, alignment, and position (no pre-defined classes for the blocks of code). We've tried to used as much as possible pure `CSS` for many animations.

## Brand assets

https://ton.org/brand-assets
"# ton-dex-contest" 
"# ton-dex-contest" 
"# ton-dex-contest" 
#   t o n - d e x - c o n t e s t  
 