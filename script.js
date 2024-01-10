let btn = document.getElementById("btn");
let hidden = document.getElementById("hidden");
let cross = document.getElementById("cross");
let dialog = document.querySelector('dialog');

btn.addEventListener("click",()=>{
    dialog.showModal();
    if((parseInt(window.innerWidth) - parseInt(window.visualViewport.width)) > 5){
        document.body.style.paddingRight = "17px";  
    }else{
        document.body.style.paddingRight = "0";
    }
    document.body.style.overflowY = "hidden";
})

cross.addEventListener("click",()=>{
    dialog.close();
    document.body.style.overflowY = "scroll";
    document.body.style.paddingRight = "0";
});