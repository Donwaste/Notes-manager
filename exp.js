const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');

createBtn.onclick = function () {
    if (inputElement.value.length === 0) {
        return;
    }

    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    listItem.innerHTML = `
        <span>${inputElement.value}</span>
        <span>
            <span class="btn btn-small btn-success">&check;</span>
            <span class="btn btn-small btn-danger">&times;</span>
        </span>
    `;

    const checkBtn = listItem.querySelector('.btn-success');
    const deleteBtn = listItem.querySelector('.btn-danger');

    checkBtn.onclick = function () {
        const textElement = listItem.querySelector('span:first-child');
        textElement.style.textDecoration = textElement.style.textDecoration === 'line-through' ? 'none' : 'line-through';
        checkBtn.style.backgroundColor = checkBtn.style.backgroundColor === 'yellow' ? '#28a745' : 'yellow';
    };

    deleteBtn.onclick = function () {
        listElement.removeChild(listItem);
        checkEmptyList();
    };

    listElement.appendChild(listItem);
    inputElement.value = '';
    checkEmptyList();
};

function checkEmptyList() {
    if (listElement.children.length === 0) {
        listElement.innerHTML = '<li class="list-group-item">Здесь пустовато...</li>';
    } else {
        const emptyMessage = listElement.querySelector('.list-group-item');
        if (emptyMessage && emptyMessage.innerText === 'Здесь пустовато...') {
            listElement.removeChild(emptyMessage);
        }
    }
}

checkEmptyList();
