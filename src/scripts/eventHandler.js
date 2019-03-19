let button = document.querySelector("#button")

const handleEntry = () => {
    const dateEntry = document.querySelector("#journalDate");
    const conceptEntry = document.querySelector("#conceptsCovered")
    const journalEntry = document.querySelector("#journalEntry")
    const selectValue = document.querySelector("#dropDown")
    

    let entryObject = {
        date: dateEntry.value,
        concepts: conceptEntry.value,
        entry: journalEntry.value,
        mood: selectValue.value
    }
    

    postEntry(entryObject)
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
            }
        })
                while (div.firstChild) {
                    div.removeChild(div.firstChild);
                }

    dateEntry.value = ""
    conceptEntry.value = ""
    journalEntry.value = ""

    
}

button.addEventListener("click", handleEntry)
