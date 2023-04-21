import React from 'react'
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <>
<nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid">
   <Link class="navbar-brand" style={{fontWeight: 'bold'}} to="/">Portfolio</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
         <Link class="nav-link active" style={{fontWeight: 'bold'}} aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
         <Link class="nav-link active" style={{fontWeight: 'bold'}} aria-current="page" to="/about">About</Link>
        </li>
        <li class="nav-item">
         <Link class="nav-link active" style={{fontWeight: 'bold'}} aria-current="page" to="/contact">Contact</Link>
        </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar
