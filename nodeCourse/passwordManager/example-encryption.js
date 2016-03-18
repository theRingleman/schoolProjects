var crypto = require('crypto-js');

var secretMessage = {
  name: 'Sam',
  secretName: '007'
};
var secretKey = '123abc';
var secretMessageStr = JSON.stringify(secretMessage);

// Encrypt
var encryptedMessage = crypto.AES.encrypt(secretMessageStr, secretKey);
console.log('Encrypted Message: ' + encryptedMessage);

// Decrypt
var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = bytes.toString(crypto.enc.Utf8);
console.log('Decrypted message: ' + decryptedMessage);

var decryptedMessageObj = JSON.parse(decryptedMessage);
console.log(decryptedMessageObj.secretName);
