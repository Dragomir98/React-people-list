import { useState } from "react";
import { Link } from "react-router-dom";

const AddPerson = ({ addPerson }) => {
    const [firstName, setFirstname] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');

    const submitInputs = (event) => {
        event.preventDefault();
        if(!firstName && !lastName && !email) {
            alert('Fields must be filled with valid information!');
            return;
        }

        addPerson({firstName, lastName, email});   
    }

    const resetForm = () => {
        setFirstname('');
        setLastname('');
        setEmail('');
    }

    return ( 
        <div className="addNew">
            <h1>Add person</h1>
            <form className="addForm" onSubmit={submitInputs}>

                    <label>First name:</label>
                    <input type="text" placeholder="First name..." value={firstName}
                    onChange={(event) => setFirstname(event.target.value)}/>

                    <label>Last name:</label>
                    <input type="text" placeholder="Last name..." value={lastName}
                    onChange={(event) => setLastname(event.target.value)}/>

                    <label>Email:</label>
                    <input type="email" placeholder="Email..." value={email}
                    onChange={(event) => setEmail(event.target.value)}/>

                <input type="submit" className="btnAdd" value="Add"/>
            </form>
            <div className="buttons">
                <button onClick={resetForm}>Reset</button>
                <button className="btnBack"><Link to="/" className="routerLink">Back</Link></button>         
            </div>
        </div>
     );
}
 
export default AddPerson;