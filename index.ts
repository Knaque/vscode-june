import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const colorSet: IColorSet = {
  type: 'dark',
  base: {
    background: '#141017', // black
    foreground: '#FCFCFC', // white
    color1: '#53B5CB', // blue
    color2: '#E01A4F', // red
    color3: '#218380', // green
    color4: '#F9CC2E' // yellow
  },
  syntax: {
    boolean: '#E01A4F', // red
    function: '#F9CC2E', // yellow
    functionCall: '#F9CC2E', // yellow
    identifier: '#F15946', // orange
    keyword: '#E01A4F', // red
    number: '#E01A4F', // red
    storage: '#F15946', // orange
    string: '#53B5CB', // blue
    stringEscape: '#E01A4F', // red
    comment: '#6A676C', // 95 black-white
    cssTag: '#FCFCFC', // white
    markdownQuote: '#F9CC2E' // yellow
  },
  ui: {
    cursor: '#FCFCFC', // white
    invisibles: '#6A676C', // 95 black-white
    guide: '#302C32', // 31 black-white
    currentFindMatchHighlight: '#4C3E1C', // 63 black-yellow
    selectionHighlight: '#302C32', // 31 black-white
    selection: '#302C32', // 31 black-white
    activeLinkForeground: '#4F82FF' // custom blue
  },
  terminal: {
    black: '#6A676C', // 95 black-white
    red: '#E01A4F',
    green: '#218380',
    yellow: '#F9CC2E',
    blue: '#4F82FF', // custom blue
    magenta: '#F914FA', // custom magenta
    cyan: '#49CC9E', // custom cyan
    white: '#FCFCFC',
    brightBlack: '#6A676C', // 95 black-white
    brightRed: '#E01A4F',
    brightGreen: '#218380',
    brightYellow: '#F9CC2E',
    brightBlue: '#4F82FF', // custom blue
    brightMagenta: '#F914FA', // custom magenta
    brightCyan: '#49CC9E', // custom cyan
    brightWhite: '#FCFCFC'
  }
};

generateTheme('June', colorSet, path.join(__dirname, 'theme.json'));
