// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120905

function solution(n, numlist) {
    var answer = [];
    for(let i = 0 ; i < numlist.length; i++){
        if(numlist[i] % n === 0){
            answer.push(numlist[i]);
        }
    }
    return answer;
}