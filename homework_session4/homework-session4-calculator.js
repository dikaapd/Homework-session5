export function Calculator(number1, number2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number1 === 0 || number2 === 0 ){
                return "Error : Cant divide with 0 !";
            }
            result = number1 / number2;
            break;
        default:
            return "Error: Operator not valid, use "+", "-", "*" or "/"!";
    }

    return `[Calculation Success] Result from ${number1} ${operator} ${number2} = ${result}`;
}