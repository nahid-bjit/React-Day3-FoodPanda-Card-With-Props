import "./nav.css"
import LoginButton from "./login-button";
import SignupButton from "./signup-button";

const Nav = () => {
    return (
        <>

            <nav>
                <div className="nav-parent">
                    <div>
                        <img src="../src/assets/logo.jpg" alt="" />
                    </div>
                    <div className="buttons">
                        < LoginButton />
                        < SignupButton />
                    </div>
                </div>
            </nav>


        </>
    );
};

export default Nav