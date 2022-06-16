let btn = document.querySelector('button');
let input1 = document.getElementById('copy');
let input2 = document.getElementById('paste');


if(btn){
    btn?.addEventListener('click',function(event){
        if(input1 && input2){
            input1?.value = input2?.value
        }
    });
};