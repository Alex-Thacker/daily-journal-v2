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