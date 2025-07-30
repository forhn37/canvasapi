// 기존 script.js 내용 아래에 이어서 추가
const canvas = document.getElementById('myCanvas');
if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    // --- 사각형 예제 코드 위에 있다면 주석 처리하거나 제거하여 혼동 방지 ---

    // 1. 선 그리기
    ctx.beginPath(); // 새로운 경로 시작
    ctx.moveTo(50, 150); // 시작점 (x, y)
    ctx.lineTo(150, 250); // 끝점 (x, y)
    ctx.strokeStyle = 'purple';
    ctx.lineWidth = 3;
    ctx.stroke(); // 선 그리기

    // 2. 삼각형 그리기 (경로를 닫아서 채우기)
    ctx.beginPath();
    ctx.moveTo(200, 250); // 첫 번째 꼭짓점
    ctx.lineTo(250, 150); // 두 번째 꼭짓점
    ctx.lineTo(300, 250); // 세 번째 꼭짓점
    ctx.closePath(); // 시작점으로 돌아가 경로를 닫음
    ctx.fillStyle = 'orange';
    ctx.fill(); // 도형 채우기
    ctx.strokeStyle = 'darkorange'; // 윤곽선 색상
    ctx.stroke(); // 윤곽선 그리기

    // 3. 원 그리기
    // 각도는 라디안 단위: 0 ~ 2 * Math.PI (360도)
    ctx.beginPath();
    ctx.arc(400, 200, 50, 0, 2 * Math.PI, false); // 중심(400,200), 반지름 50, 0도에서 360도까지 시계방향
    ctx.fillStyle = 'rgba(0, 123, 255, 0.7)'; // 투명도 있는 파란색
    ctx.fill();
    ctx.strokeStyle = 'darkblue';
    ctx.lineWidth = 2;
    ctx.stroke();
}