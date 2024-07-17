const tables = document.getElementsByClassName("board");

Array.from(tables).forEach((table) => {
  for (let i = 0; i < 10; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < 10; j++) {
      const column = document.createElement("td");
      column.addEventListener("click", () => {
        column.style.backgroundColor = "yellow";
      });

      row.appendChild(column);
      table.appendChild(row);
    }
  }
});
