const Person = ({person, handleDelete }) => {
    return ( 
        <div className="item" key={person.id}>
            <div className="item-left">
                <p>First name: {person.firstName}</p>
                <p>Last name: {person.lastName}</p>
                <p>Email: {person.email}</p>
            </div>
            <div className="item-right">
                <button className="deleteItem" onClick={() => handleDelete(person.id)}>Delete</button>
            </div>    
        </div>
     );
}
 
export default Person;