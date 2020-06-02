import { css, Global } from "@emotion/core";

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 1rem 1rem;
        margin: 0;
        background: teal;
        min-height: 100%;
        color: white;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 24px;
      }
    `}
  />
);
