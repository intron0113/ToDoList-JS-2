`use strict`;
{
  const inputBox = document.getElementById('input-todo');
  const addButton = document.getElementById('add-button');
  const addTaskTarget = document.getElementById('addTask-target');
  const todos = [];

  addButton.addEventListener('click', (event) => {
    const todo = { comment: inputBox.value, status: '作業中' };
    inputBox.focus();

    if (inputBox.value === '') {
      const alert = 'Error:タスクを入力してください！';
      console.log(alert);
      return;
    }

    if (todo) {
      todos.push(todo);
      inputBox.value = '';
      showTodos();
    }
  });

  const showTodos = () => {
    addTaskTarget.textContent = '';
    todos.forEach((todo, number) => {
      const tableRecord = document.createElement('tr');
      addTaskTarget.appendChild(tableRecord);
      const tableId = document.createElement('td');
      const tableComment = document.createElement('td');
      const tableStatus = document.createElement('td');
      const tableAction = document.createElement('td');

      tableId.textContent = number;
      tableComment.textContent = todo.comment;
      tableRecord.appendChild(tableId);
      tableRecord.appendChild(tableComment);
      tableRecord.appendChild(tableStatus);
      tableRecord.appendChild(tableAction);

      tableStatus.appendChild(createStatusButton());
      tableAction.appendChild(createDeleteButton(tableRecord));
    });
  };

  const createStatusButton = () => {
    const statusButton = document.createElement('button');
    statusButton.textContent = '作業中';
    return statusButton;
  };

  const createDeleteButton = (tableRecord) => {
    var index = tableRecord.rowIndex - 1;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '削除';
    deleteButton.addEventListener('click', () => {
      todos.splice(index, 1);
      showTodos();
    });
    return deleteButton;
  };
}
