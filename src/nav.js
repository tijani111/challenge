import React from 'react';
const Navbar=()=>{
    const NavItems=["Home","About Us","Contact Us"];
    const navbar=NavItems.map(item=><li>{item}</li>) ;
    return <ul> {navbar}</ul> ;
}
export default Navbar;