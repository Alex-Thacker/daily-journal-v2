const listAll = () => {
getEntry()
        .then(parsedInt => {
            for (let i = 0; i < parsedInt.length; i++) {
            
            div.appendChild(createElement("h2", undefined, parsedInt[i].concepts))

            div.appendChild(createElement("p", undefined, parsedInt[i].date))

            div.appendChild(createElement("p", undefined, parsedInt[i].entry))

            div.appendChild(createElement("p", undefined, parsedInt[i].mood))

            const deleteButton = createElement("button", `delete--${parsedInt[i].id}`, "Delete")

            div.appendChild(deleteButton)
            deleteButton.addEventListener("click", () => {
                handleDeleteButton(parsedInt[i].id)
            })
            }
        })



clearElement(div)

    }

    listAll()

//function calls when radio button for show all is clicked
allRadioButton.addEventListener("click", listAll)
