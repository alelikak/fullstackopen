import { useState } from 'react'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newFilter, setNewFilter] = useState('')
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
  const personsToShow2 = newFilter    ? persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase())):persons
   //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
   //https://stackoverflow.com/questions/48979908/react-filter-function-case-insensitive
  
  const handleNoteChange = (event) => {    console.log(event.target.value)    
    setNewNote(event.target.value)  }
  const handleNumberChange = (event) => {    console.log(event.target.value)    
    setNewNumber(event.target.value)  }
  const handleFilterChange = (event) => {    console.log(event.target.value)    
    setNewFilter(event.target.value)  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
      <div>filter shown with: <input value={newFilter} onChange={handleFilterChange}/></div>
       
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
      <div>{personsToShow2.map(person => <li key={person.name}>  <p>{person.name}{" "} {person.number}</p> </li>)} </div>
    </div>
    
  )

}

export default App
