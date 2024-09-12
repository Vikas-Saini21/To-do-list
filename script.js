let item=document.getElementById('item')
let box=document.getElementById('todobox')
item.addEventListener('keyup',function(e){
    if(e.key=='Enter'){
        addToDo(this.value)
        this.value=""
        }
        //here we will clear the value
})
const addToDo=(item)=>{
    const li=document.createElement("li")
    li.innerHTML=`${item}<i class="fa-solid fa-xmark"></i>`
    li.addEventListener('click',function(){
    this.classList.toggle(done)
})
    li.querySelector("i").addEventListener('click',function(){
        li.remove()
    })
    box.appendChild(li)
}