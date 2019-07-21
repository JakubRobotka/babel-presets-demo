import './../css/style.css';

const array = ['ahoj', 'bye'];

const arrayTwo = [...array, 'kaka bubu'];

arrayTwo.map(item => console.log(item));

const object = {
    first: 'ahoj',
    second: 'second'
};

const objectTwo = {
    ...object,
    third: 'third'
};


Object.entries(objectTwo).map(([key, value]) => {
    console.log(`${key} ${value}`);
});

let cat = 'Miaow';
let dog = 'Woof';
let bird = 'Peet peet';

let someObject = {
    cat,
    dog,
    bird
}

console.log(someObject);

var promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('foo');
    }, 300);
});

promise1.then(function (value) {
    console.log(value);
});

console.log('promise', promise1);

async function test() {
    let dynamic = await import('./dynamic-import.js');

    dynamic.bye();
}

test();


const optChainObj = {
    foo: {
        bar: {
            test: 'pokus'

        }
    }
};

const optChainObjOutput = optChainObj ?.foo ?.bar ?.test;
const optChainObjOutputNone = optChainObj ?.foo ?.image ?.images;

console.log('chain', optChainObjOutput);
console.log('chain 2', optChainObjOutputNone);


let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };

let n = { x, y, ...z };
console.log('nn', n);

console.log(x);
console.log(y);
console.log(z);



import ResizeObserver from 'resize-observer-polyfill';

try {
    const ro = new ResizeObserver((entries, observer) => {
        console.log('Body has resized!');
        observer.disconnect(); // Stop observing
    });

    ro.observe(document.body);
} catch (error) {
    console.log(error.description);
}

try {

    console.log('asfdafafadsfa');
} catch (error) {
    console.log("Y U NO REDIRECT");
}

const nodeList = document.querySelectorAll('[data-node-list]');
const arrayList = Array.from(nodeList);

console.log(arrayList);

console.log(Element);