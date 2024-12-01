import "./Home.css"
import React, { useState, useEffect } from 'react';
import { MdAccountBalance } from "react-icons/md";
import './StudentSummary.css';

const StudentSummary: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<Date>(new Date());
    const [student, setStudent] = useState({
        name: "John Doe",
        department: "Engineering",
        grade: "Junior",
        gpa: 3.5,
        expectedGraduation: "2025",
        creditsCompleted: 60,
        transferCredits: 15,
        remainingCredits: 30,
        unmetRequirements: ["Calculus II", "Data Structures"],
        courses: ["Mathematics", "Chemistry", "Physics"]
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const date = currentTime.toLocaleDateString();
    const time = currentTime.toLocaleTimeString();

    const totalCredits = student.creditsCompleted + student.remainingCredits;

    return (
        <div className="bg-light">
            {/* Header Section */}
            <div className="header-container">
                <header className="text-white py-4">
                    <div className="ahmed-left h3 font-weight-bold">
                        <MdAccountBalance />
                        Welcome Home, Student {student.name}
                    </div>
                    <div className="ahmed-right small">{date}</div>
                    <div className="ahmed-right small">{time}</div>
                </header>
            </div>

            {/* Main Content */}
            <div className="body-container">
                <div className="summary-container">
                    <h2>Student Summary</h2>
                    <p><strong>Department:</strong> {student.department}</p>
                    <p><strong>Grade:</strong> {student.grade}</p>
                    <p><strong>GPA:</strong> {student.gpa}</p>
                    <p><strong>Expected Graduation:</strong> {student.expectedGraduation}</p>
                    <p><strong>Credits Completed:</strong> {student.creditsCompleted}</p>
                    <p><strong>Transfer Credits:</strong> {student.transferCredits}</p>
                    <p><strong>Remaining Credits:</strong> {student.remainingCredits}</p>
                    
                    {/* Progress Bar */}
                    <div className="progress-bar">
                        <div 
                            className="progress" 
                            style={{ width: `${(student.creditsCompleted / totalCredits) * 100}%` }}
                        ></div>
                    </div>
                    <p>{((student.creditsCompleted / totalCredits) * 100).toFixed(2)}% Completed</p>

                    <h3>Unmet Class Requirements:</h3>
                    <ul>
                        {student.unmetRequirements.map((requirement, index) => (
                            <li key={index}>{requirement}</li>
                        ))}
                    </ul>

                    <h3>Enrolled Courses:</h3>
                    <ul>
                        {student.courses.map((course, index) => (
                            <li key={index}>{course}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default StudentSummary;