let openBtn = document.getElementById('open-btn');
let closeBtn = document.getElementById('close-btn');
let modalContainer = document.getElementById('modal-container');

openBtn.addEventListener('click', () => {
modalContainer.style.display = "block"; 
});
closeBtn.addEventListener('click', () => {
    modalContainer.style.display = "none"; 
    });
    
window.addEventListener('click', (e) => {
        if( e.target === modalContainer) {
            modalContainer.style.display = "none";
            console.log('hello world');
        }
    });

