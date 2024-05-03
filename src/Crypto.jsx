import CryptoJS from 'crypto-js';

var key = CryptoJS.enc.Utf8.parse('1234567887654321!@#$%^&*()-_+=/.,;:`~');
var iv = CryptoJS.enc.Utf8.parse('1234567887654321!@#$%^&*()-_+=/.,;:`~');

export const encrypted = (data) => {
    var encryptedData = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(data), key, {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7 
    });
    return encryptedData.toString();
}

export const decrypted = (data) => {
    var decryptedData = CryptoJS.AES.decrypt(data, key, {
        keySize: 128 / 8,
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7 
    });
    return CryptoJS.enc.Utf8.stringify(decryptedData);
}
