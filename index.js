let btns=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btns.addEventListener("click",function(){
  let item=document.createElement("li");
  item.innerText=inp.value;

   let delbtn=document.createElement("button");
   delbtn.innerText="delete";
   delbtn.classList.add("delete");
   item.appendChild(delbtn);
  ul.appendChild(item);
  inp.value="";

 });
 /*
  let delbtns=document.querySelectorAll(".delete");
  for(delbtn of delbtns){
      delbtn.addEventListener("click",function(){
     let par=this.parentElement;
     par.remove();
     }
      }) */
     ul.addEventListener("click", function(event){
         if(event.target.nodename=="BUTTON"){
             let listItem=event.target.parentElement;
             listItem.remove();
        console.log("deleted");
         }
    
  
  
});
