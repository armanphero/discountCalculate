// Write a function solution that takes a string parameter and returns the word in reverse order.
// In this task, you are given an input string and the task is to reverse the input string.

function reverseMaker(word) {
    let revName = [];
    for (let i = 0; i < word.length; i++) {
        const element = word[i];
        revName.unshift(element);
    }
    const newName = revName.join('');
    return newName;
}
const result1 = reverseMaker('arman');
console.log(result1);

const result2 = reverseMaker ('Polash');
console.log(result2);