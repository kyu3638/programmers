// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120824

function solution(num_list) {
    var answer = [];
    answer = [0, 0];
    for (let i = 0 ; i < num_list.length ; i++){
        if(num_list[i] % 2 == 0){
            answer[0] += 1;
        } else {
            answer[1] += 1;
        }
    }
    return answer;
}