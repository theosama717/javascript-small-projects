const delAllBtn = document.querySelector('#delAll'); 
const addBtn = document.querySelector('#addBtn'); 
const input = document.querySelector('#input'); 
const list = document.querySelector('#list'); 


const todo = () => {
    const li = document.createElement('li'); 
    const liText = document.createTextNode(input.value); 
    
    li.appendChild(liText); 
    list.appendChild(li); 

    input.value = '';


    //del button 
    const delBtn = document.createElement('button'); 
    const delBtnText = document.createTextNode('Delete'); 

    delBtn.appendChild(delBtnText); 

    li.appendChild(delBtn); 

    delBtn.addEventListener('click', () => {
        delBtn.parentNode.remove(); 
    })




    //del all 
    delAllBtn.addEventListener('click', () => {
        list.innerHTML = '';
    })
}


addBtn.addEventListener('click', todo)