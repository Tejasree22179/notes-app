// script.js
const addNoteBtn = document.getElementById('addNoteBtn');
const noteText = document.getElementById('noteText');
const notesContainer = document.getElementById('notesContainer');

let notes = JSON.parse(localStorage.getItem('notes')) || [];

// Display notes when page loads
displayNotes();

// Add new note
addNoteBtn.addEventListener('click', () => {
    const text = noteText.value.trim();
    if(text === "") {
        alert("Note cannot be empty!");
        return;
    }
    notes.push(text);
    localStorage.setItem('notes', JSON.stringify(notes));
    noteText.value = "";
    displayNotes();
});

// Delete note
function deleteNote(index) {
    notes.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
}

// Display all notes
function displayNotes() {
    notesContainer.innerHTML = "";

    notes.forEach((noteText, index) => {
        const noteCard = document.createElement('div');
        noteCard.classList.add('note'); // Use the sticky-note style

        // Text content inside note
        const p = document.createElement('p');
        p.textContent = noteText;
        noteCard.appendChild(p);

        // Delete button
        const delBtn = document.createElement('button');
        delBtn.classList.add('delete-btn');
        delBtn.textContent = "X";
        delBtn.addEventListener('click', () => deleteNote(index));
        noteCard.appendChild(delBtn);

        notesContainer.appendChild(noteCard);
    });
}
