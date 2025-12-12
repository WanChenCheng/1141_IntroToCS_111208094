const submitBtn = document.getElementById("submitBtn");
const mathInput = document.getElementById("math");
const engInput = document.getElementById("english");
const tableBody = document.querySelector("#gradeTable tbody");

submitBtn.addEventListener("click", function () {
  const math = Number(mathInput.value);
  const english = Number(engInput.value);

  if (math === 0 && english === 0 && mathInput.value === "") return;

  const avg = ((math + english) / 2).toFixed(2);
  const rowCount = tableBody.rows.length + 1;

  const row = tableBody.insertRow();
  row.insertCell(0).innerText = rowCount;
  row.insertCell(1).innerText = math;
  row.insertCell(2).innerText = english;
  row.insertCell(3).innerText = avg;

  updateColumnAverages();

  mathInput.value = "";
  engInput.value = "";
});

function updateColumnAverages() {
  let mathSum = 0;
  let engSum = 0;
  let avgSum = 0;
  let count = tableBody.rows.length;

  for (let i = 0; i < count; i++) {
    mathSum += Number(tableBody.rows[i].cells[1].innerText);
    engSum += Number(tableBody.rows[i].cells[2].innerText);
    avgSum += Number(tableBody.rows[i].cells[3].innerText);
  }

  document.getElementById("mathAvg").innerText = (mathSum / count).toFixed(2);
  document.getElementById("engAvg").innerText = (engSum / count).toFixed(2);
  document.getElementById("overallAvg").innerText = (avgSum / count).toFixed(2);
}
