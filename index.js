const menu = document.getElementById("nav");
const m_icon = document.getElementById("m-img");

// it is called normal and anynomus function
function showMenu() {
    

    menu.classList.toggle("show");


}
// its a arrow function
let downloadfile =()=> {
    let f=document.getElementById("file").click();
    console.log(f)
    alert(f)
   
};
