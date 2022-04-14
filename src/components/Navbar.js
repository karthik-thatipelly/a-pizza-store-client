function Navbar() {
    return (
    <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">PIZZA STORE</span>
          <form className="form-inline">
            <button className="btn btn-primary m-2" type="button">Register/login</button>
            <button className="btn btn-warning m-2" type="button">Cart</button>
         </form> 
      </nav>
    );
}

export default Navbar;