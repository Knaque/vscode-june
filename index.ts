import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const white = "#fcfcfc"
const red = "#e01a4f"
const orange = "#f15f45"
const yellow = "#fad537"
const green = "#98cb32"
const blue = "#53b5cb"
const black = "#141017"
const bw95 = "#6A676C"
const bw31 = "#302C32"
const by63 = "#4C401E"
const magenta = "#F113A5"
const cyan = "#399B98"
const dblue = "#4E76D9"

const colorSet: IColorSet = {
  type: 'dark',
  base: {
    background: black,
    foreground: white,
    color1: blue,
    color2: red,
    color3: green,
    color4: yellow
  },
  syntax: {
    boolean: red,
    function: yellow,
    functionCall: yellow,
    identifier: orange,
    keyword: red,
    number: red,
    storage: orange,
    string: blue,
    stringEscape: red,
    comment: bw95,
    cssTag: white,
    markdownQuote: yellow
  },
  ui: {
    cursor: white,
    invisibles: bw95,
    guide: bw31,
    currentFindMatchHighlight: by63,
    selectionHighlight: bw31,
    selection: bw31,
    activeLinkForeground: dblue
  },
  terminal: {
    black: bw95,
    red: red,
    green: green,
    yellow: yellow,
    blue: blue,
    magenta: magenta,
    cyan: cyan,
    white: white,
    brightBlack: bw95,
    brightRed: red,
    brightGreen: green,
    brightYellow: yellow,
    brightBlue: blue,
    brightMagenta: magenta,
    brightCyan: cyan,
    brightWhite: white
  }
};

generateTheme('June', colorSet, path.join(__dirname, 'theme.json'));
