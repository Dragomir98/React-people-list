import Navbar from "./components/Navbar";
import PeopleList from "./components/PeopleList";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddPerson from "./components/AddPerson";
import About from "./components/About";

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const getPeople = async () => {
      const peopleFromServer = await fetchPeople();
      setPeople(peopleFromServer);
    }
    getPeople();
  }, []);

  //fetch people
  const fetchPeople = async() => {
    const result = await fetch('http://localhost:5000/people');
    const data = await result.json();
    
    return data;
  }

  const addPerson = async(person) => {
    const result = await fetch('http://localhost:5000/people', {
        method: 'POST',
        headers: {
          'Content-type':'application/json'
        },
        body: JSON.stringify(person)
        });
    const newPerson = await result.json();
    setPeople([...people, newPerson]);
  }

  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/people/${id}`, {
      method: 'DELETE'
    });

    setPeople(people.filter((person) => person.id !== id));
  }

  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <PeopleList people={people} 
            handleDelete={handleDelete}/>
          </Route>
          <Route path="/add">
            <AddPerson addPerson={addPerson}/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
        </Switch>
        </Router>
      
    </div>
  );
}

export default App;
