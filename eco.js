let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=>{
    ul.classList.toggle("showData");
    
    if(ul.className == "showData"){
        document.getElementById("bar").className= "fa-solid fa-xmark";
    }else{
        document.getElementById("bar").className= "fa-solid fa-bars";
    }
})

// navbar

let trend = document.getElementById("trend");
let reviews = document.getElementById("reviews");
let blogs = document.getElementById("blogs");
let contacts = document.getElementById("contacts");

trends.addEventListener("click", ()=>{
    trends.style.color="aqua";
    reviews.style.color="white";
    blogs.style.color="white";
    contacts.style.color="white";
})

reviews.addEventListener("click", ()=>{
    reviews.style.color="aqua";
    trends.style.color="white";
    blogs.style.color="white";
    contacts.style.color="white";
})

blogs.addEventListener("click", ()=>{
    blogs.style.color="aqua";
    reviews.style.color="white";
    trends.style.color="white";
    contacts.style.color="white";
})

contacts.addEventListener("click", ()=>{



    contacts.style.color="aqua";
    reviews.style.color="white";
    blogs.style.color="white";
    trends.style.color="white";
})

// card js
        
let crd = document.querySelectorAll(".crd");
let itempage = document.querySelector(".itempage");
let container = document.getElementsByClassName("container")[0]
let itemImg = document.getElementById("itemImg");
let buyBtn = document.getElementById("buyBtn");
let payment=document.getElementById("buypage");
console.log(crd);
console.log(payment);

buyBtn.addEventListener("click", function(){
    payment.style.display="flex";
    itempage.style.display="flex";
    // console.log(container);
})


   crd.forEach(function(curvalue){
        curvalue.addEventListener("click", function(){
            
             itempage.style.display="flex";
            container.style.display="none";
            
            let imgsrc = curvalue.firstElementChild.src ;
            itemImg.src=imgsrc;
            
          let cross = document.querySelector(".cross");
          cross.addEventListener("click", function(){
            buypage.style.display="none"
        })

            let a=document.getElementById("btn")
            let t1=document.getElementById("t1")
            let t2=document.getElementById("t2")
            let t3=document.getElementById("t3")

           a.addEventListener("click", function(){
            // console.log(a);
            
            if (t1.value=='' &&t2.value=='' &&t3.value=='') {
                
                alert("please enter your details");
            }
            else{
                alert("successful")
            }
           })

            
        })

   })








