var should = require('chai').should(),
    EncryptorDecryptor = require('../index');
/**
* Default config for encryption and decryption
 */
let config = {
  key: 's2#!FSDFSD!@#!~@#ASWS@!@!@#ASWEE',//encryption and decryption key default key used
  iv: '1234567890123456'
}
/**
 * object of EncryptorDecryptor class
 * can be used without configuration also let tempObj = new EncryptorDecryptor();
 */
let tempObj = new EncryptorDecryptor(config);

/**
 *encryption of encrypted Values
 */
describe('#encrypt', function() {
  it('encrypt other Val into 271afa9b4113acb727c7063e29982ab1', function() {
    tempObj.encrypt('other Val').should.equal('271afa9b4113acb727c7063e29982ab1');
  });

  it('encrypt earth into 545d0c040009034034be5924fd2620da', function() {
    tempObj.encrypt('earth').should.equal('545d0c040009034034be5924fd2620da');
  });

  it('encrypt earth into 545d0c040009034034be5924fd2620da fail case', function() {
    tempObj.encrypt('earth').should.not.equal('5454545d0c040009034034be5924fd2620da');
  });

});

/**
 *decryption of encrypted Values
 */
describe('#decrypt', function() {
  it('decrypt 271afa9b4113acb727c7063e29982ab1 into other Val', function() {
    tempObj.decrypt('271afa9b4113acb727c7063e29982ab1').should.equal('other Val');
  });

  it('decrypt 545d0c040009034034be5924fd2620da into earth', function() {
    tempObj.decrypt('545d0c040009034034be5924fd2620da').should.equal('earth');
  });

  it('decrypt 545d0c040009034034be5924fd2620da into eaarth fail case', function() {
    tempObj.decrypt('545d0c040009034034be5924fd2620da').should.not.equal('eaarth');
  });
});
