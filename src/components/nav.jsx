import "./nav.css"
import Button from "./button";

const Nav = () => {
    return (
        <>

            <nav>
                <div className="nav-parent">
                    <div>
                        <img src="../src/assets/logo.jpg" alt="" />
                    </div>
                    <div className="buttons">
                        <Button text="Login" className="btn-login" onClick={() => alert("Login Clicked!")} />
                        <Button text="Sign Up" className="btn-signup" onClick={() => alert("Sign Up Clicked!")} />
                    </div>
                </div>
            </nav>


        </>
    );
};

export default Nav