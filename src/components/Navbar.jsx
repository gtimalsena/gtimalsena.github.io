import logo from "../assets/pathibhara_logo.jpeg";
const Navbar = () => {
  return (
    <header className="w-full bg-orange">
      <div className="brandogo">
        <img src={logo} alt="Pathibhara Gas" className="w-28" />
      </div>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>Product</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
};
export default Navbar;
