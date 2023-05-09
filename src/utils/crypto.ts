import { AES, MD5, enc } from 'crypto-js';
import { isEmpty } from 'lodash-es';

export default class Secret {
  secretKey: string;

  constructor(secretKey: string) {
    this.secretKey = MD5(secretKey).toString();
  }

  encrypt = (input: string | object) => {
    if (isEmpty(input)) {
      return '';
    }
    try {
      return AES.encrypt(JSON.stringify(input), this.secretKey).toString();
    } catch (error) {
      return '';
    }
  };

  decrypt = (input: string) => {
    if (!input) {
      return '';
    }
    try {
      return JSON.parse(AES.decrypt(input, this.secretKey).toString(enc.Utf8));
    } catch (error) {
      return '';
    }
  };
}
