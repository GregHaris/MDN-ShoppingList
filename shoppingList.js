const container = document.querySelector("div");

const ListItemInput = document.querySelector("#item");
ListItemInput.focus();

const addItemBtn = document.querySelector("button");
const listItems = document.querySelector("ul");

addItemBtn.addEventListener("click", () => {
  let items = ListItemInput.value;
  console.log(items);
});
