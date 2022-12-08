function charCount(str) {
    let obj = {};
    for (let char of str) {
        let char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

console.log(charCount('Hello world'));