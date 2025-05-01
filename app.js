//
//DOM Variables
//

let main = document.querySelector(".main");
let overlay = document.querySelector(".overlayBtn");
let add = document.querySelector(".overlay");
let name= document.querySelector(".nameIn");
let namep= document.querySelector("#name");
let card= document.querySelector(".card");
let number= document.querySelector(".numberIn");
let numberp= document.querySelector("#number");
let mail= document.querySelector(".mailIn");
let mailp= document.querySelector("#mail");
let image= document.querySelector(".imageIn");
let imagep= document.querySelector("#image");
let addBtn = document.querySelector(".contactAdd");


//
//Variables 
//
let addbtnStatus= false;
let contactList =[];
let defaultImg = "/assets/contacts.png"

//
//constructor & function
//


class Contact{
  constructor(name,number,email,image){
    this.name=name;
    this.number=number;
    this.email=email;
    this.image=image;
  }
};

let ambulance = new Contact("Ambulace", "108", " ", defaultImg);
let emergency = new Contact("Emergency", "112", " ", defaultImg);

contactList.push(ambulance);
contactList.push(emergency);

addBtn.addEventListener("click",()=>{

  main.innerHTML="";

  if(name.value===""||number.value===""){
    window.alert("Both number and name are required.");
    name.value="";
    number.value="";
  }else if(image.value=""){
    if(mail.value===""){
      contactList.push(new Contact(name.value,number.value," ",defaultImg));  
      addContact();
    }else{
    contactList.push(new Contact(name.value,number.value,mail.value,defaultImg));
    addContact();
  }
    
  }else{
    contactList.push(new Contact(name.value,number.value,mail.value,image.value));
    addContact();
    number.value="";
    name.value="";
    number.value;
    image.value;
}});


function addContact(){
contactList.forEach((a)=> {

  let ele= document.createElement("div");

  ele.setAttribute("class","element");

  ele.innerHTML=`<img src=${a.image} onerror="this.onerror=null; this.src='default.jpg'"  alt="Image">  
  <div class="ele-text">
  <p class="name">${a.name}</p>
  <p class="number">${a.number}</p>
  </div>`

  main.appendChild(ele);
})}


name.addEventListener("input",()=>{
  namep.innerHTML= name.value;
});


number.addEventListener("input",()=>{
  numberp.innerHTML= number.value;
});

mail.addEventListener("input",()=>{
  mailp.innerHTML= mail.value;
});

image.addEventListener("input",()=>{
  imagep.setAttribute("src",image.value);
});

overlay.addEventListener("click",()=>{
  if(!addbtnStatus){
    overlay.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    add.style.display="flex";
  addbtnStatus = true;
  }else{
    main.innerHTML="";
    add.style.display="none";
    overlay.innerHTML = `<i class="fa-solid fa-plus"></i>`;
    addbtnStatus = false;
    addContact();
}});


document.addEventListener("DOMContentLoaded",addContact);