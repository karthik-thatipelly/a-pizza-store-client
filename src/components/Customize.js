let vegToppings = ['blackolives', 'tomato','mushrooms', 'babycorn', 'greenchillies']
let nvegToppings = ['chickenchunks', 'chickensalami', 'bbqchicken']
function Customize() {
    return (
        <div className='container p-5 '>

            <h1>MAKE YOUR PIZZA</h1>
            <p>-------*-------</p>
            <form method="post" action=" ">
                <div class="form-group row ">
                    <label for="size" class="col-4 col-form-label">Size</label>
                    <select class="form-control col-5" id="size">
                        <option>Select One</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                </div>
                <div class="form-group row">
                    <label for="crusts" class="col-4 col-form-label">Crusts</label>
                    <select class="form-control col-5" id="crusts">
                        <option>Select One</option>
                        <option>Pan</option>
                        <option>Thin Crust</option>
                        <option>Cheeseburst</option>
                    </select>
                </div>
                <div class="form-group row">
                    <label for="cheese" class="col-4 col-form-label">Cheese</label>
                    <select class="form-control col-5" id="cheese">
                        <option>Select One</option>
                        <option>Parmesan</option>
                        <option>Mozzarella</option>
                        <option>Pecorino</option>
                        <option>Asiago</option>
                    </select>
                </div>
                <div class="form-group row">
                    <div class="col-4">Veg-Toppings</div>
                    <div class="col-1">
                       {vegToppings.map(vtopping => {
                           return ( <div class="form-check">
                            <input class="form-check-input" type="checkbox" id={vtopping}/>
                                <label class="form-check-label" for={vtopping}>
                                    {vtopping}
                                </label>
                        </div>)
                       })}
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-4">NonVeg-Toppings</div>
                    <div class="col-1">
                       {nvegToppings.map(nvtopping => {
                           return ( <div class="form-check">
                            <input class="form-check-input" type="checkbox" id={nvtopping}/>
                                <label class="form-check-label" for={nvtopping}>
                                   {nvtopping}  
                                </label>
                        </div>)
                       })}
                    </div>
                </div>
            </form>

            <button className="btn btn-warning" type="submit">Add to cart</button>



        </div>
    );
}

export default Customize;