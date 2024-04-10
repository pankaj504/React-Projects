import React from 'react'
import './PageThree.css'
import Signup from '../leftsection/Profile/SignUpPage/Signup'
const PageThree = () => {
  return (
    <>
      <div className="thirdpage">
        <Signup idSuffix="page-three" />
        <p>Or Press RETURN</p>
      </div>
    </>
  )
}
export default PageThree;
