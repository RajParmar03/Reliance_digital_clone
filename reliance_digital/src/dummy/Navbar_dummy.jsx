import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between"}}>
        <Link to="/kitchen">kitchen</Link>
        <Link to="/mobilesandtablets">mobilesandtablets</Link>
        <Link to="/televisions">televisions</Link>
        <Link to="/headphones">headphones</Link>
        <Link to="/homeappliances">homeappliances</Link>
        <Link to="/computers">computers</Link>
        <Link to="/cameras">cameras</Link>
        <Link to="/personalcare">personalcare</Link>
        <Link to="/accessories">accessories</Link>
    </div>
  )
}

export default Navbar;