/// <reference types="vite/client" />
/// <reference types="@emotion/react/types/css-prop" />

interface ImportMetaEnv {
  readonly VITE_AXIOS_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
