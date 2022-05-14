/**
 * 우리가 흔히 사용하는 숫자 1, 8, 19, 28893, ... 은 10진수 체계입니다.
 * 이를 컴퓨터가 알아들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야 할까요?
 *
 * 예를들어 13은 2^3 + 2^2 + 2^0 = 13 이기 때문에 1101로 표현합니다.
 * 사용자에게 숫자를 입력받고 이를 2진수로 바꾼 뒤 그 값을 출력해주세요.
 */
const decimal = parseInt(prompt("숫자"));
console.log(decimal.toString(2));
