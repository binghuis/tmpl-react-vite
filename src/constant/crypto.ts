import Secret from '@/utils/crypto';

enum CryptoKeys {
  Auth = 'auth',
}

const authSecret = new Secret(CryptoKeys.Auth);

export { authSecret };
