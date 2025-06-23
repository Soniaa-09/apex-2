document.getElementById('addTodo').addEventListener('click', function() {
  const input = document.getElementById('todoInput');
  const value = input.value.trim();

  if (!value) return;

  const li = document.createElement('li');
  li.textContent = value;

  li.addEventListener('click', function() {
    li.classList.toggle('completed');
  });

  const btn = document.createElement('button');
  btn.textContent = 'Remove';
  btn.addEventListener('click', function(e) {
    e.stopPropagation(); 
    li.remove();
  });

  li.appendChild(btn);
  document.getElementById('todoList').appendChild(li);

  input.value = '';
});
