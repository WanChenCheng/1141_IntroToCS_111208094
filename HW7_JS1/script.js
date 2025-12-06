const guessInput = document.getElementById('guessInput');
const msg = document.getElementById('msg');
const record = document.getElementById('record');
const countSpan = document.getElementById('count');
const statusEl = document.getElementById('status');
const answerEl = document.getElementById('answer');
const submitBtn = document.getElementById('submitBtn');

let answer = generate();
let count = 0;
let over = false;

function generate() {
  let nums = "0123456789".split("");
  let result = "";
  for (let i = 0; i < 4; i++) {
    result += nums.splice(Math.floor(Math.random() * nums.length), 1);
  }
  return result;
}

function setStatus(text, finished = false) {
  statusEl.textContent = text;
  statusEl.classList.toggle('over', finished);
}

function play() {
  if (over) return;
  msg.className = 'message';

  const input = guessInput.value.trim();
  if (!/^\d{4}$/.test(input) || new Set(input).size !== 4) {
    msg.textContent = "請輸入 4 位不重複數字";
    msg.classList.add('error');
    return;
  }

  count++;
  countSpan.textContent = count;
  if (count === 1) record.innerHTML = "";

  let A = 0, B = 0;
  for (let i = 0; i < 4; i++) {
    if (input[i] === answer[i]) A++;
    else if (answer.includes(input[i])) B++;
  }

  record.innerHTML +=
    `<tr><td>${count}</td><td>${input}</td><td>${A}A${B}B</td></tr>`;
    record.innerHTML;

  if (input === answer) {
    msg.textContent = `猜對了！共 ${count} 次`;
    msg.classList.add('success');
    answerEl.textContent = `答案：${answer}`;
    setStatus('遊戲結束', true);
    over = true;
  } else {
    msg.textContent = `結果：${A}A${B}B`;
  }

  guessInput.value = "";
}

function restart() {
  answer = generate();
  count = 0;
  over = false;
  record.innerHTML = `<tr><td colspan="3">尚未有任何猜測</td></tr>`;
  countSpan.textContent = 0;
  msg.textContent = "";
  answerEl.textContent = "答案：????";
  setStatus("遊戲進行中");
}

submitBtn.onclick = play;
document.getElementById('restartBtn').onclick = restart;
guessInput.addEventListener('keydown', e => e.key === 'Enter' && play());
