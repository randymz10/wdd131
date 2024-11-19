const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

function addItem() {
  if (input.value.trim() !== "") {
    const deleteButton = document.createElement("button");
    const li = document.createElement("li");

    li.textContent = input.value;
    deleteButton.textContent = "❌";

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener("click", () => deleteItem(li));
  }
}

function deleteItem(li) {
  list.removeChild(li);
  input.focus();
  input.value = "";
}

button.addEventListener("click", addItem);
