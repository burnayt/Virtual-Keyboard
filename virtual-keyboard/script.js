const string2 = 'qwertyuiop';
const string3 = 'asdfghjkl';
const string4 = 'zxcvbnm';
const enAltString1 = '~!@#$%^&*()_+';
const ruAltString1 = ' !"№;%:?*()_+';
const ruString2 = 'йцукенгшщзхъ';
const ruString3 = 'фывапролджэ';
const ruString4 = 'ячсмитьбю';

class KeyboardRows {
  constructor(keyboard) {
    this.keyboard = keyboard;
  }

  createFirstRow() {
    const row1 = document.createElement('div');
    row1.classList.add('flex-row');
    this.keyboard.append(row1);
    for (let i = 0; i < 14; i += 1) {
      const button = document.createElement('div');
      const content = document.createElement('div');

      if (i === 0) {
        button.dataset.key = '`';
        button.dataset.alt = enAltString1[i];
        button.dataset.ru = 'ё';
        button.dataset.ruAlt = 'Ё';
        button.dataset.cmd = false;
        button.dataset.mod = 'shift';
        button.dataset.ruMod = 'Caps';
      } else if (i < 10) {
        button.dataset.key = `${i}`;
        button.dataset.alt = enAltString1[i];
        button.dataset.ru = `${i}`;
        button.dataset.ruAlt = ruAltString1[i];
        button.dataset.cmd = false;
        button.dataset.mod = 'shift';
      } else if (i === 10) {
        button.dataset.key = 0;
        button.dataset.ru = 0;
        button.dataset.alt = enAltString1[i];
        button.dataset.ruAlt = ruAltString1[i];
        button.dataset.cmd = false;
        button.dataset.mod = 'shift';
      } else if (i === 11) {
        button.dataset.key = '-';
        button.dataset.ru = '-';
        button.dataset.alt = enAltString1[i];
        button.dataset.ruAlt = ruAltString1[i];
        button.dataset.cmd = false;
        button.dataset.mod = 'shift';
      } else if (i === 12) {
        button.dataset.key = '=';
        button.dataset.ru = '=';
        button.dataset.alt = enAltString1[i];
        button.dataset.ruAlt = ruAltString1[i];
        button.dataset.cmd = false;
        button.dataset.mod = 'shift';
      } else {
        button.dataset.key = 'Backspace';
        button.dataset.alt = 'Backspace';
        button.dataset.ru = 'Backspace';
        button.dataset.ruAlt = 'Backspace';
        button.dataset.cmd = true;
        button.dataset.mod = false;

        button.classList.add('double-btn');
      }

      button.append(content);

      button.classList.add('button');
      row1.append(button);
    }
    return row1;
  }

  createSecondRow() {
    const row2 = document.createElement('div');
    row2.classList.add('flex-row');
    this.keyboard.append(row2);
    for (let i = 0; i < 15; i += 1) {
      const button = document.createElement('div');
      const content = document.createElement('div');

      if (i === 0) {
        button.dataset.key = 'Tab';
        button.dataset.alt = 'Tab';
        button.dataset.ru = 'Tab';
        button.dataset.ruAlt = 'Tab';
        button.dataset.cmd = true;
        button.dataset.mod = false;
      } else if (i < 11) {
        button.dataset.key = string2[i - 1];
        button.dataset.alt = string2[i - 1].toUpperCase();
        button.dataset.ru = ruString2[i - 1];
        button.dataset.ruAlt = ruString2[i - 1].toUpperCase();
        button.dataset.cmd = false;
        button.dataset.mod = 'Caps';
      } else if (i === 11) {
        button.dataset.key = '[';
        button.dataset.alt = '{';
        button.dataset.ru = ruString2[i - 1];
        button.dataset.ruAlt = ruString2[i - 1].toUpperCase();
        button.dataset.cmd = false;
        button.dataset.mod = 'shift';
        button.dataset.ruMod = 'Caps';
      } else if (i === 12) {
        button.dataset.key = ']';
        button.dataset.alt = '}';
        button.dataset.ru = ruString2[i - 1];
        button.dataset.ruAlt = ruString2[i - 1].toUpperCase();
        button.dataset.cmd = false;
        button.dataset.mod = 'shift';
        button.dataset.ruMod = 'Caps';
      } else if (i === 13) {
        button.dataset.key = '\\';
        button.dataset.alt = '|';
        button.dataset.ru = '\\';
        button.dataset.ruAlt = '/';
        button.dataset.cmd = false;
        button.dataset.mod = 'shift';
      } else if (i === 14) {
        button.dataset.key = 'Del';
        button.dataset.alt = 'Del';
        button.dataset.ru = 'Del';
        button.dataset.ruAlt = 'Del';
        button.dataset.cmd = true;
        button.dataset.mod = false;
      }
      button.append(content);

      button.classList.add('button');
      row2.append(button);
    }
    return row2;
  }

  createThirdRow() {
    const row3 = document.createElement('div');
    row3.classList.add('flex-row');
    this.keyboard.append(row3);
    for (let i = 0; i < 13; i += 1) {
      const button = document.createElement('div');
      const content = document.createElement('div');

      if (i === 0) {
        button.dataset.key = 'CapsLock';
        button.dataset.alt = 'CapsLock';
        button.dataset.ru = 'CapsLock';
        button.dataset.ruAlt = 'CapsLock';
        button.dataset.cmd = true;
        button.dataset.mod = false;
        button.classList.add('double-btn');
      } else if (i < 10) {
        button.dataset.key = string3[i - 1];
        button.dataset.alt = string3[i - 1].toUpperCase();
        button.dataset.ru = ruString3[i - 1];
        button.dataset.ruAlt = ruString3[i - 1].toUpperCase();
        button.dataset.mod = 'Caps';
        button.dataset.cmd = false;
      } else if (i === 10) {
        button.dataset.key = ';';
        button.dataset.alt = ':';
        button.dataset.ru = ruString3[i - 1];
        button.dataset.ruAlt = ruString3[i - 1].toUpperCase();
        button.dataset.mod = 'shift';
        button.dataset.ruMod = 'Caps';
      } else if (i === 11) {
        button.dataset.key = "'";
        button.dataset.alt = '"';
        button.dataset.ru = ruString3[i - 1];
        button.dataset.ruAlt = ruString3[i - 1].toUpperCase();
        button.dataset.mod = 'shift';
        button.dataset.ruMod = 'Caps';
      } else {
        button.dataset.key = 'Enter';
        button.dataset.alt = 'Enter';
        button.dataset.ru = 'Enter';
        button.dataset.ruAlt = 'Enter';
        button.dataset.cmd = 'true';
        button.dataset.mod = 'false';

        button.classList.add('double-btn');
      }

      button.append(content);

      button.classList.add('button');
      row3.append(button);
    }
    return row3;
  }

  createFourthRow() {
    const row4 = document.createElement('div');
    row4.classList.add('flex-row');
    this.keyboard.append(row4);
    for (let i = 0; i < 13; i += 1) {
      const button = document.createElement('div');
      const content = document.createElement('div');

      if (i === 0) {
        button.dataset.key = 'Shift';
        button.dataset.alt = 'Shift';
        button.dataset.ru = 'Shift';
        button.dataset.ruAlt = 'Shift';
        button.dataset.cmd = 'true';
        button.dataset.mod = 'false';
        button.classList.add('double-btn');
      } else if (i < 8) {
        button.dataset.key = string4[i - 1];
        button.dataset.alt = string4[i - 1].toUpperCase();
        button.dataset.ru = ruString4[i - 1];
        button.dataset.ruAlt = ruString4[i - 1].toUpperCase();
        button.dataset.mod = 'Caps';
        button.dataset.cmd = false;
      } else if (i === 8) {
        button.dataset.key = ',';
        button.dataset.alt = '<';
        button.dataset.ru = ruString4[i - 1];
        button.dataset.ruAlt = ruString4[i - 1].toUpperCase();
        button.dataset.mod = 'shift';
        button.dataset.cmd = false;
        button.dataset.ruMod = 'Caps';
      } else if (i === 9) {
        button.dataset.key = '.';
        button.dataset.alt = '>';
        button.dataset.ru = ruString4[i - 1];
        button.dataset.ruAlt = ruString4[i - 1].toUpperCase();
        button.dataset.mod = 'shift';
        button.dataset.cmd = false;
        button.dataset.ruMod = 'Caps';
      } else if (i === 10) {
        button.dataset.key = '/';
        button.dataset.alt = '?';
        button.dataset.ru = '.';
        button.dataset.ruAlt = ',';
        button.dataset.mod = 'shift';
        button.dataset.cmd = false;
      } else if (i === 11) {
        button.dataset.key = '\u25b2';
        button.dataset.alt = '\u25b2';
        button.dataset.ru = '\u25b2';
        button.dataset.ruAlt = '\u25b2';
        button.dataset.mod = false;
        button.dataset.cmd = true;
      } else {
        button.dataset.key = 'Shift';
        button.dataset.alt = 'Shift';
        button.dataset.ru = 'Shift';
        button.dataset.ruAlt = 'Shift';
        button.dataset.cmd = 'true';
        button.dataset.mod = 'false';
        button.classList.add('double-btn');
      }

      button.append(content);

      button.classList.add('button');
      row4.append(button);
    }
    return row4;
  }

  createFifthRow() {
    const row5 = document.createElement('div');
    row5.classList.add('flex-row');
    this.keyboard.append(row5);
    for (let i = 0; i < 9; i += 1) {
      const button = document.createElement('div');
      const content = document.createElement('div');

      if (i === 0) {
        button.dataset.key = 'Ctrl';
        button.dataset.alt = 'Ctrl';
        button.dataset.ru = 'Ctrl';
        button.dataset.ruAlt = 'Ctrl';
        button.dataset.cmd = 'true';
        button.dataset.mod = 'false';
      } else if (i === 1) {
        button.dataset.key = 'Win';
        button.dataset.alt = 'Win';
        button.dataset.ru = 'Win';
        button.dataset.ruAlt = 'Win';
        button.dataset.cmd = 'true';
        button.dataset.mod = 'false';
      } else if (i === 2) {
        button.dataset.key = 'Alt';
        button.dataset.alt = 'Alt';
        button.dataset.ru = 'Alt';
        button.dataset.ruAlt = 'Alt';
        button.dataset.cmd = 'true';
        button.dataset.mod = 'false';
      } else if (i === 3) {
        button.dataset.key = 'Space';
        button.dataset.alt = 'Space';
        button.dataset.ru = 'Space';
        button.dataset.ruAlt = 'Space';
        button.dataset.cmd = 'true';
        button.dataset.mod = 'false';
        button.classList.add('space-btn');
      } else if (i === 4) {
        button.dataset.key = 'Alt';
        button.dataset.alt = 'Alt';
        button.dataset.ru = 'Alt';
        button.dataset.ruAlt = 'Alt';
        button.dataset.cmd = 'true';
        button.dataset.mod = 'false';
      } else if (i === 5) {
        button.dataset.key = '\u25c0';
        button.dataset.alt = '\u25c0';
        button.dataset.ru = '\u25c0';
        button.dataset.ruAlt = '\u25c0';
        button.dataset.mod = false;
        button.dataset.cmd = true;
      } else if (i === 6) {
        button.dataset.key = '\u25bc';
        button.dataset.alt = '\u25bc';
        button.dataset.ru = '\u25bc';
        button.dataset.ruAlt = '\u25bc';
        button.dataset.mod = false;
        button.dataset.cmd = true;
      } else if (i === 7) {
        button.dataset.key = '\u25b6';
        button.dataset.alt = '\u25b6';
        button.dataset.ru = '\u25b6';
        button.dataset.ruAlt = '\u25b6';
        button.dataset.mod = false;
        button.dataset.cmd = true;
      } else {
        button.dataset.key = 'Ctrl';
        button.dataset.alt = 'Ctrl';
        button.dataset.ru = 'Ctrl';
        button.dataset.ruAlt = 'Ctrl';
        button.dataset.cmd = 'true';
        button.dataset.mod = 'false';
      }

      button.append(content);

      button.classList.add('button');
      row5.append(button);
    }
    return row5;
  }
}

const body = document.querySelector('body');

const container = document.createElement('div');
container.classList.add('container');

const mainFlex = document.createElement('div');
mainFlex.classList.add('flex');

const textArea = document.createElement('textarea');
const h1 = document.createElement('h1');
h1.innerText = 'Виртуальная клавиатура';
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
keyboard.classList.add('flex-column');
const footer = document.createElement('div');
footer.innerHTML = '<p>Написано для Windows. Ctrl+Alt переключают язык.</p>';

body.prepend(container);

container.append(mainFlex);

mainFlex.append(h1);
mainFlex.append(textArea);
mainFlex.append(keyboard);
mainFlex.append(footer);

const krows = new KeyboardRows(keyboard);
const rows = [krows.createFirstRow(), krows.createSecondRow(),
  krows.createThirdRow(), krows.createFourthRow(), krows.createFifthRow(),
];

let langEn;
if (localStorage.getItem('lang') == null) {
  langEn = true;
} else {
  langEn = localStorage.getItem('lang') === 'true';
}

let isCapsEnabled = false;
let isShiftEnabled = false;

function drawKey(element) {
  const caps = (isCapsEnabled || isShiftEnabled) && !(isCapsEnabled && isShiftEnabled);
  const data = element.dataset;
  if (langEn) {
    if (data.cmd === 'true') {
      return data.key;
    }
    if (data.mod === 'shift' && isShiftEnabled) {
      return data.alt;
    }
    if (data.mod === 'shift' && !isShiftEnabled) {
      return data.key;
    }
    if (data.mod === 'Caps' && caps) {
      return data.alt;
    }
    if (data.mod === 'Caps' && !caps) {
      return data.key;
    }
  } else {
    const isSymbol = data.ru.toUpperCase() === data.ruAlt;
    if (data.cmd === 'true') {
      return data.key;
    }
    if (!isSymbol && data.mod === 'shift' && isShiftEnabled) {
      return data.ruAlt;
    }
    if (!isSymbol && data.mod === 'shift' && !isShiftEnabled) {
      return data.ru;
    }
    if (isSymbol && caps) {
      return data.ruAlt;
    }
    if ((data.ru.toUpperCase() === data.ruAlt) && !caps) {
      return data.ru;
    }
  }
  return '';
}

function DrawKeys() {
  for (let i = 0; i < rows.length; i += 1) {
    for (let j = 0; j < rows[i].children.length; j += 1) {
      rows[i].children[j].innerText = drawKey(rows[i].children[j]);
    }
  }
}

DrawKeys();

textArea.value = 'asklfjsalgnsafnwouihl ';

const kbToButton = [{
  Minus: '-',
},
{
  Equal: '=',
},
{
  Backquote: '`',
},
{
  BracketLeft: '[',
},
{
  BracketRight: ']',
},
{
  Semicolon: ';',
},
{
  Quote: "'",
},
{
  Comma: ',',
},
{
  Period: ',',
},
{
  Slash: '/',
},
{
  Backslash: '\\',
},
{
  Enter: 'Enter',
},
{
  ShiftLeft: 'Shift',
},
{
  ShiftRight: 'Shift',
},
{
  ControlLeft: 'Ctrl',
},
{
  ControlRight: 'Ctrl',
},
{
  Tab: 'Tab',
},
{
  CapsLock: 'CapsLock',
},
{
  AltLeft: 'Alt',
},
{
  AltRight: 'Alt',
},
{
  Backspace: 'Backspace',
},
{
  Space: 'Space',
},
{
  Delete: 'Del',
},
{
  ArrowLeft: '\u25c0',
},
{
  ArrowUp: '\u25b2',
},
{
  ArrowDown: '\u25bc',
},
{
  ArrowRight: '\u25b6',
},
{
  MetaLeft: 'Win',
},
];

function handle(button) {
  if (button && button instanceof HTMLDivElement && button.classList.contains('button')) {
    button.classList.add('highlight');
    button.classList.add('pressed');
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const { value } = textArea;
    const { length } = value;
    if (button.dataset.cmd === 'true') {
      if (button.dataset.key === 'Backspace') {
        if (start === end) {
          textArea.value = textArea.value.substring(0, start - 1)
          + textArea.value.substring(end, length);
          textArea.selectionStart = start - 1;
          textArea.selectionEnd = start - 1;
        } else {
          textArea.value = textArea.value.substring(0, start)
          + textArea.value.substring(end, length);
          textArea.selectionStart = start;
          textArea.selectionEnd = start;
        }
      } else if (button.dataset.key === 'Del') {
        if (start === end) {
          textArea.value = textArea.value.substring(0, start)
          + textArea.value.substring(end + 1, length);
          textArea.selectionStart = start;
          textArea.selectionEnd = start;
        } else {
          textArea.value = textArea.value.substring(0, start)
          + textArea.value.substring(end, length);
          textArea.selectionStart = start;
          textArea.selectionEnd = start;
        }
      } else if (button.dataset.key === 'Enter') {
        textArea.value = `${textArea.value.substring(0, start)}\n${textArea.value.substring(end, length)}`;
        textArea.selectionStart = start + 1;
        textArea.selectionEnd = start + 1;
      } else if (button.dataset.key === 'Tab') {
        textArea.value = `${textArea.value.substring(0, start)}\t${textArea.value.substring(end, length)}`;
        textArea.selectionStart = start + 1;
        textArea.selectionEnd = start + 1;
      } else if (button.dataset.key === '\u25c0') {
        textArea.value = `${textArea.value.substring(0, start)}\u25c0${textArea.value.substring(end, length)}`;
        textArea.selectionStart = start + 1;
        textArea.selectionEnd = start + 1;
      } else if (button.dataset.key === '\u25b2') {
        textArea.value = `${textArea.value.substring(0, start)}\u25b2${textArea.value.substring(end, length)}`;
        textArea.selectionStart = start + 1;
        textArea.selectionEnd = start + 1;
      } else if (button.dataset.key === '\u25bc') {
        textArea.value = `${textArea.value.substring(0, start)}\u25bc${textArea.value.substring(end, length)}`;
        textArea.selectionStart = start + 1;
        textArea.selectionEnd = start + 1;
      } else if (button.dataset.key === '\u25b6') {
        textArea.value = `${textArea.value.substring(0, start)}\u25b6${textArea.value.substring(end, length)}`;
        textArea.selectionStart = start + 1;
        textArea.selectionEnd = start + 1;
      } else if (button.dataset.key === 'Space') {
        textArea.value = `${textArea.value.substring(0, start)} ${textArea.value.substring(end, length)}`;
        textArea.selectionStart = start + 1;
        textArea.selectionEnd = start + 1;
      }
    } else {
      textArea.value = textArea.value.substring(0, start) + button.innerText
      + textArea.value.substring(end, length);
      textArea.selectionStart = start + 1;
      textArea.selectionEnd = start + 1;
    }
  }
}
function standartizeKbInput(e) {
  const { code } = e;
  let result;
  if (code.includes('Digit')) {
    result = code.replace('Digit', '');
  } else if (code.includes('Key')) {
    result = code.replace('Key', '').toLowerCase();
  } else {
    for (let i = 0; i < kbToButton.length; i += 1) {
      if (code in kbToButton[i]) {
        result = kbToButton[i][code];
      }
    }
  }
  for (let i = 0; i < rows.length; i += 1) {
    for (let j = 0; j < rows[i].children.length; j += 1) {
      if (rows[i].children[j].dataset.key === result) {
        return rows[i].children[j];
      }
    }
  }
  return null;
}
body.addEventListener('keydown', (e) => {
  if (e.altKey && e.ctrlKey) {
    langEn = !langEn;
    localStorage.setItem('lang', langEn);

    DrawKeys();
  }

  if (e.key === 'CapsLock') {
    isCapsEnabled = !isCapsEnabled;
    DrawKeys();
  }
  if (e.shiftKey) {
    isShiftEnabled = true;
    DrawKeys();
  } else {
    isShiftEnabled = false;
    DrawKeys();
  }
  const button = standartizeKbInput(e);
  handle(button);
});

body.addEventListener('keyup', (e) => {
  const button = standartizeKbInput(e);

  if (button && button instanceof HTMLDivElement && button.classList.contains('button')) {
    if (button.dataset.key !== 'CapsLock') {
      button.classList.remove('highlight');
      button.classList.remove('pressed');
    } else if (!isCapsEnabled) {
      button.classList.remove('highlight');
      button.classList.remove('pressed');
    } else if (button.dataset.key === 'CapsLock' && isCapsEnabled === false) {
      button.classList.remove('highlight');
      button.classList.remove('pressed');
    }
  }

  if (e.key === 'Shift') {
    isShiftEnabled = false;
  }
  DrawKeys();
});

body.addEventListener('mousedown', (e) => {
  if (e.target.dataset.key === 'CapsLock') {
    isCapsEnabled = !isCapsEnabled;
    DrawKeys();
  }
  handle(e.target);
});
body.addEventListener('mouseup', (e) => {
  const button = e.target;
  if (button && button instanceof HTMLDivElement && button.classList.contains('button')) {
    if (button.dataset.key !== 'CapsLock') {
      button.classList.remove('highlight');
      button.classList.remove('pressed');
    } else if (!isCapsEnabled) {
      button.classList.remove('highlight');
      button.classList.remove('pressed');
    } else if (button.dataset.key === 'CapsLock' && isCapsEnabled === false) {
      button.classList.remove('highlight');
      button.classList.remove('pressed');
    }
  }
});
body.addEventListener('mouseout', (e) => {
  const button = e.target;
  if (button && button instanceof HTMLDivElement && button.classList.contains('button')) {
    if (button.dataset.key !== 'CapsLock') {
      button.classList.remove('highlight');
      button.classList.remove('pressed');
    }
  }
});

textArea.addEventListener('keydown', (e) => {
  e.preventDefault();
});
textArea.addEventListener('keyup', (e) => {
  e.preventDefault();
});
textArea.addEventListener('keypress', (e) => {
  e.preventDefault();
});
