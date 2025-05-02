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
let cardOverlay = document.querySelector(".cardOverlay");
let cardX = document.querySelector(".cardx");


//
//Variables 
//


let cardStatus = false;
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

let ambulance = new Contact("Ambulace", "102,108", " ", defaultImg);
let emergency = new Contact("Emergency", "112", " ", defaultImg);

contactList.push(ambulance);
contactList.push(emergency);




addBtn.addEventListener("click",()=>{
  isValidEmail(mail.value);
  main.innerHTML="";

  if(name.value===""||number.value===""){
    window.alert("Both number and name are required.");
    name.value="";
    number.value="";
    return;
  }
  if(!isValidMobile(number.value)){
    window.alert("Please enter a valid phone number.");
    number.value="";
    return;
  }

  if(!mail.value==""){
  if(!isValidEmail(mail.value)){
    window.alert("Please enter a valid Email.");
    mail.value="";
    return;
  }}


    contactList.push(new Contact(name.value,number.value,mail.value,image.value));
    addContact();
    name.value = "";
    number.value = "";
    mail.value = "";
    image.value = "";
    resetOverlay();
    imagep.setAttribute("src", defaultImg);

  if(cardStatus){
    cardOverlay.style.display="none"
    cardStatus=false;
  }
  localStorage.setItem("contacts",JSON.stringify(contactList));
});


function isValidMobile(number) {
  const regex = /^[6-9]\d{9}$/;
  return regex.test(number);
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

  function addContact(){
  contactList.forEach((a)=> {

    let ele= document.createElement("div");

    ele.setAttribute("class","element");

    ele.innerHTML=` <img src="${a.image ? a.image : defaultImg}" 
           onerror="this.onerror=null; this.src='${defaultImg}'" 
           alt="Image">
    <div class="ele-text">
    <p class="name">${a.name}</p>
    <p class="number">${a.number}</p>
    <p class="mail" style="display: none;">${a.mail ? a.mail : " "}</p>
    </div>`

    main.appendChild(ele);
    resetOverlay();
    document.querySelectorAll(".element").forEach(a=>{
    a.addEventListener("click",overlayEle);
  })
})};


  

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


function overlayEle(b){
  cardOverlay.style.display="flex";
  cardStatus=true;

if(b.target.classList.contains("element")){
  c=b.target;
}else if(b.target.parentElement.classList.contains("element")){
  c=b.target.parentElement;
}else{
  c=b.target.parentElement.parentElement;
}
cardOverlay.innerHTML=`<i class="fa-solid fa-xmark cardx"></i>
                          ${c.innerHTML}`;
  cardRemove();
}

cardX = document.querySelector(".cardx");
cardX.addEventListener("click",()=>{
  cardOverlay.style.display="none";
  cardStatus=false;
});

function cardRemove(){
  cardX = document.querySelector(".cardx");
  cardX.addEventListener("click",()=>{
  cardOverlay.style.display="none";
  cardOverlay.innerHTML="";
  cardStatus=false;
})}


function resetOverlay(){
  namep.innerHTML="Name";
  numberp.innerHTML="Number"
  mailp.innerHTML="Mail"
  imagep.setAttribute("src",defaultImg);
}


imagep.addEventListener("error",()=>{
  imagep.setAttribute("src",defaultImg);
});




document.addEventListener("DOMContentLoaded",()=>{
  if(localStorage.getItem("contacts")){
    contactList=JSON.parse(localStorage.getItem("contacts"));
  }
  addContact();
});
