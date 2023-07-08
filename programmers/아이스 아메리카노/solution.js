// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120819

function solution(money) {
    var answer = [];
    answer.push(parseInt(money/5500));
    answer.push(money%5500);
    return answer;
}