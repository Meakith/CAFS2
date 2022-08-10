// ALERT
let btn = document.getElementById('btn1');
if (btn) {
    btn.addEventListener('click', function (e) {
        alert('Hello world!')
    });
};

// CASES
let inpt = document.getElementById('inpt');
let toUpper = document.getElementById('uppr1');
let toLower = document.getElementById('lwr1');
let scndUpper = document.getElementById('uppr2');
let scndLower = document.getElementById('lwr2');

toUpper.addEventListener('click', toUpp);
function toUpp() {
    inpt.value = inpt.value.toUpperCase();
};

toLower.addEventListener('click', toLow);
function toLow() {
    inpt.value = inpt.value.toLowerCase();
};

scndUpper.addEventListener('click', scndUpp);
function scndUpp() {
    inpt.value = inpt.value[0].toUpperCase() + inpt.value.slice(1);
};

scndLower.addEventListener('click', scndLwr);
function scndLwr() {
    inpt.value = inpt.value[0].toLowerCase() + inpt.value.slice(1);
};

// EMAIL/PHONE
let saveButton = document.getElementById('save');
let emailInput = document.getElementById('email');
let phoneInput = document.getElementById('phone');

saveButton.addEventListener('click', registerForm);
function registerForm(){
    if(!emailInput.value.includes("@")){
        emailInput.classList.add('is-invalid');
    }else{
        emailInput.classList.add('is-valid');
    };

    if(phoneInput.value == 0){
        phoneInput.classList.add('is-invalid');
    }else{
        phoneInput.classList.add('is-valid');
    };
};

// BLOCK/UNBLOCK
let unblock = document.getElementById('ulcnbkBtn');
let block = document.getElementById('blckBtn');
let inptBlock = document.getElementById('inptBlck');

block.addEventListener('click', blockView);
function blockView() {
    inptBlock.readOnly = true;
};

unblock.addEventListener('click', blockView2);
function blockView2() {
    inptBlock.readOnly = false;
};

// MONKEY
document.getElementById('image').addEventListener('mouseenter', mouseOn);
function mouseOn() {
    document.getElementById('image').setAttribute('src', 'https://i.imgur.com/0DElr0H.jpg');
};
document.getElementById('image').addEventListener('mouseleave', mouseOff);
function mouseOff() {
    document.getElementById('image').setAttribute('src', 'https://i.imgur.com/PLDVxza.jpg');
};

// TEXT WITH CHOOSABLE OPTIONS
let toDefault = document.getElementById('reset');

toDefault.addEventListener('click', resetText);
function resetText() {
    mainContent.style.color = '';
    mainContent.style.outline = '';
    document.body.style.cursor = '';
};

let mainContent = document.getElementById('content');

let brdrRed = document.getElementById('brdRed');
let brdrGreen = document.getElementById('brdGreen');
let brdrBlue = document.getElementById('brdBlue');

brdrRed.addEventListener('click', setRedBorder);
function setRedBorder() {
    mainContent.style.outline = '5px solid red';
};

brdrGreen.addEventListener('click', setGreenBorder);
function setGreenBorder() {
    mainContent.style.outline = '5px solid green';
};

brdrBlue.addEventListener('click', setBlueBorder);
function setBlueBorder() {
    mainContent.style.outline = '5px solid blue';
};


let textRed = document.getElementById('red');
let textGreen = document.getElementById('green');
let textBlue = document.getElementById('blue');

textRed.addEventListener('click', setRedText);
function setRedText() {
    mainContent.style.color = 'red';
};

textGreen.addEventListener('click', setGreenText);
function setGreenText() {
    mainContent.style.color = 'green';
};

textBlue.addEventListener('click', setBlueText);
function setBlueText() {
    mainContent.style.color = 'blue';
};

let pointerCursor = document.getElementById('pointCrsr');
let textCursor = document.getElementById('txtCrsr');
let copyCursor = document.getElementById('copyCrsr');
let helpCursor = document.getElementById('helpCrsr');
let crossCursor = document.getElementById('crossCrsr');

pointerCursor.addEventListener('click', setPointerCursor);
function setPointerCursor() {
    document.body.style.cursor = 'pointer';
};

textCursor.addEventListener('click', setTextCursor);
function setTextCursor() {
    document.body.style.cursor = 'text';
};

copyCursor.addEventListener('click', setCopyCursor);
function setCopyCursor() {
    document.body.style.cursor = 'copy';
};

helpCursor.addEventListener('click', setHelpCursor);
function setHelpCursor() {
    document.body.style.cursor = 'help';
};

crossCursor.addEventListener('click', setCrossCursor);
function setCrossCursor() {
    document.body.style.cursor = 'crosshair';
};
