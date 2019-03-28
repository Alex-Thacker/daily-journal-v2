const getEntry = () => {
    return fetch("http://localhost:8088/entries")
        .then(response => response.json())
}


const postEntry = (journalEntry) => {
    return fetch("http://localhost:8088/entries", {
      method: "POST",
      body: JSON.stringify(journalEntry),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
  }

  const deleteEntry = (entryId) => fetch(`http://localhost:8088/entries/${entryId}`, {
    method: "DELETE"
  })

  const getSingleEntry = (entryId) => {
    return fetch(`http://localhost:8088/entries/${entryId}`)
        .then(response => response.json())
}

const putEntry = (entryId, entryObject) => {
  return fetch(`http://localhost:8088/entries/${entryId}`, {
  method: "PUT",
  body: JSON.stringify(entryObject),
  headers: {
    "Content-Type": "application/json"
  }
})
}