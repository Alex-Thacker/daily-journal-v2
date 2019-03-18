const container = document.querySelector("#display-container");
const frag = document.createDocumentFragment();
const createForm = () => {
    //creates title
    let h1 = document.createElement("h1")
    h1.textContent = "Daily Journal"


    //create first form set for date
    let form = document.createElement("form");
    form.action = "#";
    let fieldset = document.createElement("fieldset");
    let dateLabel = document.createElement("label");
    dateLabel.textContent = "Date of entry"
    let dateInput = document.createElement("input");
    dateInput.type = "date"
    dateInput.name = "journalDate"
    dateInput.id = "journalDate"
    
    //append elements
    fieldset.appendChild(dateLabel)
    fieldset.appendChild(dateInput)
    form.appendChild(fieldset)
    

    //create concepts covered form
    let form2 = document.createElement("form");
    form2.action = "#";
    let fieldset2 = document.createElement("fieldset");
    let conceptsLabel = document.createElement("label");
    conceptsLabel.textContent = "Concepts covered"
    let conceptsInput = document.createElement("input");
    conceptsInput.type = "text"
    conceptsInput.name = "conceptsCovered"
    conceptsInput.id = "conceptsCovered"
    
    //append elements
    fieldset2.appendChild(conceptsLabel)
    fieldset2.appendChild(conceptsInput)
    form2.appendChild(fieldset2)


    //create journal Entry form
    let form3 = document.createElement("form");
    form3.action = "#";
    let fieldset3 = document.createElement("fieldset");
    let journalLabel = document.createElement("label");
    journalLabel.textContent = "Journal entry"
    let journalTextArea = document.createElement("textarea")
    journalTextArea.for = "journalEntry"
    journalTextArea.id = "journalEntry"
    journalTextArea.cols = "30";
    journalTextArea.rows = "5";

    //append elements
    fieldset3.appendChild(journalLabel)
    fieldset3.appendChild(journalTextArea)
    form3.appendChild(fieldset3)


    //create elements for mood for the day
    let form4 = document.createElement("form");
    form4.action = "#";
    let fieldset4 = document.createElement("fieldset");
    let moodLabel = document.createElement("label");
    moodLabel.textContent = "Mood for the day";
    let moodSelect = document.createElement("select");
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
    moodSelect.appendChild(option1);
    moodSelect.appendChild(option2);
    moodSelect.appendChild(option3);
    fieldset4.appendChild(moodSelect)
    form4.appendChild(fieldset4)


    //create save button
    let button = document.createElement("button");
    button.id = "button"
    button.textContent = "Record Journal Entry"




    frag.appendChild(h1)
    frag.appendChild(form)
    frag.appendChild(form2)
    frag.appendChild(form3)
    frag.appendChild(form4)
    frag.appendChild(button)
}