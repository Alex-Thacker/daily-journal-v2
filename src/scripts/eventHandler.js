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
                
            let h2 = document.createElement("h2")
            h2.textContent = parsedInt[i].concepts
            div.appendChild(h2)

            let p1 = document.createElement("p")
            p1.textContent = parsedInt[i].date
            div.appendChild(p1)

            let p2 = document.createElement("p")
            p2.textContent = parsedInt[i].entry
            div.appendChild(p2)

            let p3 = document.createElement("p")
            p3.textContent = parsedInt[i].mood
            div.appendChild(p3)

            const deleteButton = createElement("button", `delete--${parsedInt[i].id}`, "Delete")

            div.appendChild(deleteButton)
            deleteButton.addEventListener("click", () => {
                handleDeleteButton(parsedInt[i].id)
            })
            
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