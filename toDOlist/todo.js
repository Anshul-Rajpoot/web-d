let btn=document.querySelector("button");
let ol=document.querySelector("ol");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delbtn");

    item.appendChild(delbtn);
    ol.appendChild(item);
    inp.value="";
});

// let delbtns=document.querySelectorAll(".delbtn");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let parentLi=this.parentElement;
//         console.log(parentLi);
//         parentLi.remove();


//     });
    
// }

ol.addEventListener("click",function(){
    if(event.target.nodeName=="BUTTON"){
    console.log("button clicked");
    let listItem=event.target.parentElement;
    listItem.remove();
    console.log(deleted);
    }

});
