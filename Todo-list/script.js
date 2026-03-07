let input = document.querySelector("#serachTab");
let listContiner = document.querySelector("#list-continer");
let addBtn = document.querySelector("#addItemsInList");

addBtn.addEventListener("click" , (e) => {
    if(input.value.trim() === "") {
        alert("Please write something too add in list!");
    }else {
        let li = document.createElement("li");
        li.textContent = input.value;
        listContiner.appendChild(li)

        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
})
input.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        addBtn.click();
    }
})
listContiner.addEventListener("click", (e) => {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked")
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData() {
    localStorage.setItem("data",listContiner.innerHTML);
}
function showTask() {
    listContiner.innerHTML =  localStorage.getItem("data");
}
showTask();
