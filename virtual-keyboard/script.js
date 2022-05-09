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
footer.innerHTML = '<p>Написано для Windows. Ctrl+Alt переключают язык.</p>'

const row1 = document.createElement('div');
row1.classList.add('flex-row');
keyboard.append(row1);

const row2 = document.createElement('div');
row2.classList.add('flex-row');
keyboard.append(row2);

const row3 = document.createElement('div');
row3.classList.add('flex-row');
keyboard.append(row3);

const row4 = document.createElement('div');
row4.classList.add('flex-row');
keyboard.append(row4);

const row5 = document.createElement('div');
row5.classList.add('flex-row');
keyboard.append(row5);
let rows = [row1, row2, row3, row4, row5];

body.prepend(container);

container.append(mainFlex);

mainFlex.append(h1);
mainFlex.append(textArea);
mainFlex.append(keyboard);
mainFlex.append(footer);


const string2 = 'qwertyuiop';
const string3 = 'asdfghjkl';
const string4 = 'zxcvbnm';
const enAltString1 = '~!@#$%^&*()_+';
const ruAltString1 = ' !"№;%:?*()_+';
const ruString2 = 'йцукенгшщзхъ';
const ruString3 = 'фывапролджэ';
const ruString4 = 'ячсмитьбю';

// FIRST ROW SETUP
for (let i = 0; i < 14; i++) {
    const button = document.createElement('div');
    const content = document.createElement('div');

    if (i == 0) {
        button.dataset.key = '`';
        button.dataset.alt = enAltString1[i];
        button.dataset.ru = 'ё';
        button.dataset.ruAlt = 'Ё';
        button.dataset.cmd = false;
        button.dataset.mod = 'shift';
        button.dataset.ruMod = 'Caps';
    } else if (i < 10) {
        //button.innerText = i + ' ';
        button.dataset.key = i + '';
        button.dataset.alt = enAltString1[i];
        button.dataset.ru = i + '';
        button.dataset.ruAlt = ruAltString1[i];
        button.dataset.cmd = false;
        button.dataset.mod = 'shift';
    } else if (i == 10) {
        button.dataset.key = 0;
        button.dataset.ru = 0;
        button.dataset.alt = enAltString1[i];
        button.dataset.ruAlt = ruAltString1[i]
        button.dataset.cmd = false;
        button.dataset.mod = 'shift';
    } else if (i == 11) {
        button.dataset.key = '-';
        button.dataset.ru = '-';
        button.dataset.alt = enAltString1[i];
        button.dataset.ruAlt = ruAltString1[i];
        button.dataset.cmd = false;
        button.dataset.mod = 'shift';
    } else if (i == 12) {
        button.dataset.key = '=';
        button.dataset.ru = '=';
        button.dataset.alt = enAltString1[i];
        button.dataset.ruAlt = ruAltString1[i]; // 
        button.dataset.cmd = false;
        button.dataset.mod = 'shift';
    } else {
        button.dataset.key = 'Backspace'
        button.dataset.alt = 'Backspace'
        button.dataset.ru = 'Backspace'
        button.dataset.ruAlt = 'Backspace'
        button.dataset.cmd = true;
        button.dataset.mod = false;

        button.classList.add('double-btn');
    }

    button.append(content)

    button.classList.add('button');
    row1.append(button);
}
// SECOND ROW SETUP
for (let i = 0; i < 15; i++) {
    const button = document.createElement('div');
    const content = document.createElement('div');

    if (i == 0) {
        button.dataset.key = 'Tab';
        button.dataset.alt = 'Tab';
        button.dataset.ru = 'Tab';
        button.dataset.ruAlt = 'Tab';
        button.dataset.cmd = true;
        button.dataset.mod = false;
    } else if (i < 11) {
        //button.innerText = i + ' ';
        button.dataset.key = string2[i - 1];
        button.dataset.alt = string2[i - 1].toUpperCase();
        button.dataset.ru = ruString2[i - 1];
        button.dataset.ruAlt = ruString2[i - 1].toUpperCase();
        button.dataset.cmd = false;
        button.dataset.mod = 'Caps';
    } else if (i == 11) {
        button.dataset.key = '[';
        button.dataset.alt = '{';
        button.dataset.ru = ruString2[i - 1];
        button.dataset.ruAlt = ruString2[i - 1].toUpperCase();
        button.dataset.cmd = false;
        button.dataset.mod = 'shift';
        button.dataset.ruMod = 'Caps';
    } else if (i == 12) {
        button.dataset.key = ']';
        button.dataset.alt = '}';
        button.dataset.ru = ruString2[i - 1];
        button.dataset.ruAlt = ruString2[i - 1].toUpperCase();
        button.dataset.cmd = false;
        button.dataset.mod = 'shift';
        button.dataset.ruMod = 'Caps';
    } else if (i == 13) {
        button.dataset.key = '\\';
        button.dataset.alt = '|';
        button.dataset.ru = '\\';
        button.dataset.ruAlt = '/';
        button.dataset.cmd = false;
        button.dataset.mod = 'shift';
    } else if (i == 14) {
        button.dataset.key = 'Del';
        button.dataset.alt = 'Del';
        button.dataset.ru = 'Del';
        button.dataset.ruAlt = 'Del';
        button.dataset.cmd = true;
        button.dataset.mod = false;
    }


    button.append(content)

    button.classList.add('button');
    row2.append(button);
}

// THIRD ROW SETUP
for (let i = 0; i < 13; i++) {
    const button = document.createElement('div');
    const content = document.createElement('div');

    if (i == 0) {
        button.dataset.key = 'CapsLock';
        button.dataset.alt = 'CapsLock';
        button.dataset.ru = 'CapsLock';
        button.dataset.ruAlt = 'CapsLock';
        button.dataset.cmd = true;
        button.dataset.mod = false;
        button.classList.add('double-btn');
    } else if (i < 10) {
        //button.innerText = i + ' ';
        button.dataset.key = string3[i - 1];
        button.dataset.alt = string3[i - 1].toUpperCase();
        button.dataset.ru = ruString3[i - 1];
        button.dataset.ruAlt = ruString3[i - 1].toUpperCase();
        button.dataset.mod = 'Caps';
        button.dataset.cmd = false;
    } else if (i == 10) {
        button.dataset.key = ';';
        button.dataset.alt = ':';
        button.dataset.ru = ruString3[i - 1]
        button.dataset.ruAlt = ruString3[i - 1].toUpperCase();
        button.dataset.mod = 'shift';
        button.dataset.ruMod = 'Caps';
    } else if (i == 11) {
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

    button.append(content)

    button.classList.add('button');
    row3.append(button);
}

// 5 ROW SETUP 
for (let i = 0; i < 13; i++) {
    const button = document.createElement('div');
    const content = document.createElement('div');

    if (i == 0) {
        button.dataset.key = 'Shift';
        button.dataset.alt = 'Shift';
        button.dataset.ru = 'Shift';
        button.dataset.ruAlt = 'Shift';
        button.dataset.cmd = 'true';
        button.dataset.mod = 'false';
        button.classList.add('double-btn');
    } else if (i < 8) {
        //button.innerText = i + ' ';
        button.dataset.key = string4[i - 1];
        button.dataset.alt = string4[i - 1].toUpperCase();
        button.dataset.ru = ruString4[i - 1];
        button.dataset.ruAlt = ruString4[i - 1].toUpperCase();
        button.dataset.mod = 'Caps';
        button.dataset.cmd = false;

    } else if (i == 8) {
        button.dataset.key = ',';
        button.dataset.alt = '<';
        button.dataset.ru = ruString4[i - 1];
        button.dataset.ruAlt = ruString4[i - 1].toUpperCase();
        button.dataset.mod = 'shift';
        button.dataset.cmd = false;
        button.dataset.ruMod = 'Caps';

    } else if (i == 9) {
        button.dataset.key = ".";
        button.dataset.alt = '>';
        button.dataset.ru = ruString4[i - 1];
        button.dataset.ruAlt = ruString4[i - 1].toUpperCase();
        button.dataset.mod = 'shift';
        button.dataset.cmd = false;
        button.dataset.ruMod = 'Caps';
    } else if (i == 10) {
        button.dataset.key = "/";
        button.dataset.alt = '?';
        button.dataset.ru = '.';
        button.dataset.ruAlt = ',';
        button.dataset.mod = 'shift';
        button.dataset.cmd = false;
    } else if (i == 11) {
        button.dataset.key = '\u25b2';
        button.dataset.alt = '\u25b2';
        button.dataset.ru = '\u25b2';
        button.dataset.ruAlt = '\u25b2';
        button.dataset.mod = false;
        button.dataset.cmd = true;
        //button.classList.add('double-btn');
    } else {
        button.dataset.key = 'Shift';
        button.dataset.alt = 'Shift';
        button.dataset.ru = 'Shift';
        button.dataset.ruAlt = 'Shift';
        button.dataset.cmd = 'true';
        button.dataset.mod = 'false';
        button.classList.add('double-btn');
    }

    button.append(content)

    button.classList.add('button');
    row4.append(button);
}

for (let i = 0; i < 9; i++) {
    const button = document.createElement('div');
    const content = document.createElement('div');

    if (i == 0) {
        button.dataset.key = 'Ctrl';
        button.dataset.alt = 'Ctrl';
        button.dataset.ru = 'Ctrl';
        button.dataset.ruAlt = 'Ctrl';
        button.dataset.cmd = 'true';
        button.dataset.mod = 'false';

    } else if (i == 1) {
        button.dataset.key = 'Win';
        button.dataset.alt = 'Win';
        button.dataset.ru = 'Win';
        button.dataset.ruAlt = 'Win';
        button.dataset.cmd = 'true';
        button.dataset.mod = 'false';
    } else if (i == 2) {
        button.dataset.key = 'Alt';
        button.dataset.alt = 'Alt';
        button.dataset.ru = 'Alt';
        button.dataset.ruAlt = 'Alt';
        button.dataset.cmd = 'true';
        button.dataset.mod = 'false';
    } else if (i == 3) {
        button.dataset.key = 'Space';
        button.dataset.alt = 'Space';
        button.dataset.ru = 'Space';
        button.dataset.ruAlt = 'Space';
        button.dataset.cmd = 'true';
        button.dataset.mod = 'false';
        button.classList.add('space-btn');

    } else if (i == 4) {
        button.dataset.key = 'Alt';
        button.dataset.alt = 'Alt';
        button.dataset.ru = 'Alt';
        button.dataset.ruAlt = 'Alt';
        button.dataset.cmd = 'true';
        button.dataset.mod = 'false';
        //button.innerText = '0';
    } else if (i == 5) {
        button.dataset.key = "\u25c0";
        button.dataset.alt = '\u25c0';
        button.dataset.ru = '\u25c0';
        button.dataset.ruAlt = '\u25c0';
        button.dataset.mod = false;
        button.dataset.cmd = true;
    } else if (i == 6) {
        button.dataset.key = "\u25bc";
        button.dataset.alt = '\u25bc';
        button.dataset.ru = '\u25bc';
        button.dataset.ruAlt = '\u25bc';
        button.dataset.mod = false;
        button.dataset.cmd = true;
    } else if (i == 7) {
        button.dataset.key = '\u25b6';
        button.dataset.alt = '\u25b6';
        button.dataset.ru = '\u25b6';
        button.dataset.ruAlt = '\u25b6';
        button.dataset.mod = false;
        button.dataset.cmd = true;
        //button.classList.add('double-btn');
    } else {
        button.dataset.key = 'Ctrl';
        button.dataset.alt = 'Ctrl';
        button.dataset.ru = 'Ctrl';
        button.dataset.ruAlt = 'Ctrl';
        button.dataset.cmd = 'true';
        button.dataset.mod = 'false';

    }

    button.append(content)

    button.classList.add('button');
    row5.append(button);
}
// EN ru


let langEn;
if (localStorage.getItem('lang') == null) {
    langEn = true;
}
else{
    langEn = localStorage.getItem('lang') == 'true'? true : false;
}


let isCapsEnabled = false;
let isShiftEnabled = false;
let highLightKeys = [];
let lastKey = null;
let lastKeyTimeStamp = 0;

function drawKey(element) {
    const caps = (isCapsEnabled || isShiftEnabled) && !(isCapsEnabled && isShiftEnabled);
    const data = element.dataset;
    if (langEn) {
        if (data.cmd === 'true') {
            return data.key;
        } else if (data.mod == 'shift' && isShiftEnabled) {
            return data.alt;
        } else if (data.mod == 'shift' && !isShiftEnabled) {
            return data.key;
        } else if (data.mod == 'Caps' && caps) {
            return data.alt;
        } else if (data.mod == 'Caps' && !caps) {
            return data.key
        }

    } else {
        const isSymbol = data.ru.toUpperCase() == data.ruAlt;
        //console.log(data.ru, isSymbol)
        if (data.cmd === 'true') {
            return data.key;
        } else if (!isSymbol && data.mod == 'shift' && isShiftEnabled) {
            return data.ruAlt;
        } else if (!isSymbol && data.mod == 'shift' && !isShiftEnabled) {
            return data.ru;
        } else if (isSymbol && caps) {
            return data.ruAlt;
        } else if ((data.ru.toUpperCase() == data.ruAlt) && !caps) {
            return data.ru
        }

    }
}

function DrawKeys() {
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < rows[i].children.length; j++) {

            rows[i].children[j].innerText = drawKey(rows[i].children[j])

        }
    }
}

DrawKeys();
//https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
function CheckENKey(element) {
    return element.dataset.key.charCodeAt(0) >= 97 &&
        element.dataset.key.charCodeAt(0) <= 122
}

function CheckRuKey(element) {
    return element.dataset.ru && element.dataset.ru.charCodeAt(0) >= 1072 &&
        element.dataset.ru.charCodeAt(0) <= 1103 ||
        element.dataset.ru.charCodeAt(0) == 1025
}

function CheckServiceKey(element) {
    return element.key == 'Ctrl' || element.key == 'Tab' || element.key == 'Shift' ||
        element.key == 'Win' || element.key == 'Alt' || element.key == 'Enter' ||
        element.key == 'Del' || element.key == 'CapsLock' || element.key == "\u25c0" ||
        element.key == "\u25bc" || element.key == '\u25b6' || element.key == '\u25b2';
}
textArea.value = 'asklfjsalgnsafnwouihl '
let update = setInterval(function () {
    console.log()
}, 150)
const kbToButton = [{
        Minus: '-'
    },
    {
        Equal: '='
    },
    {
        Backquote: '`'
    },
    {
        BracketLeft: '['
    },
    {
        BracketRight: ']'
    },
    {
        Semicolon: ';'
    },
    {
        Quote: "'"
    },
    {
        Comma: ','
    },
    {
        Period: ','
    },
    {
        Slash: '/'
    },
    {
        Backslash: '\\'
    },
    {
        Enter: 'Enter'
    },
    {
        ShiftLeft: 'Shift'
    },
    {
        ShiftRight: 'Shift'
    },
    {
        ControlLeft: 'Ctrl'
    },
    {
        ControlRight: 'Ctrl'
    },
    {
        Tab: 'Tab'
    },
    {
        CapsLock: 'CapsLock'
    },
    {
        AltLeft: 'Alt'
    },
    {
        AltRight: 'Alt'
    },
    {
        Backspace: 'Backspace'
    },
    {
        Space:'Space'
    },
    {
        Delete: 'Del'
    },
    {
        ArrowLeft: "\u25c0"
    },
    {
        ArrowUp: '\u25b2'
    },
    {
        ArrowDown: '\u25bc'
    },
    {
        ArrowRight: '\u25b6'
    },
    {MetaLeft:'Win'}
]

function standartizeKbInput(e) {
    
    const code = e.code;
    let result;
    if (code.includes('Digit')) {
        result = code.replace('Digit', '')
    } else if (code.includes('Key')) {
        result = code.replace('Key', '').toLowerCase();
    } else {
        for (let i = 0; i < kbToButton.length; i++) {
            if (code in kbToButton[i]) {
                result = kbToButton[i][code];
            }
        }
    }
    for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < rows[i].children.length; j++) {
            if (rows[i].children[j].dataset.key == result) {
                return rows[i].children[j];
            }
        }
    }
}
body.addEventListener('keydown', function (e) {
    console.log(e)
    if (e.altKey && e.ctrlKey) {                
        langEn = !langEn;
        localStorage.setItem('lang', langEn);
        
        DrawKeys();
    }

    if (e.key == 'CapsLock') {
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
    let button = standartizeKbInput(e);
    handle(button);
})

body.addEventListener('keyup', function (e) {

    let button = standartizeKbInput(e);
    
    if (button && button instanceof HTMLDivElement && button.classList.contains('button')) {
        console.log(button)
        if (button.dataset.key !='CapsLock') {
            button.classList.remove('highlight');
            button.classList.remove('pressed');    
        }
        else if(!isCapsEnabled){
            button.classList.remove('highlight');
            button.classList.remove('pressed');  
        }
        else if(button.dataset.key =='CapsLock' && isCapsEnabled == false){
            button.classList.remove('highlight');
            button.classList.remove('pressed');  
        }
        
    }
    
    if (e.key = 'Shift') {
        isShiftEnabled = false;
        //DrawKeys();
    }
    DrawKeys();
})
body.addEventListener('mousedown', function (e) {
    console.log(e.target);
    if (e.target.dataset.key ==  'CapsLock'){
        isCapsEnabled = !isCapsEnabled;
        DrawKeys();
    }
    handle(e.target)
})
body.addEventListener('mouseup', function (e) {
    let button = e.target;
    if (button && button instanceof HTMLDivElement && button.classList.contains('button')) {        
        if (button.dataset.key !='CapsLock') {
            button.classList.remove('highlight');
            button.classList.remove('pressed');    
        }
        else if(!isCapsEnabled){
            button.classList.remove('highlight');
            button.classList.remove('pressed');  
        }
        else if(button.dataset.key =='CapsLock' && isCapsEnabled == false){
            button.classList.remove('highlight');
            button.classList.remove('pressed');  
        }
        
    }
    
    
})
body.addEventListener('mouseout', function (e) {
    let button = e.target;
    if (button && button instanceof HTMLDivElement && button.classList.contains('button')) {
        if (button.dataset.key !='CapsLock') {
            button.classList.remove('highlight');
            button.classList.remove('pressed');    
        }        
    }
    
})



function handle(button) {    
    let result = '';
    if (button && button instanceof HTMLDivElement && button.classList.contains('button')) {
        
        button.classList.add('highlight');
        button.classList.add('pressed');
        const start = textArea.selectionStart;
        const end = textArea.selectionEnd;
        const length = textArea.value.length;

        if (button.dataset.cmd === 'true') {
            if (button.dataset.key == 'Backspace') {                
                if (start == end) {
                    textArea.value = textArea.value.substring(0, start - 1) +
                        textArea.value.substring(end, length);
                    textArea.selectionStart = start - 1;
                    textArea.selectionEnd = start - 1;
                } else {
                    textArea.value = textArea.value.substring(0, start) +
                        textArea.value.substring(end, length);
                    textArea.selectionStart = start;
                    textArea.selectionEnd = start;
                }
            } else if (button.dataset.key == 'Del') {                
                if (start == end) {
                    textArea.value = textArea.value.substring(0, start) +
                        textArea.value.substring(end + 1, length);
                    textArea.selectionStart = start;
                    textArea.selectionEnd = start;
                } else {
                    textArea.value = textArea.value.substring(0, start) +
                        textArea.value.substring(end, length);
                    textArea.selectionStart = start;
                    textArea.selectionEnd = start;
                }
            } else if (button.dataset.key == 'Enter'){                
                textArea.value = textArea.value.substring(0, start) + '\n' +
                textArea.value.substring(end, length);
                textArea.selectionStart = start+1;
                textArea.selectionEnd = start+1;
            }else if (button.dataset.key == 'Tab'){                
                textArea.value = textArea.value.substring(0, start) + '\t' +
                textArea.value.substring(end, length);
                textArea.selectionStart = start+1;
                textArea.selectionEnd = start+1;
            }
            else if (button.dataset.key == '\u25c0'){ 
                console.log('k')               
                textArea.value = textArea.value.substring(0, start) + '\u25c0' +
                textArea.value.substring(end, length);
                textArea.selectionStart = start+1;
                textArea.selectionEnd = start+1;
            }
            else if (button.dataset.key == '\u25b2'){ 
                console.log('k')               
                textArea.value = textArea.value.substring(0, start) + '\u25b2' +
                textArea.value.substring(end, length);
                textArea.selectionStart = start+1;
                textArea.selectionEnd = start+1;
            }
            else if (button.dataset.key ==  '\u25bc'){ 
                console.log('k')               
                textArea.value = textArea.value.substring(0, start) +  '\u25bc' +
                textArea.value.substring(end, length);
                textArea.selectionStart = start+1;
                textArea.selectionEnd = start+1;
            }
            else if (button.dataset.key ==  '\u25b6'){ 
                console.log('k')               
                textArea.value = textArea.value.substring(0, start) +  '\u25b6' +
                textArea.value.substring(end, length);
                textArea.selectionStart = start+1;
                textArea.selectionEnd = start+1;
            }
            else if (button.dataset.key ==  'Space'){ 
                textArea.value = textArea.value.substring(0, start) + ' ' +
            textArea.value.substring(end, length);
            textArea.selectionStart = start+1;
            textArea.selectionEnd = start+1;
            }
            
            
        } else {
            textArea.value = textArea.value.substring(0, start) + button.innerText +
            textArea.value.substring(end, length);
            textArea.selectionStart = start+1;
            textArea.selectionEnd = start+1;
            //textArea.value += button.innerText;
        }

    }


}



textArea.addEventListener('keydown', function (e) {
    e.preventDefault()
    // textArea.value += e.key;
})
textArea.addEventListener('keyup', function (e) {
    e.preventDefault()
    // textArea.value += e.key;
})
textArea.addEventListener('keypress', function (e) {
    e.preventDefault()
    // textArea.value += e.key;
})

// let a = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'; //1072-1103 1105
// //1040-1071 1025
// for (let i = 0; i < a.length; i++){
//     console.log(a[i].toUpperCase().charCodeAt(0));
// }