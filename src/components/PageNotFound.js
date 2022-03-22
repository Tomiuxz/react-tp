import React from 'react'
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  return <>
    <h1>ERROR 404</h1>
    <button className='btn btn-warning'>
      <Link to="/">
        Volver al Home
      </Link>
    </button>
  </>

};
