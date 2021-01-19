import React from "react";
import Search from "./Search";

function Header( {setSearched, searched}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searched={searched} setSearched={setSearched} />
    </header>
  );
}

export default Header;
