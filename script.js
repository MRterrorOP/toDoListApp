const listOfItem = [];
const input = document.getElementById('userInput');
const Inprogress = document.getElementById('taskINprogress')
const complete = document.getElementById('TaskComplete')
let index = 1
let contianerId = 'itemContainer'+index


function AddItem(){
    
    const ItemContainer = document.createElement('div');
    // set a class value for div to style it 
    const RadioButton = document.createElement('input');
    const Item = document.createElement('label');

    Item.appendChild(document.createTextNode(input.value));
    Item.setAttribute("for" , index);

    ItemContainer.setAttribute("id" , contianerId)
    ItemContainer.setAttribute("class" , 'ItemContainer')

    

    

    RadioButton.setAttribute('type'  , 'checkbox' )
    RadioButton.setAttribute('id' , index )
    ItemContainer.appendChild(RadioButton)
    ItemContainer.appendChild(Item)
    Inprogress.appendChild(ItemContainer)
    
    
    
    
    input.value = ''
    index += 1
}



document.querySelector('button').addEventListener('click' , AddItem)


  

  // Add event listener for "keydown" event
  input.addEventListener("keydown", function(event) {
    
    if (event.keyCode === 13) {
      
     AddItem()

      
      input.value = "";
    }
  });
  function ToMovePrToCom(x){
    const toManipultae = document.getElementById(x)
    complete.appendChild(toManipultae)
  }
