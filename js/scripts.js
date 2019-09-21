let imgs = document.querySelectorAll('.myimg');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modalImg');
let caption = document.querySelector('#caption');
imgs.forEach(i => {

    i.addEventListener('click', function(event){
        event.preventDefault();
        modal.style.display="block";
        console.log(i.getAttribute("src"));
        modalImg.src = i.getAttribute("src");
        caption.innerHTML = i.getAttribute("alt");
        
    });
})
let close = document.querySelector('.close');
close.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = "none";
});


modal.addEventListener('click', function(event) {
    event.preventDefault();
    modal.style.display = "none";
});