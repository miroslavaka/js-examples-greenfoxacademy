//part4
$('div').text('hello world');
$('div').css('background', 'cyan');
$('.third').toggleClass('hidden');
$('p').html('<strong>hello world</strong>');
$('p').append('<strong>another</strong>');
//$('div').remove();
$('button').click(() => {
    $('.first').toggleClass('hidden');
});
//part 1-3
console.log("JavaScript is working");
let colors = ["orange", "blue", "green", "yellow"];
let post = {
    title: "My Post",
    description: "My First Post, Awesome",
    likeCount: 12,
    comments: ["cool", "nice job"]
};

let posts = [{
    title: "First Post",
    likeCount: 12
}, {
    title: "Second post",
    likeCount: 222
}];
console.log(colors);
console.log(post);

let age = 18;
if (age >= 18) {
    console.log("You are and adult!");
} else {
    console.log("You are a kid");
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let myFunction = x => {
    console.log(x);
}
colors.forEach(color => {
    console.log(color);
});

colors.forEach(x => {
    console.log(x);
})

let greeter = name => {
    console.log(`Hello, ${name}`);
    if (name === "Adam") {
        console.log("He is an adult");
    }
}
greeter("Adam");
greeter("Peter");
greeter("Mate");
greeter("Reka");

colors.forEach(unicorn => {
    console.log(unicorn);
})
console.log("this is the end of our code");

let bookCount = 10;
for (let i = 1; i < bookCount + 1; i++) {
    console.log(i);
}
let bookCount1 = 20;
for (let i = 0; i < bookCount1; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

let age1 = 33;
let myBoolean = true;
let myOtherBoolean = false;
let result = true && true;
let result2 = true && false;
let result3 = true || true;
let result4 = true || false;
let result5 = false || false || true || false;
let result6 = false || false;
let result7 = !true;
let result8 = !false;
let result9 = !!true;
let result10 = true === true;
let result11 = true === false;
let result12 = true === false;
let result13 = false === false;
let result14 = true !== true;
let result15 = true !== false;
let result16 = 1 !== 2;
let result17 = 5 - 6;
let result18 = 5 * 6
let result19 = 10 / 4;
let reminder = 5 % 3;
let myString = "This is string";
let name = "Mark";
let greeting = `hello ${name}`;
let charCount = 'Hello'.length;
trueOrFalse = 100 < 50;
trueOrFalse = 'hello' !== 'world';
trueOrFalse = 'blue'.length === 'green'.length;
trueOrFalse = 3 > 4 && (5 > 6 || 7 < 8);
let result20 = 'apple' + 5;
let result21 = '122' - 1
let myArray = [3, 5, 6, 2, 22]
let myArray1 = ['Claire', 'Mara', 'Susan'];
let myOtherArray = [3, 12, true, 'Hello'];
myArray[0] = 'Peter'
console.log(myArray.length);
console.log(myArray.length);
names = ['Mira', 'Klara', 'Beba', 'Anezka'];
let namess = ['mira', 'klara', 'gustav', 'rasto'];
let namess1 = ['mira', 'klara', 'gustav', 'rasto'];
namess.push('diana');
namess[0] = 'miroslava';
namess.length > 4
let post1 = {}
let postt = {
    author: "Bill Gates",
    content: "Online communication will chnage how companies work",
    date: "2020-04-01 18:06",
};

console.log(posts['author']);

console.log(post.author);

console.log(postt.author);

post.likes = 11403;
console.log(post.likes);
console.log(postt.likes);
let obj = {
    colors: ['red', 'blue', 'yellow', 'green'],
};
obj.hasManyColors = 'true';