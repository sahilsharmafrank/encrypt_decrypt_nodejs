# encrypt_decrypt

A server side module to encrypot and decrypt using crypto.
Compatibility with php as well.
encrypt in PHP and decrypt in nodejs and vice versa.

---------------------------------------------------------------------------

#Step 1.
   
   npm install encrypt_decrypt --save

#Step 2.

   find the sample.js file in the module folder and follow the instruction in it.

```javascript 

let EncryptorDecryptor = require('./index');

/**
 * default configuration lies in index.js
 * open this for custom configuration of keys
 */
/*let config = {
  key: 's2#!FSDFSD!@#!~@#ASWS@!@!@#ASWEQ',//encryption and decryption key default key used
  iv: '1234567890123497'
};*/

/**
 * can be used with manual configutation of keys
 * let tempObj = new EncryptorDecryptor(config);
 */
let tempObj = new EncryptorDecryptor();

//check console for values
let encyptVal = tempObj.encrypt("earth");
console.log('Encrypted Value : ', encyptVal);
let decryptVal = tempObj.decrypt(encyptVal);
console.log('Decrypted Value : ', decryptVal);

```

#Note : 
  In order to run test cases just install dev--dependencies and run make test. 
