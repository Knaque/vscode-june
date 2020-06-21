import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const colorSet: IColorSet = {
  type: 'dark',
  base: {
    background: '#0c090d',
    foreground: '#ffffc7',
    color1: '#53b3cb',
    color2: '#e01a4f',
    color3: '#218380',
    color4: '#f9c22e'
  },
  syntax: {
    boolean: '#e01a4f',
    function: '#f9c22e',
    functionCall: '#f9c22e',
    identifier: '#f15946',
    keyword: '#e01a4f',
    number: '#e01a4f',
    storage: '#f15946',
    string: '#53b3cb',
    stringEscape: '#e01a4f',
    comment: '#666452',
    cssTag: '#ffffc7',
    markdownQuote: '#f9c22e'
  },
  ui: {
    cursor: '#ffffc7',
    invisibles: '#666452',
    guide: '#292623',
    currentFindMatchHighlight: '#400D1D',
    selectionHighlight: '#292623',
    selection: '#292623',
    activeLinkForeground: '#4F7FFF'
  },
  terminal: {
    black: '#666452',
    red: '#e01a4f',
    green: '#218380',
    yellow: '#f9c22e',
    blue: '#4F7FFF',
    magenta: '#C210E0',
    cyan: '#49CC9E',
    white: '#ffffc7',
    brightBlack: '#666452',
    brightRed: '#e01a4f',
    brightGreen: '#218380',
    brightYellow: '#f9c22e',
    brightBlue: '#4F7FFF',
    brightMagenta: '#C210E0',
    brightCyan: '#49CC9E',
    brightWhite: '#ffffc7'
  }
};

generateTheme('June', colorSet, path.join(__dirname, 'theme.json'));
