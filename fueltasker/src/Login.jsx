import React, { useState, useEffect  } from "react";
import { useNavigate } from 'react-router-dom';
import "./Login.css";
import registerImage from './images/register.png';
import login from './images/login1.png';
import sidelogo from './images/sidelogo.png';
import fulllogo from './images/fulllogo.png';

export const Login = () => {
    const navigate = useNavigate();

    // State for user input fields
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // State for error message
    const [errorMessage, setErrorMessage] = useState("");

 // Function to handle Enter key press in the form
 const handleEnterKeyPress = (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default Enter key behavior
        handleLogin(event); // Trigger the login process
    }
};

// Add event listener for Enter key press
useEffect(() => {
    window.addEventListener('keydown', handleEnterKeyPress);

    // Clean up the event listener
    return () => {
        window.removeEventListener('keydown', handleEnterKeyPress);
    };
}, [email, password]); // Depend on email and password so the function gets updated values

    
    // Function to handle user login
    const handleLogin = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        
        // Check for empty fields
        if (!email.trim() || !password.trim()) {
            setErrorMessage("Please enter both email and password.");
            return;
        }

        try {
            // Fetch all users from the API
            const response = await fetch("http://localhost:8080/fueltasker/getAllUsers");
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const users = await response.json();

            // Check if entered credentials match any user
            const user = users.find(user => {
                const userEmail = user.eMail.trim().toLowerCase();
                const userPassword = user.pWord.trim();
                console.log(`Comparing: ${userEmail} with ${email.trim().toLowerCase()} and ${userPassword} with ${password.trim()}`);
                return userEmail === email.trim().toLowerCase() && userPassword === password.trim();
            });

            if (user) {
                // Credentials are correct
                navigate('/dashboard');
            } else {
                // Credentials are incorrect
                setErrorMessage("Incorrect email or password.");
            }
        } catch (error) {
            console.error("Error during login:", error);
            setErrorMessage("An error occurred while logging in.");
        }
    };

    // Redirect functions
    const handleRegisterRedirect = () => navigate('/register');
    const handleHomeClick = () => navigate('/');
    const handleAboutUsRedirect = () => navigate('/aboutus');



    return (
        <div className="login">
            <div className="div">
                <div className="overlap">
                    <img className="landscape" alt="Landscape" src={sidelogo} />
                    <button className="text-wrapper"onClick={handleHomeClick}>Home</button>
                    <button className="text-wrapper-2"onClick={handleAboutUsRedirect}>About Us</button>
                    <button className="group"onClick={handleRegisterRedirect}>
                        <div className="group-2">
                            <div className="text-wrapper-3">Register</div>
                            <img className="register" alt="Register" src={registerImage} />
                        </div>
                    </button>
                    <div className="overlap-group-wrapper">
                        <div className="overlap-group">
                            <img className="img" alt="Login" src={login} />
                            <div className="text-wrapper-4">Login</div>
                        </div>
                    </div>
                </div>
                <div className="overlap-2">
                    <img
                        className="black-red-modern-car"
                        alt="Black red modern car"
                        src={fulllogo}
                    />
                    <div className="overlap-3">
                        <div className="rectangle" />
                        <div className="rectangle-2" />
                        <div className="overlap-wrapper">
                            <button type = "submit" className="div-wrapper"onClick={handleLogin}>
                                <div className="text-wrapper-5">Login</div>
                            </button>
                            {errorMessage && <div className="error-message">{errorMessage}</div>}
                        </div>
                        <form onSubmit={handleLogin}>
                        <input
                            type="email"
                            className="rectangle-3"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            className="rectangle-4"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="group-3">
                        <button className="overlap-4" onClick={handleRegisterRedirect}>
                            <div className="rectangle-5" />
                            <div className="text-wrapper-6">Register</div>
                        </button>   
                    </div>
                        </form>
                    </div>
                    <p className="LOG-IN">
                        <span className="span">LOG </span>
                        <span className="text-wrapper-7">IN</span>
                    </p>
                </div>
            </div>
        </div>
    );
};
