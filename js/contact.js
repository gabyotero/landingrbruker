const button = document.querySelector('.btn-contact');
const button2 = document.getElementById('btn-contact');
const modal = document.querySelector('.modal-contact');
const form = document.querySelector('.modal-content');
button.addEventListener('click', () =>{
    modal.classList.toggle("show")
})
button2.addEventListener('click', () =>{
    modal.classList.toggle("show")
})

modal.addEventListener('click', (e)=>{
    if(e.target != form && e.target == modal)
        modal.classList.toggle("show");
})
