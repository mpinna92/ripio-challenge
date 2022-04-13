import styled from "@emotion/styled";
import { css } from "@emotion/react";


export const Content = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-flow: column;
  z-index: 2;
  position: relative;
`;

export const Gradient = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(115, 9, 255);
  background: linear-gradient(
    218deg,
    rgba(170, 0, 255, 0.15) -100%,
    rgba(2, 0, 10, 1) 52%,
    rgba(170, 0, 255, 0.25) 380%
  );
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
`;

export const BgApp = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props: any) => props.theme.bg};
`;

export const LayoutWrapper = styled.div`
  width: 100%;
  background-color: ${(props: any) => props.theme.bg};
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  @media screen and (max-width: 1300px) {
    max-width: 90%;
  }
  &.align--center {
    height: 100%;
    align-items: center;
    display: flex;
  }
`;

export const GlobalStyles = css`
  a,
  abbr,
  acronym,
  address,
  applet,
  article,
  aside,
  audio,
  b,
  big,
  blockquote,
  body,
  canvas,
  center,
  cite,
  code,
  dd,
  del,
  details,
  dfn,
  div,
  dl,
  dt,
  em,
  embed,
  fieldset,
  figcaption,
  figure,
  footer,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  hgroup,
  html,
  i,
  iframe,
  img,
  ins,
  kbd,
  label,
  legend,
  li,
  mark,
  menu,
  nav,
  object,
  ol,
  output,
  p,
  pre,
  q,
  ruby,
  s,
  samp,
  section,
  small,
  span,
  strike,
  strong,
  sub,
  summary,
  sup,
  time,
  tt,
  u,
  ul,
  var,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
    max-width: 100%;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:after,
  blockquote:before,
  q:after,
  q:before {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button,
  input {
    border: 0 none;
    outline: 0;
  }
  button {
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  select {
    border: none;
  }
  input[type="button"],
  input[type="email"],
  input[type="submit"],
  input[type="text"] {
    border: medium none;
    border-radius: 0;
    color: #fff;
    font-size: initial;
    font-weight: 400;
    margin: 0;
    padding: 0;
    opacity: 1;
    height: auto;
    width: auto;
    -webkit-appearance: none;
    -moz-appearance: none;
    box-sizing: border-box;
  }
  input[type="checkbox"]:before,
  input[type="radio"]:before {
    border: medium none;
    background: 0 0;
    border-radius: 0;
    color: #fff;
    font-size: initial;
    font-weight: 400;
    margin: 0;
    padding: 0;
    opacity: 1;
    height: auto;
    width: auto;
    -webkit-appearance: none;
    -moz-appearance: none;
    box-sizing: border-box;
  }
  a {
    box-shadow: none;
    text-decoration: none;
  }
  html {
    padding: env(safe-area-inset);

    body {
      white-space: pre-line;
      overflow-x: hidden;
      overflow-y: auto;

      ::-webkit-scrollbar {
        width: 7px;
        height: 30px;
      }
      ::-webkit-scrollbar-thumb {
        background: #6d07e6;
      }
      ::-webkit-scrollbar-track {
        background: #242424;
      }

      /* Firefox */
      scrollbar-width: thin;
      scrollbar-color: #6d07e6 #242424;
      * {
        box-sizing: border-box;
        /* Google font */
        font-family: "Rubik", sans-serif;
        font-weight: normal;
        -webkit-tap-highlight-color: transparent;
      }
    }
  }
`;
