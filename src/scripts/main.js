const listAll = () => {
getEntry()
        .then(parsedInt => {
            for (let i = 0; i < parsedInt.length; i++) {
            let entryArticle = document.createElement("article")
            entryArticle.id = `article--${parsedInt[i].id}`

            entryArticle.appendChild(createElement("h2", undefined, parsedInt[i].concepts))

            entryArticle.appendChild(createElement("p", undefined, parsedInt[i].date))

            entryArticle.appendChild(createElement("p", undefined, parsedInt[i].entry))

            entryArticle.appendChild(createElement("p", undefined, parsedInt[i].mood))

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
clearElement(div)

    }
    listAll()

//function calls when radio button for show all is clicked
allRadioButton.addEventListener("click", listAll)
