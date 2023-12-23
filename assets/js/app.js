const inputText = document.getElementById("inputText");
const listContainer = document.getElementById("listContainer");
const container = document.getElementById("container");
const allStyles = window.getComputedStyle(container, null);
const bg = allStyles.backgroundColor;

console.log("🚀 ~ bg:", bg);

function addTask() {
  if (inputText.value === "") {
    alert("Please enter a Task!");
  } else {
    let li = document.createElement("li");
    let spn = document.createElement("span");
    li.innerHTML = inputText.value;
    listContainer.appendChild(li);
    spn.innerHTML = "X";
    li.appendChild(spn);
    if (bg === "rgb(60, 60, 60)") {
      li.classList.add("aDark");
    }
  }
  inputText.value = "";
  saveData();
}
listContainer.addEventListener("click", function (clickk) {
  if (clickk.target.tagName === "LI") {
    clickk.target.classList.toggle("checked");
    saveData();
  } else if (clickk.target.tagName === "SPAN") {
    clickk.target.parentElement.remove();
    saveData();
  }
});
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
  console.log("wtf");
}
function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showList();
