//import "./Home.css";
import React, { useState, useEffect } from "react";
import { MdAccountBalance } from "react-icons/md";
import "./StudentSummary.css";

const StudentSummary: React.FC = () => {
    const [currentTime, setCurrentTime] = useState<Date>(new Date());
    const [student, setStudent] = useState({
        name: "John Doe",
        department: "Engineering",
        grade: "Junior",
        gpa: 3.5,
        expectedGraduation: "2025",
        creditsCompleted: 75,
        transferCredits: 15,
        remainingCredits: 45,
        unmetRequirements: ["Calculus II", "Data Structures"],
        courses: ["Calculus I", "Chemistry", "Physics"],
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
                <header className="text-white py-4 d-flex justify-content-between align-items-center">
                    <h1 className="h3 font-weight-bold d-flex align-items-center">
                        <MdAccountBalance className="mr-2" />
                        Welcome, {student.name}
                    </h1>
                    <div>
                        <div className="small">{date}</div>
                        <div className="small">{time}</div>
                    </div>
                </header>
            </div>

            {/* Main Content */}
            <div className="body-container">
                <div className="summary-container">
                    <h2 className="mb-4">Student Summary</h2>

                    {/* Summary Details */}
                    <div className="details-grid">
                        <div className="detail-card">
                            <strong>Department:</strong>
                            <span>{student.department}</span>
                        </div>
                        <div className="detail-card">
                            <strong>Grade:</strong>
                            <span>{student.grade}</span>
                        </div>
                        <div className="detail-card">
                            <strong>GPA:</strong>
                            <span>{student.gpa}</span>
                        </div>
                        <div className="detail-card">
                            <strong>Expected Graduation:</strong>
                            <span>{student.expectedGraduation}</span>
                        </div>
                        <div className="detail-card">
                            <strong>Credits Completed:</strong>
                            <span>{student.creditsCompleted}</span>
                        </div>
                        <div className="detail-card">
                            <strong>Transfer Credits:</strong>
                            <span>{student.transferCredits}</span>
                        </div>
                        <div className="detail-card">
                            <strong>Remaining Credits:</strong>
                            <span>{student.remainingCredits}</span>
                        </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="progress-container">
                        <p className="mb-1">Progress</p>
                        <div className="progress-bar">
                            <div
                                className="progress"
                                style={{
                                    width: `${(student.creditsCompleted / totalCredits) * 100}%`,
                                }}
                            ></div>
                        </div>
                        <p>{((student.creditsCompleted / totalCredits) * 100).toFixed(2)}% Completed</p>
                    </div>

                    {/* Unmet Requirements */}
                    <div className="section">
                        <h3>Unmet Class Requirements</h3>
                        <ul>
                            {student.unmetRequirements.map((requirement, index) => (
                                <li key={index}>{requirement}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Enrolled Courses */}
                    <div className="section">
                        <h3>Enrolled Courses</h3>
                        <ul>
                            {student.courses.map((course, index) => (
                                <li key={index}>{course}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentSummary;
