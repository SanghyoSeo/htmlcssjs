// 웹페이지에 방문하는 시간(초)이 홀수면 초록, 짝수면 파랑
// let now = new Date().getTime();

// console.log(now % 2);

// if (now % 2 == 0) {
//     document.body.style.backgroundColor = 'blue';
// } 
// else {
//     document.body.style.backgroundColor = 'green';
// }

// 입력을 두번 받아서 입력 사이의 시간이 1초 이내면 성공 아니면 실패
// 시도 횟수 화면에 출력
// let count = 1;

// while (1) {
//     prompt();
//     let getsec1 = new Date().getTime();

//     prompt();
//     let getsec2 = new Date().getTime();

//     console.log(getsec2 - getsec1 + "ms 차이");

//     if (getsec2 - getsec1 < 1000) {
//         document.write("성공 시도 횟수: " + count);
//         break;
//     }
//     else {
//         console.log("실패 시도 횟수: " + count)
//     }

//     count++;
// }