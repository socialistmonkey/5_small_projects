let items = []

const itemsdDiv = document.getElementById("items")
const input = document.getElementById("itemInput")
const storageKey = "items"

function loadItems(){
    const oldItems = localStorage.getItem(storageKey)
    if(oldItems) items = JSON.parse(oldItems)
        rednerItems()
}

function rednerItems(){
    itemsdDiv.innerHTML = null;

    for (const [idx, item] of Object.entries(items)){
        const container = document.createElement('div')
        container.style.marginBottom = "10px"

        const text = document.createElement("p")
        text.style.display = "inline"
        text.style.marginRight = "30px" 

        text.textContent = item;

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeItem(idx) //wrapper function to call function?

        container.appendChild(text)
        container.appendChild(button)

        itemsdDiv.appendChild(container)
    }
}

function saveItems(){
    const stringItems = JSON.stringify(items)
    localStorage.setItem(storageKey, stringItems)
}

function addItem(){
    const value = input.value
    if (!value){
        alert("Empty Input")
        return
    }
    items.push(value)
    rednerItems()
    input.value = ""
    saveItems()
}

function removeItem(idx){
    items.splice(idx,1)
    rednerItems()
    saveItems()
}
document.addEventListener("DOMContentLoaded", loadItems)
