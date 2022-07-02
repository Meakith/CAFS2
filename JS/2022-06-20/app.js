const nature = [
    "https://www.iucn.org/sites/dev/files/content/images/2020/shutterstock_1458128810.jpg",
    "https://www.greenqueen.com.hk/wp-content/uploads/2021/06/WEF-Investments-In-Nature-Based-Solutions-Have-To-Triple-By-2030-To-Address-Climate-Change-Biodiversity-Loss.jpg",
    "https://jetposting.com/wp-content/uploads/2021/12/photo-1610878180933-123728745d22.jpg"
];

const img = document.getElementById('imageBox');
let i = 0;
setInterval(function () {
    img.style.backgroundImage = "url(" + nature[i] + ")";
    img.style.backgroundSize = "100% 100%";
    img.style.opacity = "0.6";
    i = i + 1;
    if (i == nature.length) {
        i = 0;
    }
}, 1500);

function display_ct() {
    let x = new Date()
    let x1 = x.getMonth() + 1 + "/" + x.getDate() + "/" + x.getFullYear();
    x1 = x1 + " - " + x.getHours() + ":" + x.getMinutes() + ":" + x.getSeconds();
    document.getElementById('ct').innerHTML = x1;
    setTimeout('display_ct()', 1000);
}
display_ct();

let form = document.querySelector('form');
let textarea = document.querySelector('#textarea');
let message = "Success!";
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(textarea.value == ""){
        alert('Fill info');
        return false;
    }
    let msg = document.querySelector('#message');
    msg.textContent = message;
    msg.scrollIntoView();
})