const capitalize = require('../capitalizeString');

test('check if capitalise function exists', () =>{
    expect(capitalize).toBeDefined();
})

test('check if string returns a capitalized first letter', () => {
    expect(capitalize("abdi")).toEqual("Abdi");
})