// Метод startsWith() определяет, начинается ли строка с символов другой строки, возвращая, соотвественно, true или false.
//str.startsWith(searchString[, position])

// searchString
//     Символы, искомые в начале данной строки.
// position
//     Необязательный параметр. Позиция в строке, с которой начинать поиск строки searchString; по умолчанию установлена в 0. 
const str = 'Быть или не быть, вот в чём вопрос.';
console.log(str.startsWith('Быть'));        // true
console.log(str.startsWith('не быть'));     // false
console.log(str.startsWith('не быть', 9));  // true