import React from 'react';
import './signup-form.css'; // Import your CSS file
import Button from './button';

const SignupForm = () => {
    return (
        <div className='signup-section'>
            <div className="container">
                <h2 className="form-heading">Sign Up</h2>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        alert("Form Submitted!");
                    }}
                    action="#"
                    method="post"
                    className="signup-form"
                >
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input type="text" id="name" name="name" required className="form-input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input type="email" id="email" name="email" required className="form-input" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input type="password" id="password" name="password" required className="form-input" />
                    </div>
                    <div className="form-group">
                        <Button text="Register" className="btn-signup" onClick={() => alert("Register Clicked!")} />

                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignupForm;
