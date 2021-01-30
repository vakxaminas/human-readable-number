module.exports = function toReadable(number) {
    let units = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        0: "",
    };
    let dozens = {
        0: "",
        1: "ten",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };
    let result = [];

    if (number === 0) result.push("zero");
    else if (number > 0 && number < 10) result.push(units[number % 10]);
    else if (number >= 10 && number < 20) result.push(dozens[number % 100]);
    else if (number >= 20 && number < 100) {
        result.push(dozens[Math.floor(number / 10)]);
        result.push(units[number % 10]);
    } else if (number >= 100 && number < 1000) {
        if (number % 100 >= 10 && number % 100 < 20) {
            result.push(units[Math.floor(number / 100)]);
            result.push("hundred");
            result.push(dozens[number % 100]);
        } else {
            result.push(units[Math.floor(number / 100)]);
            result.push("hundred");
            result.push(dozens[Math.floor(number / 10) % 10]);
            result.push(units[number % 10]);
        }
    }

    result = result.filter((element) => element != "");
    return result.join(" ");
};
