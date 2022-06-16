let h1 = document.querySelector('h1');
let height = window.innerHeight;
let width = window.innerWidth;

if (h1){
    window.addEventListener('resize', function(e) {
        h1.textContent = 'Window height -> ' + height + ' ' + 'Window.width ->' + width;
    })
}