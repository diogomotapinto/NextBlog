import NextApp from "next/app";
import { CacheProvider } from "@emotion/core";
import { AppProps } from "next/app";
import { cache } from "emotion";
import React from "react";
import { globalStyles } from "../shared/styles";

export default ({ Component, pageProps }: AppProps) => {
  return (
    <CacheProvider value={cache}>
      {globalStyles}
      <Component {...pageProps} />
    </CacheProvider>
  );
};
