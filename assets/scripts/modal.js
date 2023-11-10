const openAddGroup = document.getElementById('open-add-group');
const closeAddGroup = document.getElementById('close-add-group');
const modalAddGroup = document.getElementById('modal-add-group');

openAddGroup.addEventListener('click', (e) => {
    e.preventDefault();
    modalAddGroup.style.display = 'block'

})

closeAddGroup.addEventListener('click', (e) => {
    e.preventDefault();
    modalAddGroup.style.display = 'none'
})




const openAddCommit = document.getElementById('open-add-commit');
const closeAddCommit = document.getElementById('close-add-commit');
const modalAddCommit = document.getElementById('modal-add-commit');

openAddCommit.addEventListener('click', (e) => {
    e.preventDefault();
    modalAddCommit.style.display = 'block'
})

closeAddCommit.addEventListener('click', (e) => {
    e.preventDefault();
    modalAddCommit.style.display = 'none'
})