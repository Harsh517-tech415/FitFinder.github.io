import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { Update } from '../../App';

const Diet = () => {
  const location=useLocation()
  const {setDisplayAppBar}=useContext(Update)
  useEffect(() => {
    if (location.pathname === "/gym/gymdiet") {
      setDisplayAppBar("none");
    }
    // console.log()
  }, []);
  return (
    <div>Diet</div>
  )
}

export default Diet