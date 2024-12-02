import React, { useState } from 'react';
import './Student_Account.css';
import { MdAccountBalance } from "react-icons/md";

const StudentAccount: React.FC = () => {
    const currentTime = new Date();
    const date = currentTime.toLocaleDateString();
    const time = currentTime.toLocaleTimeString();

    // State for user information
    const [username, setUsername] = useState('student_username');
    const [password, setPassword] = useState('********');
    const [email, setEmail] = useState('student_email@example.com');

    // State to track edit mode
    const [isEditing, setIsEditing] = useState(false);

    // State to track password visibility
    const [showPassword, setShowPassword] = useState(false);

    // Handlers for input changes
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    // Toggle between edit and view modes
    const toggleEditMode = () => {
        setIsEditing(!isEditing);
    };

    // Toggle password visibility
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="container-home">
            {/* Static Header Section */}
            <div className="header-container">
                <header className="text-white py-4">
                    <div className="ahmed-left h3 font-weight-bold">
                        <MdAccountBalance />
                        Account
                    </div>
                    <div className="ahmed-right small">{date}</div>
                    <div className="ahmed-right small">{time}</div>
                </header>
            </div>

            {/* Body Section */}
            <div className="body-container">
                <div className="account-info">
                    <div className="info-row">
                        <label>Username:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                value={username}
                                onChange={handleUsernameChange}
                                className="editable-input"
                            />
                        ) : (
                            <span>{username}</span>
                        )}
                    </div>

                    <div className="info-row">
                        <label>Password:</label>
                        {isEditing ? (
                            <input
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={handlePasswordChange}
                                className="editable-input"
                            />
                        ) : (
                            <span>{showPassword ? password : '********'}</span>
                        )}
                    </div>

                    {/* Show Password Button Outside Edit Mode */}
                    <div className="checkbox-container">
                        <input
                            type="checkbox"
                            id="showPassword"
                            checked={showPassword}
                            onChange={toggleShowPassword}
                        />
                        <label htmlFor="showPassword">Show Password</label>
                    </div>

                    <div className="info-row">
                        <label>Email:</label>
                        {isEditing ? (
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                className="editable-input"
                            />
                        ) : (
                            <span>{email}</span>
                        )}
                    </div>

                    <button className="submit" onClick={toggleEditMode}>
                        {isEditing ? 'Save Changes' : 'Change Information'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudentAccount;
