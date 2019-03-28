let button = document.querySelector("#button")


const handleEntry = () => {
    event.preventDefault()
    const formId = document.querySelector("#formId")
    const dateEntry = document.querySelector("#journalDate");
    const conceptEntry = document.querySelector("#conceptsCovered")
    const journalEntry = document.querySelector("#journalEntry")
    const selectValue = document.querySelector("#dropDown")

    const validity = formId.checkValidity()
    formId.reportValidity()


    

    let entryObject = () => {
        return {
        date: dateEntry.value,
        concepts: conceptEntry.value,
        entry: journalEntry.value,
        mood: selectValue.value
        }
    }
    
    if (validity){
    postEntry(entryObject())
        .then(() => getEntry())
        .then(parsedInt => {
            for (let i = 0; i < parsedInt.length; i++) {
                //list entry when "record journal entry button is clicked"
            let entryArticle = document.createElement("article")
            entryArticle.id = `article--${parsedInt[i].id}`
            entryArticle.appendChild(createElement("h2", undefined, parsedInt[i].concepts))
            // let h2 = document.createElement("h2")
            // h2.textContent = parsedInt[i].concepts
            // div.appendChild(h2)
            
            entryArticle.appendChild(createElement("p", undefined, parsedInt[i].date))
            // let p1 = document.createElement("p")
            // p1.textContent = parsedInt[i].date
            // div.appendChild(p1)
            
            entryArticle.appendChild(createElement("p", undefined, parsedInt[i].entry))
            // let p2 = document.createElement("p")
            // p2.textContent = parsedInt[i].entry
            // div.appendChild(p2)

            entryArticle.appendChild(createElement("p", undefined, parsedInt[i].mood))
            // let p3 = document.createElement("p")
            // p3.textContent = parsedInt[i].mood
            // div.appendChild(p3)

            const editButton = createElement("button", `edit--${parsedInt[i].id}`, "Edit")

            entryArticle.appendChild(editButton)
            editButton.addEventListener("click", () => {
                createEditForm(`article--${parsedInt[i].id}`)
            })

            const deleteButton = createElement("button", `delete--${parsedInt[i].id}`, "Delete")

            entryArticle.appendChild(deleteButton)
            deleteButton.addEventListener("click", () => {
                handleDeleteButton(parsedInt[i].id)
            })
            div.appendChild(entryArticle)
            }
        })
                while (div.firstChild) {
                    div.removeChild(div.firstChild);
                }

    dateEntry.value = ""
    conceptEntry.value = ""
    journalEntry.value = ""

            }
            
}


button.addEventListener("click", handleEntry)

let happyRadioButton = document.querySelector("#radioInput1")
let aightRadioButton = document.querySelector("#radioInput2")
let sadRadioButton = document.querySelector("#radioInput3")
let allRadioButton = document.querySelector("#radioInput4")

// funcion to filter getEntry by mood
const filterMood = (mood) => {
    // console.log(happyRadioButton.value)
    getEntry()
    .then(taco => {
        // console.log(taco)

        let moodTest = taco.filter(object => {
             if (object.mood === mood){
                 return true
             }
            })
            // console.log(moodTest)
            listElements(moodTest)
    })
}

//calling function when radio button is clicked
happyRadioButton.addEventListener("click", () => {
    filterMood("happy")
})
aightRadioButton.addEventListener("click", () => {
    filterMood("aight")
})
sadRadioButton.addEventListener("click", () => {
    filterMood("sad")
})


//function is called when delete button is clicked on journal entries
const handleDeleteButton = (entryId) => {
    deleteEntry(entryId)
    .then(listAll)
}



//function is called when save button is click, to save changes from edit
//function needs to get values from input fields and use put or patch method to update api. then get method to render dom again. this render should show entries based on what mood is selected on radio buttons

const handleSaveButton = (entryId) => {
    const conceptFormId = document.querySelector("#conceptForm").value
    const dateFormId = document.querySelector("#dateForm").value
    const journalEntryFormId = document.querySelector("#journalEntryForm").value
    const moodFormId = document.querySelector("#moodForm").value

    const editObject = {
        date: dateFormId,
        concepts: conceptFormId,
        entry: journalEntryFormId,
        mood: moodFormId
    }

    let singleId = entryId.split("--")[1]

    putEntry(singleId, editObject)
    .then(() => {
        if(happyRadioButton.checked === true){
            filterMood("happy")
        } else if (aightRadioButton.checked === true) {
            filterMood("aight")
        } else if (sadRadioButton.checked === true){
            filterMood("sad")
        } else {
            listAll()
        }
    } 
    )

}

