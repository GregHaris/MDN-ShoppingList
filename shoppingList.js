const container = document.querySelector("div");

let ListItemInput = document.querySelector("#item");
ListItemInput.focus();

const addItemBtn = document.querySelector("button");
let listItems = document.querySelector("ul");

addItemBtn.addEventListener("click", () => {
  let ListItemInputValue = ListItemInput.value.trim();

  let item = document.createElement("li");
  const itemSpan = document.createElement("span");
  const itemDeleteBtn = document.createElement("button");

  item.append(itemSpan, itemDeleteBtn);

  if (ListItemInputValue !== "") {
    const existingItem = Array.from(listItems.children).find(
      (item) => item.querySelector("span").textContent === ListItemInputValue
    );
    {
      if (existingItem) {
        alert("Item already exists!");
      } else {
        itemSpan.textContent += ListItemInputValue;
        itemDeleteBtn.textContent = "Delete";

        listItems.appendChild(item);
      }
    }
  }

  ListItemInput.value = "";
});

ListItemInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addItemBtn.click();
  }
});
