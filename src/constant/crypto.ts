import Secret from "@/utils/crypto";
import { MD5 } from "crypto-js";

enum CryptoKeys {
	Auth = "auth",
}

const authSecretKey = MD5(CryptoKeys.Auth).toString();
const authSecret = new Secret(authSecretKey);

export { authSecret };
