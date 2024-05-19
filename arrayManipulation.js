function processArray(numbers) {
    return numbers.map(num => num % 2 === 0 ? num * num : num * 3);
}
function formatArrayStrings(strings, processedNumbers) {
    return strings.map((string, index) => {
        if (processedNumbers[index] % 2 === 0) {
            return string.toUpperCase();
        } else {
            return string.toLowerCase();
        }
    });
}

module.exports = {
    processArray,
    formatArrayStrings
};
