// [문제 링크]: https://school.programmers.co.kr/learn/courses/30/lessons/120826

function solution(my_string, letter) {
    let count = 0;
    while(count < my_string.length){
        my_string = my_string.replace(letter,"");
        count++;
    }
    return my_string;
}