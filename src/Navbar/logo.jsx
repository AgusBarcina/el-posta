import React from "react";
import"./NavBar.css";
const Logo = () => {
      const Logo= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmB_yYU4CYzZ812uRN9sfmtOtaUAnxkamDtg&s";


return (
    
      <div>
        <img src={Logo} alt="Logo" className="logo" />
      </div>
   
  );
};

export default Logo;