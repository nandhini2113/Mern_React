import React from 'react'

function Contact() {
    return (

        <div className='contact'>

            <div className="contact-container">


                <form action="https://api.web3forms.com/submit"
                    method="POST" className='left-container'>
                    <input
                        type="hidden"
                        name="access_key"
                        value="0480846b-a030-4aa1-98c1-f705eaedddf8"
                    />
                    <div className='left-title'>
                    <h2>Contact Us</h2>
                    <hr />
                    </div>
                    <input type="text" name='text' placeholder='Enter Name' required /><br />
                    <input type="email" name='email' placeholder='Enter Email' required /><br />
                    <textarea name='message' placeholder='Enter Message'></textarea>
                    <button type="submit" className='contact-btn'>SUBMIT</button>

                </form>
                <div className="right-container">
                    <div id="observablehq-chart-df9935ce"></div>
                </div>
            </div>
        </div>

    )
}

export default Contact
