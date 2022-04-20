import React, {useState} from 'react';
import Axios from 'axios';

function Customize() {
    const[size, setSize] = useState("");
    const[crust, setCrust] = useState("");
    const[cheese, setCheese] = useState("");
    const [vegToppings, setVegToppings] = useState("")
    const [nonvegToppings, setNonvegToppings] = useState("");

    //form submit
    const handleCart =() => {
        Axios.post('http://localhost:3001/', {
            size: size,
            crust: crust,
            cheese: cheese,
            vegtoppings: vegToppings,
            nonvegtoppings: nonvegToppings
        }).then ((response) => {
            console.log(response);
         })
    }

    return(
        <div className="container m-auto p-5">
            <div>
                <h2>MAKE YOUR PIZZA</h2>
                <p>---------^--------</p>
            </div>
            <div>
                {/*size */}
                <label>Choose Size:   </label>
                <input type="text" 
                       onChange={(e) => {
                        setSize(e.target.value)
                        }}
                       placeholder = "Type something" 
                       className="m-3 p-2"
                 /><br />
                <p><em>(small : 100rs | medium: 125rs | large: 150rs )</em></p><br/>
                {/* crust*/}
                <label>Choose Crust:   </label>
                <input type="text" 
                       onChange={(e) => {
                        setCrust(e.target.value)
                        }}
                       placeholder = "Type something" 
                       className="m-3 p-2"
                 /><br />
                <p><em>(pan : +0rs | thincrust: +25rs | cheeseburst: +50rs )</em></p><br/>
                {/* cheese*/}
                <label>Choose Cheese:   </label>
                <input type="text" 
                       onChange={(e) => {
                        setCheese(e.target.value)
                        }}
                       placeholder = "Type something" 
                       className="m-3 p-2"
                 /><br />
                <p><em>(Mozzarella : +0rs | Asiago: +40rs | Parmesan: +40rs | Pecorino: +40rs )</em></p><br/>
                {/* Veg toppings*/}
                <label>Veg Toppings:   </label>
                <input type="text" 
                       onChange={(e) => {
                        setVegToppings(e.target.value)
                        }}
                       placeholder = "Type something" 
                       className="m-3 p-2"
                 /><br />
                <p><em>(choose any 2 [each +20rs]: blackolives, tomatoes, mushrooms, babycorn, greenchillies  )</em></p><br/>
                 {/* Veg toppings*/}
                 <label>NonVeg Toppings:   </label>
                <input type="text" 
                       onChange={(e) => {
                        setNonvegToppings(e.target.value)
                        }}
                       placeholder = "Type something" 
                       className="m-3 p-2"
                 /><br />
                <p><em>(choose any 1 [each +40rs] (optional): chickenchunks, chickensalami, bbqchicken )</em></p><br/>
                
                <button className='btn btn-warning m-2' onClick={handleCart}>Add to Cart</button>
            </div>
        </div>
    );
}

export default Customize;