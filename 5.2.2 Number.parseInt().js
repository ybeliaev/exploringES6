Number.parseInt(string, radix?);
// Number.parseInt() provides special support for the hexadecimal literal notation – the prefix 0x (or 0X) of string is removed if:

//     radix is missing or 0. Then radix is set to 16. As a rule, you should never omit the radix.
//     radix is 16.

// For example:

> Number.parseInt('0xFF')
255
> Number.parseInt('0xFF', 0)
255
> Number.parseInt('0xFF', 16)
255

// In all other cases, digits are only parsed until the first non-digit:

> Number.parseInt('0xFF', 10)
0
> Number.parseInt('0xFF', 17)
0

>Number.parseInt() does not have special support for binary or octal literals!!!!!