import { css, Global } from "@emotion/core";

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 1rem 1rem;
        margin: 0;
        background: white;
        min-height: 100%;
        color: black;
        font-family: Helvetica, Arial, sans-serif;
        font-size: 24px;
        button {
          background-color: cornflowerblue;
          margin: 1em;
          border: solid 5px cornflowerblue;
          border-radius: 1em;
          color: white;
          width: 100%;
        }
      }
    `}
  />
);
