import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <>
      <Link href="/">Home</Link>|<Link href="/chakra">Chakra</Link>|
      <Link href="/forms">Forms</Link>
      <hr />
    </>
  );
};

export default NavBar;
