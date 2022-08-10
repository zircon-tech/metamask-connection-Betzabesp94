## Unit 4: Web3 | Metamask Connection with Frontend -English Version- 🚀

### NextJS with typescript and web3Modal

Web3Modal is a useful package that allows you to easily integrate several connection methods defined as "providerOptions", you only need to specified them, it comes by default with metamask. for interactions with smart contract ethers is used and it's required the contract abi and the contract address.

you can get the abi from the compilation in your blockchain development framework. I just copied on a different file saved as JSON and then imported and set the abi. The contract address is the same as the deploy in the previous repo. 


#### Setup

```
npx create-next-app --ts <Name-Of-Your-App>
```

you can also use Yarn

```
npm run dev
```

to start the development server to test that is working properly

to this setup you will also need to add @walletconnect/web3-provider and web3modal

### Quick Start

To run this repo properly you will need to create a .env.local file and name the variables with the prefix NEXT_PUBLIC

The smart contract for interact will be the Voting contract.

The first thing is to click the button connect select the provider and select the account, once connected will be a button for interact called Execute. 

I've tested this feature a couple of times when invoke functions addAdmin and Vote of the contract 

add admin
![AddadminCode](https://github.com/zircon-tech/metamask-connection-Betzabesp94/blob/main/media/addadmincode.PNG?raw=true)

![addAdmin](https://github.com/zircon-tech/metamask-connection-Betzabesp94/blob/blob/main/media/addadmin.PNG?raw=true)

vote 
![vote](https://github.com/zircon-tech/metamask-connection-Betzabesp94/blob/blob/main/media/vote.PNG?raw=true)

### Issues faced
- typedefinition signer at pages/index.tsx l.34, bassically I couldn't asingn a value (solved by set type <any>) 
- Type error cannot read properties of undefied (reading 'Contract')
![err2](https://github.com/zircon-tech/metamask-connection-Betzabesp94/blob/blob/main/media/err2.JPG?raw=true)
Previous Solved by changing from 
```typescript
import ethers from “ethers” 
```
to 
```typescript
import { ethers }from “ethers” 
```

this helped me: [Stack Exchange Question](https://ethereum.stackexchange.com/questions/119669/getting-typeerror-cannot-read-properties-of-undefined-reading-arrayify-wh) 


### Deploying with vercel

https://metamask-connection-betzabesp94.vercel.app/

alternatively, if you want to tested directly from etherscan 
- [Etherscan Contract Read](https://kovan.etherscan.io/address/0x947D0f6E593e30e0eE27f8D4BB6d4805fd1964e6#readContract) (Search for proposal 0, and votingOption 5)
- [Etherscan Contract Write](https://kovan.etherscan.io/address/0x947D0f6E593e30e0eE27f8D4BB6d4805fd1964e6#writeContract)

Ask Betza (me)🙆‍♀️ for writting permissions, basically, that sets you as a voter. 


## Unidad 4: Web3 | Conexión de Metamask con Frontend -Versión en español- 🚀

Web3Modal es un paquete útil que le permite integrar fácilmente varios métodos de conexión definidos como "providerOptions", solo necesita especificarlos, para las interacciones con el contrato inteligente se usa ethers y se requiere el abi del contrato y la dirección del mismo.

#### Setup

```
npx create-next-app --ts <Name-Of-Your-App>
```

Tambien se puede usar Yarn

```
npm run dev
```

Para iniciar el servidor local de desarrollo y probar que todo funcione

Para esta configuracion tambien se necesitará @walletconnect/web3-provider y web3modal

### Quick Start

Para correr este repo necesitas crear un .env.local y colocar la variable de entorno con el prefijo NEXT_PUBLIC como esta en .env.example

El contrato para interactuar sera el Voting.

Lo primero es hacer clic en el botón conectar seleccionar el proveedor y seleccionar la cuenta, una vez conectado habrá un botón para interactuar llamado Execute.

He probado esta función un par de veces cuando invoco las funciones addAdmin y Vote del contrato.

add admin
![AddadminCode](https://github.com/zircon-tech/metamask-connection-Betzabesp94/blob/main/media/addadmincode.PNG?raw=true)

![addAdmin](https://github.com/zircon-tech/metamask-connection-Betzabesp94/blob/blob/main/media/addadmin.PNG?raw=true)

vote 
![vote](https://github.com/zircon-tech/metamask-connection-Betzabesp94/blob/blob/main/media/vote.PNG?raw=true)

### Problemas
- typedefinition signer en pages/index.tsx l.34, basicamente no podía asiganele un valor (arreglado definiendo tipo  <any>) 
- Type error cannot read properties of undefied (reading 'Contract')
![err2](https://github.com/zircon-tech/metamask-connection-Betzabesp94/blob/blob/main/media/err2.JPG?raw=true)
Lo anterior se solucionó cambiando de 
```typescript
import ethers from “ethers” 
```
a 
```typescript
import { ethers }from “ethers” 
```

Esta publicación me ayudó: [Pregunta Stack Exchange](https://ethereum.stackexchange.com/questions/119669/getting-typeerror-cannot-read-properties-of-undefined-reading-arrayify-wh) 


### Despliegue con vercel
https://metamask-connection-betzabesp94.vercel.app/

Puedes probar directamente en etherscan: 
- [Etherscan Contrato Lectura ](https://kovan.etherscan.io/address/0x947D0f6E593e30e0eE27f8D4BB6d4805fd1964e6#readContract) (Search for proposal 0, and votingOption 5)
- [Etherscan Contrato Escritura](https://kovan.etherscan.io/address/0x947D0f6E593e30e0eE27f8D4BB6d4805fd1964e6#writeContract)

Si quieres probar pidele a Betza (yo) 🙆‍♀️ permisos de escritura, basicamente, que te agregue como votante. 



