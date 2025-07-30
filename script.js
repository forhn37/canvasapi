// 기존 script.js 내용 아래에 이어서 추가
const canvas = document.getElementById('myCanvas');
if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    // --- 다른 도형 예제 코드 위에 있다면 주석 처리하거나 제거하여 혼동 방지 ---

    // 1. 채워진 텍스트 그리기
    ctx.font = '40px Arial'; // 글꼴 크기와 서체 설정
    ctx.fillStyle = '#333'; // 색상 설정
    ctx.textAlign = 'center'; // 수평 정렬 (x 좌표를 중심으로)
    ctx.fillText('Hello, Canvas!', canvas.width / 2, 80); // (텍스트, x, y)

    // 2. 윤곽선 텍스트 그리기
    ctx.font = '30px Impact';
    ctx.strokeStyle = 'darkred';
    ctx.lineWidth = 1;
    ctx.textAlign = 'left'; // 왼쪽 정렬
    ctx.strokeText('Web Graphics', 50, 200);

    // 3. 다른 텍스트 정렬 예시
    ctx.font = '20px Verdana';
    ctx.fillStyle = 'blue';
    ctx.textAlign = 'right'; // 오른쪽 정렬
    ctx.textBaseline = 'bottom'; // 수직 정렬 (y 좌표를 기준으로 텍스트의 하단에 맞춤)
    ctx.fillText('Right Aligned Text', canvas.width - 50, canvas.height - 20);
}