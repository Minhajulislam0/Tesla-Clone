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


// scroll effect

document.lastScrollPosition = 0;
document.lastCentered = 0;
document.onWayTo = null;

document.addEventListener('scroll', ()=>{
    const direction = window.pageYOffset - document.lastScrollPosition > 0 ? 'down': 'up';
    const sections = [...document.querySelectorAll('section')]

    if(document.onWayTo === null){
        const destinationIndex = direction === 'up' ? document.lastCentered - 1 : document.lastCentered + 1;

        if (destinationIndex >= 0 && destinationIndex < sections.length){
            document.onWayTo = destinationIndex;
    
            window.scroll(0, sections[destinationIndex].offsetTop);
        }
    }

   
    
    sections.forEach((section, index)=>{
        if (window.pageYOffset === section.offsetTop){
            document.lastCentered = index;
            section.className = 'active';

            if(document.onWayTo === index){
                document.onWayTo = null;
            }
        }else{
            section.className = '';
        }
    })
    document.lastScrollPosition = window.pageYOffset;
})




