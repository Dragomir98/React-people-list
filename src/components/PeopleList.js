import Person from './Person.js';


const PeopleList = ({ people, handleDelete }) => {

    return ( 
        <>
        {<div className="item-container">
            {people.map((person) => (
                <Person key={person.id} 
                person={person} 
                handleDelete={handleDelete}/>
            ))}
        </div>}
        </>
        
     );
}
 
export default PeopleList;