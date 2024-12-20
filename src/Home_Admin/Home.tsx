import "./Home.css"
import React, { useState, useEffect} from 'react';
import { MdAccountBalance } from "react-icons/md";

function HomeAdmin() {


    const [currentTime, setCurrentTime] = useState(new Date());

 
    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId); 
    }, []);

    const adminName = "John Doe"; // Replace with dynamic data if needed
    const date = currentTime.toLocaleDateString();
    const time = currentTime.toLocaleTimeString();
    return (
  <div className="bg-light">
    {/* Header Section */}
    <div className="header-container">
      <header className="text-white py-4">
        <div className="ahmed-left h3 font-weight-bold"><MdAccountBalance />
        Welcome Home, Admin {adminName}</div>
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
                <h2>Summary</h2>
            </div>
            <div className="custom-box">
                <h2>Create courses</h2>
            </div>

            
            <div className="custom-box">
                <h2>Create advisors</h2>
            </div>

           
            <div className="custom-box">
                <h2>System Logs</h2>
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
export default HomeAdmin;