function Navbar() {
    return (
    <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">PIZZA STORE</span>
          <form class="form-inline">
            <button class="btn btn-outline-primary" type="button">Register/login</button>
            <button class="btn btn-outline-warning" type="button">Cart</button>
         </form> 
      </nav>
    );
}

export default Navbar;