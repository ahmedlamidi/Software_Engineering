import React from 'react';
import './TeacherCourses.css';
import { MdAccountBalance } from "react-icons/md";

const TeacherCourses: React.FC = () => {
    // Generate time blocks from 8 AM to 7 PM
    const timeBlocks = [];
    for (let hour = 8; hour <= 19; hour++) {
        const time = `${hour % 12 === 0 ? 12 : hour % 12}:00 ${hour < 12 ? 'AM' : 'PM'}`;
        timeBlocks.push(time);
    }

    // Sample data for the courses
    const scheduleData = [
        { time: '8:00 AM - 9:00 AM', monday: { crn: 'COP1001', room: 'CHE101' }, tuesday: null },
        { time: '9:00 AM - 10:00 AM', monday: null, tuesday: { crn: 'CEN1107', room: 'BSN203' } },
        { time: '10:00 AM - 11:00 AM', monday: null, tuesday: null },
        { time: '11:00 AM - 12:00 PM', monday: null, tuesday: null },
        { time: '12:00 PM - 1:00 PM', monday: null, tuesday: { crn: 'COP2005', room: 'ENG505' } },
        { time: '1:00 PM - 2:00 PM', monday: null, tuesday: null },
        { time: '2:00 PM - 3:00 PM', monday: { crn: 'ENG4930', room: 'BSN204' }, tuesday: null },
        { time: '3:00 PM - 4:00 PM', monday: null, tuesday: null },
        { time: '4:00 PM - 5:00 PM', monday: null, tuesday: null },
        { time: '5:00 PM - 6:00 PM', monday: null, tuesday: { crn: 'IDS4370', room: 'IDH204' } },
        { time: '6:00 PM - 7:00 PM', monday: null, tuesday: null },
    ];

    return (
        <div className="bg-light">
            <div className="header-container">
                <header className="text-white py-4">
                    <div className="ahmed-left h3 font-weight-bold">
                        <MdAccountBalance />
                        Welcome Home, Teacher
                    </div>
                </header>
            </div>

            <div className="body-container">
                <div className="summary-container">
                    <h2>Teacher Course Schedule</h2>
                    <div className="schedule-grid">
                        <div className="grid-header">Time</div>
                        <div className="grid-header">Monday</div>
                        <div className="grid-header">Tuesday</div>
                        <div className="grid-header">Wednesday</div>
                        <div className="grid-header">Thursday</div>
                        <div className="grid-header">Friday</div>

                        {timeBlocks.map((time, index) => {
                            const row = scheduleData[index] || {};
                            const mondayClass = row.monday ? `${row.monday.crn}<br/>Room: ${row.monday.room}` : 'No Class';
                            const tuesdayClass = row.tuesday ? `${row.tuesday.crn}<br/>Room: ${row.tuesday.room}` : 'No Class';
                            const wednesdayClass = row.monday ? `${row.monday.crn}<br/>Room: ${row.monday.room}` : 'No Class'; // Repeat Monday classes
                            const thursdayClass = row.tuesday ? `${row.tuesday.crn}<br/>Room: ${row.tuesday.room}` : 'No Class'; // Repeat Tuesday classes

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

export default TeacherCourses;
