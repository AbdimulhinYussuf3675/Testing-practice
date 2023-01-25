const reverseSring = require('../reverseSring')

test('reverString function exists', () => {
    expect(reverseSring).toBeDefined();
});

test('string reverse with upperCase', () => {
    expect(reverseSring('Hello')).toEqual('olleh');
})