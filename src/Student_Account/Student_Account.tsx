import React from 'react';
import './Student_Account.css';

const StudentAccount: React.FC = () => {
    return (
        <div className="container-home">
            {/* Header Section */}
            <div className="header-container">
                <div className="ahmed-left h3 font-weight-bold">Account Information</div>
                <div className="ahmed-right small">Manage your account details below</div>
            </div>

            {/* Body Section */}
            <div className="body-container">
                <div className="custom-container">
                    <div className="custom-box">
                        <h2>Username:</h2>
                        <p>student_username</p>
                    </div>

                    <div className="custom-box">
                        <h2>Password:</h2>
                        <p>********</p>
                        <button className="submit">Change Password</button>
                    </div>

                    <div className="custom-box">
                        <h2>Email:</h2>
                        <p>student_email@example.com</p>
                    </div>

                    <div className="custom-box">
                        <h2>Other Settings</h2>
                        <p>Manage notifications, preferences, etc.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentAccount;
