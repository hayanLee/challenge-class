// 직각삼각형
let str = '';
for (let i = 0; i < 5; i++) {
    for (let j = 0; j <= i; j++) {
        str += '*';
    }
    str += '\n';
}

console.log(str);

// 역직각삼각형
str = '';
for (let i = 5; i > 0; i--) {
    for (let j = i; j > 0; j--) {
        str += '*';
    }
    str += '\n';
}

console.log(str);

// 플립 역 직각삼각형
str = '';
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (j < i) str += ' ';
        else str += '*';
    }
    str += '\n';
}
console.log(str);

// 플립 직각삼각형
str = '';
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (j < 4 - i) str += ' ';
        else str += '*';
    }
    str += '\n';
}
console.log(str);
