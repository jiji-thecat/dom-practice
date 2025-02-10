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

const deleteRow = (tdId) => {
  const elem = document.getElementById(tdId);
  elem.remove();
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
  Array.from(tr.children).forEach((v) => {
    v.contentEditable = true;
  });
};

const tr = document.querySelectorAll('table tr');
Array.from(tr).forEach((v, i) => {
  if (i !== 0) {
    addId(v);
    addDeleteButton(v);
    addEditable(v);
  }
});

const addRow = () => {
  const table = document.getElementById('data-table');
  const newTr = table.insertRow(-1);

  const newCell = newTr.insertCell(0);
  const newCell2 = newTr.insertCell(1);
  const newCell3 = newTr.insertCell(2);

  addId(newTr);
  addDeleteButton(newTr);
  addEditable(newTr);
};
