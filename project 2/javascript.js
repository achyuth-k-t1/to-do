  //alert function
// Get the modal element
const modal = document.getElementById("myModal");

// Get the buttons
const btnConfirm = document.getElementById("btnConfirm");
const btnCancel = document.getElementById("btnCancel");

// Function to show the modal

// Event listener for the Confirm button
btnConfirm.addEventListener("click", function(e) {
});

// Event listener for the Cancel button
btnCancel.addEventListener("click", function() {
  hideModal();
  // Add your Cancel button logic here
});

function showModal() {
  modal.style.display = "block";
}

// Function to hide the modal
function hideModal() {
  modal.style.display = "none";
}


//Actual JS

let cnt=1;
let submit=document.body.querySelector('.submit')
.addEventListener('click',function(e){
  e.preventDefault()
  let input=document.querySelector('input')
 if(input.value!=''){
  let div=document.createElement('div')
  div.className='task'
  div.id=`${cnt}div`
  div.innerHTML=`
  <p id="${cnt}"p>${input.value}</p>
  <div>
    <button class="edit" id="${cnt}">Edit</button>
  <button class="delete" id="${cnt}d">Delete</button>
  </div>`
  cnt++
  document.body.querySelector('main').appendChild(div)
  input.value=''
  deleter()
  editor()
 }
})

//Editor
function editor() {
  let edit = document.body.querySelectorAll('.edit');
  edit.forEach(function(element) {
    element.addEventListener('click', function(e) {
      e.preventDefault();
      let divId = element.id + "div";
      let div = document.getElementById(divId);
      let p=div.firstElementChild
      let inputField = document.querySelector('input');
      if (p) {
        inputField.value = p.innerText; 
      } else {
        inputField.value = 'cannot be selected';
      }
      inputEditor(divId)
    });
  });
}

function inputEditor(divId){
  let button= document.body.querySelector('.edited')
  button.addEventListener('click',function(e){
    e.preventDefault()
    let div = document.getElementById(divId);
    let p=div.firstElementChild
    let inputField = document.querySelector('input');
    p.innerText=inputField.value
    inputField.value=''
  })
}
//Delete function
function deleter(){
  let deletee=document.body.querySelectorAll('.delete')
deletee.forEach(function(element){
  element.addEventListener('click',function(e){
    e.preventDefault()
    showModal()
    btnConfirm.addEventListener("click", function(e) {
      let id=element.id
      let divTodel=document.getElementById(`${id}iv`)
      divTodel.parentNode.removeChild(divTodel)
      hideModal()
    });
   
  })
})
}
















