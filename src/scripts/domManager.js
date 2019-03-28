// const container = document.querySelector("#display-container");
// const frag = document.createDocumentFragment();
// const createForm = () => {
//     //creates title
//     let h1 = document.createElement("h1")
//     h1.textContent = "Daily Journal"


//     //create first form set for date
//     let form = document.createElement("form");
//     form.action = "#";
//     let fieldset = document.createElement("fieldset");
//     let dateLabel = document.createElement("label");
//     dateLabel.textContent = "Date of entry"
//     let dateInput = document.createElement("input");
//     dateInput.type = "date"
//     dateInput.name = "journalDate"
//     dateInput.id = "journalDate"
//     dateInput.required

//     //append elements
//     fieldset.appendChild(dateLabel)
//     fieldset.appendChild(dateInput)
//     form.appendChild(fieldset)


//     //create concepts covered form
//     let form2 = document.createElement("form");
//     form2.action = "#";
//     let fieldset2 = document.createElement("fieldset");
//     let conceptsLabel = document.createElement("label");
//     conceptsLabel.textContent = "Concepts covered"
//     let conceptsInput = document.createElement("input");
//     conceptsInput.type = "text"
//     conceptsInput.name = "conceptsCovered"
//     conceptsInput.id = "conceptsCovered"
//     conceptsInput.setAttribute("required", "")

//     //append elements
//     fieldset2.appendChild(conceptsLabel)
//     fieldset2.appendChild(conceptsInput)
//     form2.appendChild(fieldset2)


//     //create journal Entry form
//     let form3 = document.createElement("form");
//     form3.action = "#";
//     let fieldset3 = document.createElement("fieldset");
//     let journalLabel = document.createElement("label");
//     journalLabel.textContent = "Journal entry (200 Characters allowed)"
//     let journalTextArea = document.createElement("textarea")
//     journalTextArea.maxLength = 200
//     journalTextArea.for = "journalEntry"
//     journalTextArea.id = "journalEntry"
//     journalTextArea.cols = "30";
//     journalTextArea.rows = "5";
//     journalTextArea.setAttribute("required", "")

//     //append elements
//     fieldset3.appendChild(journalLabel)
//     fieldset3.appendChild(journalTextArea)
//     form3.appendChild(fieldset3)


//     //create elements for mood for the day
//     let form4 = document.createElement("form");
//     form4.action = "#";
//     let fieldset4 = document.createElement("fieldset");
//     let moodLabel = document.createElement("label");
//     moodLabel.textContent = "Mood for the day";
//     let moodSelect = document.createElement("select");
//     moodSelect.id = "dropDown"
//     let option1 = document.createElement("option");
//     option1.value = "sad"
//     option1.textContent = "sad"
//     let option2 = document.createElement("option");
//     option2.value = "happy"
//     option2.textContent = "happy"
//     let option3 = document.createElement("option");
//     option3.value = "aight"
//     option3.textContent = "aight"

//     //append elements
//     moodSelect.appendChild(option1);
//     moodSelect.appendChild(option2);
//     moodSelect.appendChild(option3);
//     fieldset4.appendChild(moodSelect)
//     form4.appendChild(fieldset4)


//     //create save button
//     let button = document.createElement("button");
//     button.id = "button"
//     button.textContent = "Record Journal Entry"




//     frag.appendChild(h1)
//     frag.appendChild(form)
//     frag.appendChild(form2)
//     frag.appendChild(form3)
//     frag.appendChild(form4)
//     frag.appendChild(button)
// }

// createForm()
// let div = document.createElement("div")
// div.id = "divContainer"
// frag.appendChild(div)
// container.appendChild(frag)




/////////////////////////////

const container = document.querySelector("#display-container");
const frag = document.createDocumentFragment();



const createForm = () => {
    //creates title
    let h1 = document.createElement("h1")
    h1.textContent = "Daily Journal"


    //create first form set for date
    let form = document.createElement("form");
    form.action = "#";
    form.id = "formId"
    let fieldset = document.createElement("fieldset");
    let dateLabel = document.createElement("label");
    dateLabel.textContent = "Date of entry "
    let dateInput = document.createElement("input");
    dateInput.type = "date"
    dateInput.name = "journalDate"
    dateInput.id = "journalDate"
    dateInput.setAttribute("required", "")

    //append elements
    fieldset.appendChild(dateLabel)
    fieldset.appendChild(dateInput)
    form.appendChild(fieldset)


    //create concepts covered form
    // let form2 = document.createElement("form");
    // form2.action = "#";
    let fieldset2 = document.createElement("fieldset");
    let conceptsLabel = document.createElement("label");
    conceptsLabel.textContent = "Concepts covered "
    let conceptsInput = document.createElement("input");
    conceptsInput.type = "text"
    conceptsInput.name = "conceptsCovered"
    conceptsInput.id = "conceptsCovered"
    conceptsInput.setAttribute("required", "")

    //append elements
    fieldset2.appendChild(conceptsLabel)
    fieldset2.appendChild(conceptsInput)
    form.appendChild(fieldset2)


    //create journal Entry form
    // let form3 = document.createElement("form");
    // form3.action = "#";
    let fieldset3 = document.createElement("fieldset");
    let journalLabel = document.createElement("label");
    journalLabel.textContent = "Journal entry (200 Characters allowed) "
    let journalTextArea = document.createElement("textarea")
    journalTextArea.maxLength = 200
    journalTextArea.for = "journalEntry"
    journalTextArea.id = "journalEntry"
    journalTextArea.cols = "30";
    journalTextArea.rows = "5";
    journalTextArea.setAttribute("required", "")

    //append elements
    fieldset3.appendChild(journalLabel)
    fieldset3.appendChild(journalTextArea)
    form.appendChild(fieldset3)


    //create elements for mood for the day
    // let form4 = document.createElement("form");
    // form4.action = "#";
    let fieldset4 = document.createElement("fieldset");
    let moodLabel = document.createElement("label");
    moodLabel.textContent = "Mood for the day";

    let moodSelect = document.createElement("select");
    moodSelect.id = "dropDown"
    moodSelect.setAttribute("required", "")
    let option1 = document.createElement("option");
    option1.value = "sad"
    option1.textContent = "sad"
    let option2 = document.createElement("option");
    option2.value = "happy"
    option2.textContent = "happy"
    let option3 = document.createElement("option");
    option3.value = "aight"
    option3.textContent = "aight"

    //append elements
    moodSelect.appendChild(option2);
    moodSelect.appendChild(option3);
    moodSelect.appendChild(option1);
    fieldset4.appendChild(moodSelect)
    form.appendChild(fieldset4)


    //create save button
    let button = document.createElement("button");
    button.id = "button"
    button.textContent = "Record Journal Entry"
    // button.type = "submit"

    //append button to form
    form.appendChild(button)


    //Happy radio button
    let fieldset5 = document.createElement("fieldset");
    let legend = document.createElement("legend")
    legend.textContent = "Filter journal entries by mood"
    let radioInput1 = document.createElement("input")
    radioInput1.type = "radio"
    radioInput1.id = "radioInput1"
    radioInput1.name = "radioButton"
    radioInput1.value = "happy"
    //label
    let radioLabel1 = document.createElement("label")
    radioLabel1.textContent = "Happy"

    //append happy radio button
    fieldset5.appendChild(legend)
    fieldset5.appendChild(radioInput1)
    fieldset5.appendChild(radioLabel1)


    //Aight radio button
    let radioInput2 = document.createElement("input")
    radioInput2.type = "radio"
    radioInput2.id = "radioInput2"
    radioInput2.name = "radioButton"
    radioInput2.value = "aight"
    //label
    let radioLabel2 = document.createElement("label")
    radioLabel2.textContent = "Aight"

    //append aight radio button
    fieldset5.appendChild(radioInput2)
    fieldset5.appendChild(radioLabel2)



    //Sad radio button
    let radioInput3 = document.createElement("input")
    radioInput3.type = "radio"
    radioInput3.id = "radioInput3"
    radioInput3.name = "radioButton"
    radioInput3.value = "aad"
    //label
    let radioLabel3 = document.createElement("label")
    radioLabel3.textContent = "Sad"

    //append sad radio button
    fieldset5.appendChild(radioInput3)
    fieldset5.appendChild(radioLabel3)


    //Show all radio button
    let radioInput4 = document.createElement("input")
    radioInput4.type = "radio"
    radioInput4.id = "radioInput4"
    radioInput4.name = "radioButton"
    radioInput4.value = "All emotions"
    //label
    let radioLabel4 = document.createElement("label")
    radioLabel4.textContent = "Show all"

    //append sad radio button
    fieldset5.appendChild(radioInput4)
    fieldset5.appendChild(radioLabel4)



    form.appendChild(fieldset5)
    frag.appendChild(h1)
    frag.appendChild(form)
    // frag.appendChild(form2)
    // frag.appendChild(form3)
    // frag.appendChild(form4)
    // frag.appendChild(button)
}

createForm()
//////////////////////// end of form that stays on the dom
let entryArticle = document.createElement("article")

let div = document.createElement("div")
div.id = "divContainer"
// div.appendChild(entryArticle)
// frag.appendChild(div)
// container.appendChild(frag)

const createElement = (elementType, elementId, elementContent) => {
    let tag = document.createElement(elementType)
    if (elementId) {
        tag.setAttribute("id", elementId);
    }

    tag.textContent = elementContent
    return tag
}

const clearElement = (parentContainer) => {
    while (parentContainer.firstChild) {
        parentContainer.removeChild(parentContainer.firstChild);
}
}


let listElements = (object) => {
    clearElement(div)
    
    for (let i = 0; i < object.length; i++) {
        //filters entries when radio buttons are clicked, excluding "show all" button
        let entryArticle = document.createElement("article")
        entryArticle.id = `article--${object[i].id}`

        entryArticle.appendChild(createElement("h2", undefined, object[i].concepts))

        entryArticle.appendChild(createElement("p", undefined, object[i].date))

        entryArticle.appendChild(createElement("p", undefined, object[i].entry))

        entryArticle.appendChild(createElement("p", undefined, object[i].mood))

        const editButton = createElement("button", `edit--${object[i].id}`, "Edit")

            entryArticle.appendChild(editButton)
            editButton.addEventListener("click", () => {
                createEditForm(`article--${object[i].id}`)
            })

        const deleteButton = createElement("button", `delete--${object[i].id}`, "Delete")

            entryArticle.appendChild(deleteButton)
            deleteButton.addEventListener("click", () => {
                handleDeleteButton(object[i].id)
            })
            div.appendChild(entryArticle)
        }

    
}

frag.appendChild(div)
container.appendChild(frag)
//create form, use GET to pre fill forms. create save button. save button needs listener for patch method. clear elements. need to put entries into another container to perform clear elements more easily.  


const createEditForm = (entryId) => {
    let formArticle = document.querySelector(`#${entryId}`)

    clearElement(formArticle)

    let singleId = entryId.split("--")[1]

    // console.log(singleId)

    getSingleEntry(singleId)
    .then(response => {

        //creates edit form when edit button is clicked
        let conceptForm = createElement("input", "conceptForm")
        let conceptFormLabel = createElement("label", undefined, "Concepts covered: ")
        conceptForm.value = response.concepts
        let fieldsetForm = document.createElement("fieldset")
        fieldsetForm.classList.add("editFormClass")

        fieldsetForm.appendChild(conceptFormLabel)
        fieldsetForm.appendChild(conceptForm)
        formArticle.appendChild(fieldsetForm)

        let dateForm = createElement("input", "dateForm")
        let dateFormLabel = createElement("label", undefined, "Date of entry: ")
        dateForm.value = response.date
        let fieldsetForm1 = document.createElement("fieldset")
        fieldsetForm1.classList.add("editFormClass")

        fieldsetForm1.appendChild(dateFormLabel)
        fieldsetForm1.appendChild(dateForm)
        formArticle.appendChild(fieldsetForm1)

        let journalEntryForm = createElement("textarea", "journalEntryForm")
        let journalEntryFormLabel = createElement("label", undefined, "Journal entry: ")
        journalEntryForm.value = response.entry
        // journalEntryForm.cols = 
        // journalEntryForm.rows = 
        let fieldsetForm2 = document.createElement("fieldset")
        fieldsetForm2.classList.add("editFormClass")

        fieldsetForm2.appendChild(journalEntryFormLabel)
        fieldsetForm2.appendChild(journalEntryForm)
        formArticle.appendChild(fieldsetForm2)

        let moodForm = createElement("select", "moodForm")
        let option1 = document.createElement("option");
        option1.value = "sad"
        option1.textContent = "sad"
        let option2 = document.createElement("option");
        option2.value = "happy"
        option2.textContent = "happy"
        let option3 = document.createElement("option");
        option3.value = "aight"
        option3.textContent = "aight"
        let moodFormLabel = createElement("label", undefined, "Mood: ")
        let fieldsetForm3 = document.createElement("fieldset")
        fieldsetForm3.classList.add("editFormClass")

        moodForm.appendChild(option2);
        moodForm.appendChild(option3);
        moodForm.appendChild(option1);
        fieldsetForm3.appendChild(moodFormLabel)
        fieldsetForm3.appendChild(moodForm)
        formArticle.appendChild(fieldsetForm3)
        moodForm.value = response.mood

        let saveEditButton = createElement("button", `save--${singleId}`, "Save changes")
        formArticle.appendChild(saveEditButton)

        
        saveEditButton.addEventListener("click", () => {
            handleSaveButton(entryId)
        })
    })
}


// "date": "2019-03-27",
//       "concepts": "lab",
//       "entry": "lab day",
//       "mood": "happy",
//       "id": 1