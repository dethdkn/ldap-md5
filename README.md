<a href="http://ldap-passwords.com/">
<h1 align="center">Ldap-md5</h1>
</a>
<p align="center">Ldap MD5 password generator for node</p>
<p align="center">
   <a href="https://www.npmjs.com/package/ldap-md5">
      <img src="https://img.shields.io/npm/dt/ldap-md5?color=%23c12127&label=downloads&logo=npm" alt="npm"/>
   </a>
   <a href="https://github.com/dethdkn/ldap-md5/blob/main/LICENSE">
      <img src="https://img.shields.io/github/license/dethdkn/ldap-md5?color=%233da639&logo=open%20source%20initiative" alt="License"/>
  </a>
   <a href="https://gitmoji.dev">
      <img src="https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67" alt="Gitmoji"/>
   </a>
   <a href="https://rosa.dev.br">
      <img src="https://img.shields.io/badge/check me!-👻-F28AA9" alt="rosa.dev.br"/>
   </a>
</p>

## ✨ Features

- Encrypt a plain text password with the Ldap MD5 algorithm.
- Verify passwords encrypted with MD5.
- No external dependencies.
- **Keep in mind that MD5 is not considered a secure hashing algorithm for storing passwords, as it is vulnerable to various attacks.**

## 🚀 Setup

1. Install with your favorite package manager:
   - **pnpm** : `pnpm i ldap-md5`
   - npm : `npm i ldap-md5`
   - yarn : `yarn add ldap-md5`
   - bun : `bun add ldap-md5`

2. Import the function into your project:
```ts
import { md5, verifyMD5 } from 'ldap-md5'
```

## ⚡️ Usage

1. Encrypt a plain text password using md5:
```ts
const encryptedPassword = md5('mySuperSecretPassword')
// return {MD5}aTVgaG9NWR2N1eNABkQgYQ==
```

2. Validate your plain text password with a MD5 encrypted password:\
**The MD5 password can be either a single string or an array of strings. The plain text password will be compared to each MD5 password and the function will return true if any of them matches**
```ts
const isValid = verifyMD5('mySuperSecretPassword', arrayOfMD5Passwords)
// return true or false
```

## 📝 License

Copyright © 2024 [Gabriel 'DethDKN' Rosa](https://github.com/dethdkn)\
This project is under [MIT license](https://github.com/dethdkn/ldap-md5/blob/main/LICENSE)
