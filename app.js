let dropToggler = document.getElementById('dropmenu-toggler')
dropToggler.addEventListener('click', displayDropmenu);

let dropmenu = document.getElementById('dropmenu');

function displayDropmenu(){
    dropmenu.classList.toggle('dropmenu-active');
}

console.log(dropmenu)