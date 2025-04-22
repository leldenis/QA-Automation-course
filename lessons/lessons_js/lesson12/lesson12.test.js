
const sum = require('./lesson12');



test ('should add 1 + 2 to equel 3', () => {
    expect (sum(1,2)).toBe(3);
});

test ('should add 0 + 0 to equel 0', () => {
    expect (sum(0,0)).toBe(1);
});

test ('should add -1 + 1 to equel 0', () => {
    expect (sum(-1,1)).toBe(0);
});