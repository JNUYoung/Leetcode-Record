var minArray = function(numbers) {
    const numbers_len = numbers.length;
    let i = 0;

    while (i < numbers_len - 1) {
        if (numbers[i] > numbers[i + 1]) {
            return numbers[i + 1];
        } 
        i++;
    }

    return numbers[0];
}