// menu open
const menuOpen = ()=>{
    document.querySelector('.backdrop').className = 'backdrop active';
    document.querySelector('aside').className = 'active';
}
// menu close
const menuClose = ()=>{
    document.querySelector('.backdrop').className = 'backdrop';
    document.querySelector('aside').className = '';
}
// initilizing menu open
document.getElementById('nav-Menu').onclick = e =>{
    e.preventDefault();
    menuOpen();
}
// initilizing menu close
document.querySelector('.close').onclick = e =>{
    menuClose();
}
// initilizing menu close by clicking backdrop
document.querySelector('.backdrop').onclick = e =>{
    menuClose();
}





