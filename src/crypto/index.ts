import { MD5 } from 'crypto-js';
import Secret from './secret';

const authSecretKey = MD5('auth').toString();

const authSecret = new Secret(authSecretKey);

export { authSecret };
