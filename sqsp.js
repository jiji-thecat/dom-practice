function moveUp(button) {
  const row = button.parentNode.parentNode;
  const previousRow = row.previousElementSibling;
  if (previousRow) {
    row.parentNode.insertBefore(row, previousRow);
  }
}

function moveDown(button) {
  const row = button.parentNode.parentNode;
  const nextRow = row.nextElementSibling;
  if (nextRow) {
    row.parentNode.insertBefore(nextRow, row);
  }
}
