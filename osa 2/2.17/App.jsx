
import { useState, useEffect } from 'react'
import axios from 'axios'
import noteService from './notes'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="alert">
      {message}
    </div>
  )
}

const Filter = (props) => {
  return (
<div>filter shown with: <input value={props.filter} onChange={props.eventhandler}/></div>
)
}


const PersonForm = (props) => {
  return (

<form onSubmit={props.addPerson}>
        <div>
          name: <input value={props.newNote} onChange={props.handleNoteChange}/>
          
        </div>
        <div>number: <input value={props.newNumber} onChange={props.handleNumberChange}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

)
}

const Persons = (props) => {
  const baseUrl = 'http://localhost:3001/persons'
  return (
       
   
    
<div>{props.personsToShow.map(person => <li className='person' key={person.name}>  <p>{person.name}{" "} {person.number}{" "} <button onClick={() => {if(window.confirm(`Delete ${person.name} ?`)){axios.delete(`${baseUrl}/${person.id}`).then(response => {})
    .catch(alert => {setAlertMessage( `Deleted '${person.name}' `)       
    setTimeout(() => {setAlertMessage(null)}, 5000)})
    
    

       


};}}>delete</button></p> </li>)} </div>
//Source https://stackoverflow.com/questions/52034868/confirm-window-in-react
)
}




const App = () => {
  const [alertMessage, setAlertMessage] = useState(null)
  const [persons, setPersons] = useState([  ])

  const [newFilter, setNewFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNote, setNewNote] = useState(    'a new note...'  ) 
  const [newNumber, setNewNumber] = useState(    ''  ) 
  const [showAll, setShowAll] = useState(true)



const [value, setValue] = useState('')
const [flag, setFlag] = useState()
const [area, setArea] = useState()
const [capital, setCapital] = useState({})
const [languages, setLanguages] = useState({})
const [country, setCountry] = useState(null)


  const deletePerson = (event) => {
     event.preventDefault()
    console.log('button id',props.id)
     
     if (window.confirm('Delete', this.props.name, '?')) {
      
      noteService.poista(this.props.id).then(response => {}).catch(error => {setAlertMessage( `Deleted '${this.props.name}' `)       
      setTimeout(() => {setAlertMessage(null)}, 9000)})
      console.log('deletePerson eventtia kutsuttiin')
    }
    
   

    
  }

  const addPerson = (event) => {
    event.preventDefault()
    const arr = persons.map(person=>person.id);
    const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
    console.log(max)
    //Poistettaessa puh.nroita listan ensimmaisen henkilon id saattaa olla yhta suuri kuin lisattavan henkilon id, jolloin ohjelma ei lisaa henkiloa, jos kaytetaan kurssimateriaalin persons.length + 1 id:na
    
    const personObject = {
      name: newNote,
      number:newNumber,
      important: Math.random() > 0.5,
      id: max + 1,
    }
  

    //if (persons[0].id!=1 && persons.length>0) {
    //  personObject.id=personObject.id+1
    //}
    
    const check = (element) => element.name === newNote;

    

    const note =persons.find(person => person.name === newNote)
    if (note) {
      
      
    
   
    if(window.confirm(`${newNote} is already added to phonebook, replace the old one with a new one?`))
    {
    
    const newObject = {
      name: note.name,
      number:newNumber,
      important: note.important,
      id: note.id,
    }
    console.log(newObject)

    noteService
       .update(note.id, newObject).then(returnedNote => {
         setPersons(persons.map(person => person.id !== id ? person : returnedNote))
       }).catch(alert => {setAlertMessage( `Updated '${newNote}' `)       
       setTimeout(() => {setAlertMessage(null)}, 5000)})
       //Source https://fullstackopen.com/osa2/tyylien_lisaaminen_react_sovellukseen
       setNewNote('')
       setNewNumber('')
      }else
      {// window confirm cancel 
      }
  
}
  else
  {
    console.log('Create new name',personObject,'persons.length ', persons.length)
    setPersons(persons.concat(personObject))
    setNewNote('')
    setNewNumber('')
    
    
    
       noteService.create(personObject).then(response => {}).catch(alert => {setAlertMessage( `Added '${personObject.name}' `)       
         setTimeout(() => {setAlertMessage(null)}, 5000)})


         

  }

    
           
    
    


        


  }

    


  //https://fullstackopen.com/osa2/palvelimella_olevan_datan_hakeminen
  useEffect(() => {    
    console.log('effect') 
  if (country) {   

    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${country}`)
      .then(response => {
        setFlag(response.data.flag)
        setArea(response.data.area)
        setCapital(response.data.capital)
        setLanguages(response.data.languages)
        console.log('capital ',capital) 
        console.log('languages ',languages) 

      
      })

      
      console.log('response',languages[0]) 
      console.log('response.data',languages) 

  axios.get('http://localhost:3001/persons').then(response => {
    console.log('promise fulfilled')        
  setPersons(response.data)      })  }}, [country])  
  console.log('render', persons.length, 'notes')



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

    const handleChange = (event) => {
      setValue(event.target.value)
      
//axios
      //.get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      //.then(response => {
        
        //setCountry(response.data.name.common)
        //console.log('country ',country) 

      
      //})
      //const countriesToShow = newFilter    ? response.data.filter(country => country.name.toLowerCase().includes(newFilter.toLowerCase())):null
      //console.log(countriesToShow) 
      

      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
      

    }
  
    const onSearch = (event) => {
      event.preventDefault()
      setCountry(value)
    }
     
    

  return (
    <div>
      

      <form onSubmit={onSearch}>
        find countries <input value={value} onChange={handleChange} />
        <button type="submit">language</button>
      </form>


      <pre>
      <h2>  </h2>  

      <h4>Capital </h4>
        {Object.keys(capital).map((key, i) => (
        <p key={i}>
          {capital[key]}
        </p>))}
      <h4>Area </h4>
      
          {area}
        
      <h2>Languages</h2>
    
        {Object.keys(languages).map((key, i) => (
        <p key={i}>
          {languages[key]}
        </p>))}
        
        <h4>Flag </h4>
          {flag}
      
      </pre>
      
      
        </div>
        //Source: https://stackoverflow.com/questions/67368432/how-to-map-json-data-in-react-js
      
    
  )

}

export default App



   
