/* eslint-disable no-unused-expressions */
import { injectGlobal } from 'styled-components';
import WebFontLoader from 'webfontloader';

/* stylelint-disable */
injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }`;

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});
