const note = document.querySelector('.note');
const scoreElement = document.getElementById('score');

let score = 0;

// 키 입력에 따른 콜백 함수
function onKeyPress(event) {
  const keyPressed = event.key.toUpperCase();
  const targetKey = note.dataset.key;

  if (keyPressed === targetKey) {
    score += 10;
    updateScore();
    hideNote();
  }
}

// 새로운 노트 생성
function createNote() {
  const keyIndex = Math.floor(Math.random() * 4);
  const keys = ['A', 'S', 'D', 'F'];
  const key = keys[keyIndex];

  note.dataset.key = key;
  note.style.left = `${(keyIndex * 25) + 12.5}%`;
  note.style.display = 'block';
}

// 노트 숨기기
function hideNote() {
  note.style.display = 'none';
}

// 점수 업데이트
function updateScore() {
  scoreElement.textContent = score;
}

// 게임 시작
function startGame() {
  score = 0;
  updateScore();
  createNote();
}

// 게임 초기화
function resetGame() {
  hideNote();
  score = 0;
  updateScore();
}

// 키보드 이벤트 리스너 등록
document.addEventListener('keydown', onKeyPress);

// 게임 시작
startGame();