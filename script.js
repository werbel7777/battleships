const tables = document.getElementsByClassName("board");
const handleTdClick = (pointerEvent) => {
  pointerEvent.target.classList.add("ship");
};

Array.from(tables).forEach((table) => {
  for (let i = 0; i < 10; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 10; j++) {
      const td = document.createElement("td");

      td.addEventListener("click", handleTdClick);
      row.appendChild(td);
      table.appendChild(row);
    }
  }
});
