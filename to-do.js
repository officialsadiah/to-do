let name = document.querySelector(".name")
let caption = document.querySelector(".caption")
let tamplete = document.querySelector(".tamplete")
let post = document.querySelector(".post-bttn")
let updateButton = document.querySelector(".updateButton")
let emt = document.querySelector(".emt")

let arr = []
var indexExtra;

post.addEventListener("click" , ()=>{

    arr.push({
                name:name.value ,
                caption:caption.value

    })
            tamplete.innerHTML = ""
            display()
            name.value = ""
            caption.value = ""

})

updateButton.addEventListener("click", () => {
arr[indexExtra].name = name.value
arr[indexExtra].caption = caption.value
  tamplete.innerHTML = ""
  display()

  updateButton.style.display = "none"
  post.style.display = "block"


  name.value = ""
  caption.value = ""
})


function display(){

    arr.map(item=> {
if(!item.name || !item.caption ){
emt.innerHTML = "Please Enter Name and Caption..."
}else{
tamplete.innerHTML += `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.caption}</p>
    <button type="button" class="btn btn-primary edit">Edit</button>
    <button type="button" class="btn btn-danger delete">Delete</button>
  </div>
</div>` }
})




let deleteBtn = document.querySelectorAll(".delete")
let covertToArry = Array.from(deleteBtn)
covertToArry.map((button,index) => {
button.addEventListener("click", () => {
  arr.splice(index,1)
  tamplete.innerHTML = ""
  display()
})

})

let editBtn = document.querySelectorAll(".edit")
let covertToArryEdit = Array.from(editBtn)

covertToArryEdit.map((button,index) => {
button.addEventListener("click", () => {
  // console.log("edited")
  indexExtra = index
  updateButton.style.display = "block"
  post.style.display = "none"
  
})

})



}