//part 1

let form = document.getElementById("add-todo")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const groceryItem = form.title.value
    form.title.value = ""
    

    const li = document.createElement("li")
    li.textContent = groceryItem
    document.getElementById("list").append(li)

    const editButton = document.createElement("button")
    editButton.textContent = "Edit"
    document.getElementById("list").append(editButton)

    const xButton = document.createElement("button")
    xButton.textContent = "X"
    document.getElementById("list").append(xButton)

    //part 2

    xButton.addEventListener("click",function(){
        li.textContent = ""
        xButton.remove()
        editButton.remove()
    })

    //extra credit

    editButton.addEventListener("click", function(){
        const newInput = document.createElement("input")
        newInput.innerHTML += groceryItem
        document.getElementById("list").append(newInput)

        //need placeholder value of input field to = groceryItem

        editButton.remove()
        const saveButton = document.createElement("button")
        saveButton.textContent = "Save"
        document.getElementById("list").append(saveButton)
        
        //need editButton to reappear (opposite of remove?)

        saveButton.addEventListener("click", function (){
        li.textContent = newInput.value
        newInput.remove()
        saveButton.remove()
        })
    })

    
    
})