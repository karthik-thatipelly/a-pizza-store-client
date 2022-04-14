function Customize() {
    return (
        <div className='container p-5 '>
            
            <h1>MAKE YOUR PIZZA</h1>
            <p>-------*-------</p>
           <form >
            <div class="form-group row">
            <label for="size" class="col-4 col-form-label">Size</label>
                <select class="form-control col-8" id="size">
                    <option>Select One</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
            </div>
            <div class="form-group row">
            <label for="crusts" class="col-4 col-form-label">Crusts</label>
                <select class="form-control col-8" id="crusts">
                    <option>Select One</option>
                    <option>Pan</option>
                    <option>Thin Crust</option>
                    <option>Cheeseburst</option>
                </select>
            </div>
            <div class="form-group row">
            <label for="cheese" class="col-4 col-form-label">Cheese</label>
                <select class="form-control col-8" id="cheese">
                    <option>Select One</option>
                    <option>Parmesan</option>
                    <option>Mozzarella</option>
                    <option>Pecorino</option>
                    <option>Asiago</option>
                </select>
            </div>
            <div class="form-group row">
            <label for="vegtoppings" class="col-4 col-form-label">Veg-Toppings</label>
                <select class="form-control col-8" id="vegtoppings">
                    <option>Select One</option>
                    <option>Black Olives</option>
                    <option>Tomato</option>
                    <option>Mushroom</option>
                    <option>Babycorn</option>
                    <option>Green Chillies</option>
                </select>
            </div>
            <div class="form-group row">
            <label for="nonvegtoppings" class="col-4 col-form-label">NonVeg-Toppings</label>
                <select class="form-control col-8" id="nonvegtoppings">
                    <option>Select One</option>
                    <option>Chicken Chunks</option>
                    <option>BBQ chicken</option>
                    <option>Chicken Salami</option>
                </select>
            </div>
            </form>

            <button className="btn btn-warning">Add to cart</button>



        </div>
    );
}

export default Customize;