# Property-Registry

## Quick Start:

Prerequisites: `npm`, `node.js`

**Install Ganache local blockcahin and truffle:**

```bash
$ npm install -g truffle

$ npm install -g ganache-cli
```

**Launch local blockchain (Ganache)**
```bash
ganache-cli --seed <your_seed>
```

**Install MetaMask**

Install MetaMask and import a few keys to the wallet (At least 2). Make sure to import the
first key as by default it will be admin of the application.

**Compile and deploy the contract**

```bash
$ truffle migrate --reset
```

**Install and run the frontend app**

```bash
$ npm install
$npm run dev

```

## Application interaction

* Open http://localhost:8080 once the app has started.

* Make sure to point the MetaMask to localhost:8545 (Local Ganache).

* Visit: `/user.html` to add new users and approve them. Only Admin can add  and approve users. Initially the account that deployed the contract will be the admin.

* Visit: `/index.html` to register a new property.

* Visit: `property.html` to view/ approve/ transfer the property registration.

Click [here](./details.md) to view the detailed documentation of the application and testnet deployment.
