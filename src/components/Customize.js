function Customize() {
    return (
        <div className='container p-5'>
         <h1>MAKE YOUR PIZZA</h1>
         <p>-------*-------</p>
         <div>
         <h3>TYPE</h3>
         <input type="checkbox" id="veg" name="veg"/>
         <label for="veg">Veg Supreme Pizza</label>
         <input type="checkbox" id="nonveg" name="veg"/>
         <label for="nonveg">nonVeg Supreme Pizza</label>

         </div>
         <div>
         <h3>Bases/crusts</h3>
         <input type="checkbox" id="thin" name="thin"/>
         <label for="thin">thin crust</label>
         <input type="checkbox" id="cheeseburst" name="cheeseburst"/>
         <label for="cheeseburst">cheeseburst</label>
         <input type="checkbox" id="pan" name="pan"/>
         <label for="pan">pan</label>

         </div>
         <div>
         <h3>Toppings</h3>
         <input type="checkbox" id="Blackolives" name="Blackolives"/>
         <label for="Blackolives">Blackolives crust</label>
         <input type="checkbox" id="Tomato" name="Tomato"/>
         <label for="Tomato">Tomato</label>
         <input type="checkbox" id="Mushroom" name="Mushroom"/>
         <label for="Mushroom">Mushroom</label>

         <input type="checkbox" id="Blackolives" name="Blackolives"/>
         <label for="Blackolives">Blackolives crust</label>
         <input type="checkbox" id="Tomato" name="Tomato"/>
         <label for="Tomato">Tomato</label>
         <input type="checkbox" id="Mushroom" name="Mushroom"/>
         <label for="Mushroom">Mushroom</label>

         </div>

         <button className="btn">Add to cart</button>
         
         

      </div>
    );
}

export default Customize;