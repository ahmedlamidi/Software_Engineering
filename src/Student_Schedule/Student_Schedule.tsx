import React from 'react';
import './Student_Schedule.css';
import { MdAccountBalance } from "react-icons/md";
import { useState, useEffect} from 'react';

const StudentSchedule: React.FC = () => {
    // Generate time blocks from 8 AM to 7 PM
    const timeBlocks = [];
    for (let hour = 8; hour <= 19; hour++) {
        const time = `${hour % 12 === 0 ? 12 : hour % 12}:00 ${hour < 12 ? 'AM' : 'PM'}`;
        timeBlocks.push(time);
    }

    // Sample data for the student's schedule
    const scheduleData = [
        { time: '8:00 AM - 9:00 AM', monday: { course: 'JPN2221', room: 'LANG101' }, tuesday: { course: 'JPN2221', room: 'LANG101' } },
        { time: '8:00 AM - 9:00 AM', wednesday: { course: 'JPN2221', room: 'LANG101' }, thursday: { course: 'JPN2221', room: 'LANG101' } },
    
        { time: '9:00 AM - 10:00 AM', monday: { course: 'COT4400', room: 'COMP202' }, tuesday: null },
        { time: '9:00 AM - 10:00 AM', wednesday: { course: 'COT4400', room: 'COMP202' }, thursday: null },
    
        { time: '10:00 AM - 11:00 AM', monday: null, tuesday: { course: 'ENC3246', room: 'WRIT303' } },
        { time: '10:00 AM - 11:00 AM', wednesday: null, thursday: { course: 'ENC3246', room: 'WRIT303' } },
    
        { time: '12:00 PM - 1:00 PM', monday: { course: 'COP4620', room: 'CODE405' }, tuesday: null },
        { time: '12:00 PM - 1:00 PM', wednesday: { course: 'COP4620', room: 'CODE405' }, thursday: null },
    
        { time: '1:00 PM - 2:00 PM', monday: null, tuesday: { course: 'COP4365', room: 'SOFT506' } },
        { time: '1:00 PM - 2:00 PM', wednesday: null, thursday: { course: 'COP4365', room: 'SOFT506' } },
    ];
    

    const studentName = "John Doe"; // Replace with dynamic data if needed
    const [currentTime, setCurrentTime] = useState(new Date());
    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId); 
    }, []);
    const date = currentTime.toLocaleDateString();
    const time = currentTime.toLocaleTimeString();

    return (
        <div className="bg-light">
            <div className="header-container">
                <header className="text-white py-4">
                    <div className="ahmed-left h3 font-weight-bold">
                        <MdAccountBalance />
                        Welcome Home, Student {studentName}
                        <div className="ahmed-right small">{date}</div>
                        <div className="ahmed-right small">{time}</div>
                    </div>
                </header>
            </div>

            <div className="body-container">
                <div className="summary-container">
                    <h2>Student Schedule</h2>
                    <div className="schedule-grid">
                        <div className="grid-header">Time</div>
                        <div className="grid-header">Monday</div>
                        <div className="grid-header">Tuesday</div>
                        <div className="grid-header">Wednesday</div>
                        <div className="grid-header">Thursday</div>
                        <div className="grid-header">Friday</div>

                        {timeBlocks.map((time, index) => {
                            const row = scheduleData[index] || {};
                            const mondayClass = row.monday ? `${row.monday.course}<br/>Room: ${row.monday.room}` : 'No Class';
                            const tuesdayClass = row.tuesday ? `${row.tuesday.course}<br/>Room: ${row.tuesday.room}` : 'No Class';
                            const wednesdayClass = row.monday ? `${row.monday.course}<br/>Room: ${row.monday.room}` : 'No Class'; // Repeat Monday classes
                            const thursdayClass = row.tuesday ? `${row.tuesday.course}<br/>Room: ${row.tuesday.room}` : 'No Class'; // Repeat Tuesday classes

                            return (
                                <React.Fragment key={index}>
                                    <div className="grid-cell">{time}</div>
                                    <div
                                        className={`grid-cell ${row.monday ? 'shaded' : ''}`}
                                        dangerouslySetInnerHTML={{ __html: mondayClass }}
                                    ></div>
                                    <div
                                        className={`grid-cell ${row.tuesday ? 'shaded' : ''}`}
                                        dangerouslySetInnerHTML={{ __html: tuesdayClass }}
                                    ></div>
                                    <div
                                        className={`grid-cell ${row.monday ? 'shaded' : ''}`}
                                        dangerouslySetInnerHTML={{ __html: wednesdayClass }}
                                    ></div>
                                    <div
                                        className={`grid-cell ${row.tuesday ? 'shaded' : ''}`}
                                        dangerouslySetInnerHTML={{ __html: thursdayClass }}
                                    ></div>
                                    <div className="grid-cell">No Class</div>
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentSchedule;
