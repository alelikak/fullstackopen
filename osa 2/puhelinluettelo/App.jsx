import { useState } from 'react'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,number:'050 332 3000' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNote, setNewNote] = useState(    'a new note...'  ) 
  const [newNumber, setNewNumber] = useState(    ''  ) 
  const [showAll, setShowAll] = useState(true)

  const addPerson = (event) => {
    event.preventDefault()
    
    const personObject = {
      name: newNote,
      number:newNumber,
      important: Math.random() > 0.5,
      id: persons.length + 1,
    }
   
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    const check = (element) => element.name === newNote;
    persons.some(check) ? window.alert(`${newNote} is already added to phonebook`) :
    setPersons(persons.concat(personObject))
    setNewNote('')
  }

  
  const personsToShow = showAll    ? persons    : persons.filter(person => person.important === true)
  const handleNoteChange = (event) => {    console.log(event.target.value)    
    setNewNote(event.target.value)  }
    const handleNumberChange = (event) => {    console.log(event.target.value)    
      setNewNumber(event.target.value)  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newNote} onChange={handleNoteChange}/>
          
        </div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>debug: {newName}</div>
      <h2>Numbers</h2>
      <div>{personsToShow.map(person => <li key={person.name}>  <p>{person.name}{" "} {person.number}</p> </li>)} </div>
    </div>
    
  )

}

export default App
