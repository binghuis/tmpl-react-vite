interface IAuthHeader {
  Authorization: string;
  // 业务侧 token
  auth_token: string;
}

export const getAuthHeader = (token?: string): IAuthHeader | Record<string, never> => {
  return token
    ? {
        Authorization: `Bearer ${token}`,
        auth_token: token,
      }
    : {};
};
