import React from 'react'
import './Left.css'
const Left = () => {
    return (
        <>
            <div className='left-bar'>
                <div className="left-content">
                    <p>dribbble</p>
                    <h3>Discover the world's top Designers & Creatives.</h3>
                    <div className="img">  <img src="/3d-illustration-trend.jpg" alt="" /></div>

                    <footer>Art by <span>Peter Tarke</span></footer>
                </div>
                <div className="left2">
                    <form action="" id='form' name='forms'>

                        <h2>Sign up to Dribble</h2>
                        <div className="input-bar">
                            <div>
                                <label htmlFor="name">Name</label>
                                <input type="text" name="names" id="name" autoComplete='current-password' />
                            </div>
                            <div>
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username1" id="username" autoComplete='current-password' />
                            </div>

                        </div>
                        <div className='input2-bar'>
                            <label htmlFor="email">Email address
                                <input type="text" name="email1" id="email" autoComplete='current-password' /></label>
                            <label htmlFor="password">Password
                                <input type="text" name="pass" id="password" placeholder='6+ characters'  autoComplete='current-password'/></label>

                        </div>
                        <div className='check'>
                            <input type="checkbox"  name='check' id='boxcheck' autoComplete='current-password'/>
                            <p> Creating an account means you're okay with our <a href="">Terms of Services, Privacy Policy, </a> and our default <a href="">Notification Settings.</a></p>
                        </div>
                        <div className="last">
                            <button>Create Account</button>
                            <p>This Site is protected by mCAPTCHAand the Google <a href="">Privacy Policy </a>and <a href="">Terms of Services</a> apply.</p>
                        </div>

                    </form>


                </div>


            </div>

        </>
    )
}

export default Left
