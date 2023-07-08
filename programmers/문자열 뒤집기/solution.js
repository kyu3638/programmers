// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120822

function solution(my_string) {
    let answer = '';
    for(let i = 0; i < my_string.length; i++){
        answer += my_string[my_string.length - 1 - i];
    }
    return answer;
}