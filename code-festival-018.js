/**
 * 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.
 * 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요.
 * 단, 소숫점 자리는 모두 버립니다.
 */
const score = prompt("세 과목의 점수를 띄어쓰기로 구분해 입력:").split(" ");
let sum = 0;
for (let i = 0; i < score.length; i++) {
  sum += parseInt(score[i]);
}
const avg = Math.floor(sum / score.length);
console.log(avg);