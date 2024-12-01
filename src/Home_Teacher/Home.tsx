import "./Home.css"
import React, { useState, useEffect} from 'react';
import { MdAccountBalance } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function HomeTeacher() {
  const navigate = useNavigate();

    const [currentTime, setCurrentTime] = useState(new Date());

 
    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId); 
    }, []);

    const handleScheduleClick = () => {
      navigate('/teacher-courses');
    };

    const teacherName = "John Doe"; // Replace with dynamic data if needed
    const date = currentTime.toLocaleDateString();
    const time = currentTime.toLocaleTimeString();
    return (
  <div className="bg-light">
    {/* Header Section */}
    <div className="header-container">
      <header className="text-white py-4">
        <div className="ahmed-left h3 font-weight-bold"><MdAccountBalance />
        Welcome Home, Teacher {teacherName}</div>
        <div className="ahmed-right small">{date}</div>
        <div className="ahmed-right small">{time}</div>
      </header>
    </div>

    {/* Main Content */}
    <div className="body-container">
      <div className=" ">
        <div className="">
        <div className="custom-container">
            
            <div className="custom-box">
                <h2>Teacher Summary</h2>
            </div>

            
            <div className="custom-box" onClick={handleScheduleClick}>
                <h2>Teacher Courses</h2>
            </div>

           
            
            
            </div>

        </div>
        <div className="text-center mt-4">
          
        </div>
      </div>
    </div>
  </div>
);

};
export default HomeTeacher;