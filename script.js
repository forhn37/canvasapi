// 기존 script.js 내용 아래에 이어서 추가
const canvas = document.getElementById('myCanvas');
console.log(canvas)
if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    // 1. 채워진 사각형 그리기 (fillRect)
    ctx.fillStyle = 'red'; // 채울 색상 설정
    ctx.fillRect(50, 50, 100, 75); // (x, y, 가로, 세로)

    // 2. 윤곽선 사각형 그리기 (strokeRect)
    ctx.strokeStyle = 'blue'; // 윤곽선 색상 설정
    ctx.lineWidth = 5; // 윤곽선 두께 설정
    ctx.strokeRect(200, 50, 100, 75);

    // 3. 다른 채워진 사각형 그리기
    ctx.fillStyle = 'green';
    ctx.fillRect(350, 50, 100, 75);

    // 4. 특정 영역 지우기 (clearRect)
    // 이전에 그린 녹색 사각형의 일부를 지워봅니다.
    ctx.clearRect(375, 75, 50, 25); // (시작x, 시작y, 지울 가로, 지울 세로)

}