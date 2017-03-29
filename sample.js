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
