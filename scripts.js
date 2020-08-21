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