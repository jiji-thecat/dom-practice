/**### **Practice Problem: Simple Editable Table Application**  

**Objective:**  
Create a small interactive table with basic features using **Vanilla JS**, **DOM APIs**, **HTML**, and **CSS** within 1 hour.  

---

#### **Requirements:**  

1. **Table Setup:**  
   - Create a table with 3 columns: `Task`, `Priority`, and `Status`.  
   - Prepopulate the table with at least 3 sample rows (e.g., "Complete project", "High", "In Progress").  

2. **Editable Cells:**  
   - Allow users to click any cell and edit its value directly.  
   - Save the change when the user presses `Enter` or clicks outside the cell.  

3. **Add Row Button:**  
   - Provide a button labeled "Add Row" below the table.  
   - Clicking this button should add a new empty row for the user to edit.  

4. **Delete Row Button:**  
   - Include a "Delete" button for each row to remove it from the table.  

5. **Simple Validation:**  
   - Ensure that `Task` is not empty and `Priority` is one of "High", "Medium", or "Low" when editing or adding rows.  

---

#### **Bonus Features (Optional):**  
- Highlight a row when it’s being edited.  
- Persist table data in `localStorage`.  
- Style the table for a clean and user-friendly design.  

---

### **Evaluation Criteria:**  
- Completion of core features within the time limit.  
- Clean and readable code.  
- Responsive and functional UI interactions.   */

const deleteRow = (trId) => {
  const elem = document.getElementById(trId);
  elem.remove();
  updateButtons();
};

const updateButtons = () => {
  const rows = document.querySelectorAll('table tr');
  rows.forEach((v, i) => {
    if (i !== 0) {
      // tr配下にあるbuttonをnodeList[3]=[moveup, movedown, delete]で受け取ることができる
      const upButton = v.querySelectorAll('button')[0];
      const downButton = v.querySelectorAll('button')[1];

      // Disable logic
      upButton.disabled = i === 1;
      downButton.disabled = i === rows.length - 1;
    }
  });
};

const moveUp = (trId) => {
  const row = document.getElementById(trId);
  // trの1個前のtrにアクセスする。
  const preRow = row.previousElementSibling;

  if (preRow) {
    row.parentNode.insertBefore(row, preRow);
    updateButtons();
  }
};

const moveDown = (trId) => {
  const row = document.getElementById(trId);
  // trの1個あとのtrにアクセスする
  const nextRow = row.nextElementSibling;

  if (nextRow) {
    row.parentNode.insertBefore(nextRow, row);
    updateButtons();
  }
};

addMoveDownButton = (tr) => {
  const button = document.createElement('button');
  const td = document.createElement('td');
  button.innerText = 'Move Down';
  button.className = 'button-move-down';
  button.onclick = () => moveDown(tr.id);

  td.append(button);
  tr.append(td);
};

addMoveUpButton = (tr) => {
  const button = document.createElement('button');
  const td = document.createElement('td');
  button.innerText = 'Move Up';
  button.className = 'button-move-up';
  button.onclick = () => moveUp(tr.id);

  td.append(button);
  tr.append(td);
};

const addDeleteButton = (tr) => {
  const button = document.createElement('button');
  const td = document.createElement('td');
  button.innerText = 'delete';
  button.className = 'button-delete';
  button.onclick = () => deleteRow(tr.id);
  td.append(button);
  tr.append(td);
};

const addId = (tr) => {
  const trId = 'tr-' + Date.now() + Math.random();
  tr.id = trId;
};

const addEditable = (tr) => {
  // tr配下のtdのそれぞれにアクセスする
  Array.from(tr.children).forEach((v) => {
    v.contentEditable = true;
  });
};

const addRow = () => {
  const table = document.getElementById('data-table');
  // -1はtableの一番下にinsert, 1はtableのheader下からinsert
  const newTr = table.insertRow(-1);

  const newCell = newTr.insertCell(0);
  const newCell2 = newTr.insertCell(1);
  const newCell3 = newTr.insertCell(2);

  addId(newTr);
  addMoveUpButton(newTr);
  addMoveDownButton(newTr);
  addDeleteButton(newTr);
  updateButtons();

  // addEditable(newTr);
};

const tr = document.querySelectorAll('table tr');
Array.from(tr).forEach((v, i) => {
  if (i !== 0) {
    addId(v);
    addMoveUpButton(v);
    addMoveDownButton(v);
    addDeleteButton(v);

    // addEditable(v);
  }
});
updateButtons();
