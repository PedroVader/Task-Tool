const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    const text = input.value;

    if(text !== '') {
        const li = document.createElement('li');
        const p = document.createElement('p');
        p.textContent = text;

        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);
        
        input.value = "";
        empty.style.display = "none"; 
        li.style.listStyle = "none";
        p.className = "fw-bold mb-0";
        p.style.marginTop = "15px";
        p.style.fontSize = "20px"
        
        
    }
})

function addDeleteBtn() {
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Remove item";
    deleteBtn.className = "btn-delete";
    
    deleteBtn.className = "btn btn-outline-warning";
    deleteBtn.style.marginTop = "20px"
            
        

    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);
        
    })
    return deleteBtn;
}
