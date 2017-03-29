let crypto=require('crypto');
/**
* Default config for encryption and decryption
 */
let config = {
  key: 's2#!FSDFSD!@#!~@#ASWS@!@!@#ASWEE',//encryption and decryption key default key used
  iv: '1234567890123456'
}

/**
 * constructor function for defining default config if no config present
 * @throw error length of key
*/
function EncryptorDecryptor(configPass) {
  if(configPass != undefined) {
    if (configPass.key.length != 32) throw 'Error config pass key length should be 32';
    if (configPass.iv.length != 16) throw 'Error config pass key iv length should be 16';
    this.key = configPass.key;
    this.iv = configPass.iv;
  } else {
    this.key = config.key;
    this.iv = config.iv;
  }
}

/**
 * encryptor function to encrypt a string in chiper Value
 * @param encyptStr String
 */
EncryptorDecryptor.prototype.encrypt = function (encyptStr) {

  let cipher = crypto.createCipheriv('aes-256-cbc', this.key, this.iv);

  let encryptedVal = cipher.update(encyptStr, 'utf8', 'hex');

  encryptedVal += cipher.final('hex');

  return encryptedVal;
};

/**
 * decryptor function to decrypt a string in original Value
 * @param decryptStr String
 */
EncryptorDecryptor.prototype.decrypt = function (decryptStr) {

  let decipher = crypto.createDecipheriv('aes-256-cbc', this.key, this.iv);

  //use when already added padding while encrypting, we will set autopadding of node js to false.
  //decipher.setAutoPadding(false);

  // decrypt the string passed
  let dec = decipher.update(decryptStr, 'hex', 'utf8');

  //decrypted data is stored in dec
  dec += decipher.final('utf8');

  return dec;
};

module.exports = EncryptorDecryptor;
