import CryptoJS from "crypto-js";

const { encryptionKey, encryptionIVKey } = require("./config");

export const encrypt = (text) => {
   const secretKey = CryptoJS.enc.Base64.parse(encryptionKey); // Decode Base64 key
   const encrypted = CryptoJS.AES.encrypt(text, secretKey, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.NoPadding,
   });
   return encrypted.toString(); // Return encrypted text as Base64
};

export const decrypt = (key) => {
   const secretKey = CryptoJS.enc.Base64.parse(encryptionKey); // Decode Base64 key
   const decrypted = CryptoJS.AES.decrypt(key, secretKey, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.NoPadding,
   });
   return decrypted.toString(CryptoJS.enc.Utf8); // Convert to UTF-8 string
};
