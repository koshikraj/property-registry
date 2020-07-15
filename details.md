# Property-Registry


**Quick Start:**

**Install MetaMask**

1. Go to [https://metamask.io/](https://metamask.io/)
and install the **browser plugin**.

2. Setup a **password** and open the wallet. Select the network
as ‘**Rinkeby Test Network**’.

3. Click on ‘**CREATE ACCOUNT**’ to create a new wallet
accout and click ‘**Copy Address to clipboard**’ to copy your
**public address** for the wallet.

4. Go to [https://faucet.rinkeby.io/](https://faucet.rinkeby.io/)
to get free test ether to the address. Check your account on metamask
and verify the **balance**.

5. Repeat steps 3 and 4 to create more accounts.

**Deploying contract**

1. Go to [http://remix.ethereum.org/](http://remix.ethereum.org/)
and **upload** your contract file (**asset.sol**)

2. **Compile** the code. Make sure you’ve slected ‘**asset.sol**’
in the dropdown next to details. Ignore warnings.

3. Go to the **run** tab. Make sure ‘**Environment**’ is
set as ‘**Injected Web3** ’ and shows ‘**rinkeby**’.
Make sure ‘**Account**’ shows your wallet address in metamask.
This is the account from which the contract will be delpoyed. ‘Gas
limit’ and ‘Value’ has little importance on testnet but make
sure to pay enough gas on livenet.

4. Make sure ‘**User**’ is shown in the dropdown above
‘**create**’

(If any of the above steps fail, reload the browser)

5. click ‘**create**’ and a **popup** will appear on
metamask. Open metamask and **Submit** the transaction. Set a
reasonable ‘Gas limit’ and ‘Gas Price’  according to network.

6. Click on the transaction to go to
[https://rinkeby.etherscan.io/tx/](https://rinkeby.etherscan.io/tx/)
to know the status of transaction. If it is a **success**, your
contract is deployed. In the ‘**To**’ section **“[Contract
0x0000000000000000000000000000000000
Created]”** will be shown. This is your **contract address**.
Copy it. Click on it to know about the incoming transaction to the
contract.

Now the contract is deployed on the rinkeby network. You can
access it using a web app.

**Web App**

1. Open  **src/js/app.js** file. This is the javascript file
that interacts with the contract.

2. Paste your contract address replacing  '**contract_address**'
in **“web3.eth.contract(abi).at('contract_address');”**

3. Go to remix page.
In the **compile** section go to **details** tab. In the **ABI**
section click on copy button to copy your ABI code.

4. Go to 
**src/js/app.js** file and paste it replacing ‘**abi_array**’
in   **var abi = abi_array ;**

5. Open
**src/index.html** to open the web app.

**Interacting
on web App**

Fill up the user
details and click ‘**add user**’ or ‘**add admin**’. A
**popup** will open up in metamask. **Submit** the transaction.
Check transaction status to be ‘**success**’. Then the
corresponding changes are made on contract.

Fetching details
from a contract is a ‘**call**’ transaction and would’nt be
send as a transaction from metamask.

A user making a
transaction to contract is identified by his wallet address. Make
sure to switch metamask accounts before making the transaction. Only
the address from which the contract was deployed will be able to
perform certain operations. 

**Different Operations In the App**

**1.Intialising Contract**

**Output**

- msg.sender is made as creatorAdmin
- msg.sender is made as superAdmin
- msg.sender is made as verified user

**2.Create a new Property.**

**parameters**

- CreateProperty- property Id, propoerty value, property owner address

**prerequisites**

- msg.sender should be admin
- property owner should be verified user

**Output**

 mark property Id, Status as Pending, propoerty value, property owner address

**3.Approve the new Property.**

**parameters**

- approveProperty- property Id

**prerequisites**

- msg.sender should be superadmin
- current owner should not be msg.sender

**Output**

mark property Satus as Approved

**4.Reject the new Property.**

**parameters**

- rejectProperty- property Id

**prerequisites**

- msg.sender should be superadmin
- current owner should not be msg.sender

**Output** 

Mark property Satus as Rejected

**5. Request Change of Ownership.**

**parameters**

- changeOwnership- property Id, new owner address

**prerequisites**

- msg.sender should be the current owner
- new owner should be verified user
- current owner is not the new owner
- No pending ownership change request should exist.

**Output**

mark property Ownership change request

**6.Approve change in Onwership.**

**parameters**

- ApproveChangeOwnership- property Id

**prerequisites**

- msg.sender should be superadmin
- ownership change request must exist

**Output**

mark new owner address as current owner

**7.Change the price of the property.**

**parameters**

- changeValue- propoerty Id, new property value

**prerequisites**

- msg.sender should be the current owner
- No pending ownership change request should exist.

**Output**

change property value

**8.Get the property details.**

**parameters**

- GetPropertyDetails- propoerty Id

**Output**

Status, propoerty value, property owner address

**9.Add new user.**

**parameters**

- addNewUser- address

**prerequisites**

- msg.sender should be admin
- No pending request for the address should exist.(user or admin or superadmin)
- address should not be a verified user.(user or admin or superadmin)

**Output**
mark address as user

**10.Add new admin.**

**parameters**

- AddNewAdmin- address

**prerequisites**

- msg.sender should be superadmin
- No pending request for the address should exist.(user or admin or superadmin)
- address should not be a verified user.(user or admin or superadmin)

**Output**

mark address as Admin

**11.Add new SuperAdmin**

**parameters**

- addNewSuperAdmin- address

**prerequisites**

- msg.sender should be superadmin
- No pending request for the address should exist.(user or admin or superadmin)
- address should not be a verified user.(user or admin or superadmin)

**Output**

mark address as SuperAdmin

**12. Approve Pending User.**

**parameters**

- approveUsers- address

**prerequisites**

- msg.sender should be superadmin
- Pending request should exist for address

**Output**

mark address as Verified user



