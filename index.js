const addButton = document.getElementById("add-button");
const ListBelanja = document.getElementById("add-list");

function addList() {
    const text = prompt("Masukan List Belanja!");
    const textNode = document.createTextNode(text);
    const ListNode = document.createElement("li");

    ListNode.appendChild(textNode);
    ListBelanja.appendChild(ListNode);
}

addButton.addEventListener("click", addList);