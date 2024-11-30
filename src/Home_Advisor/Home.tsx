import "./Home.css"
import React, { useState, useEffect} from 'react';
import { MdAccountBalance } from "react-icons/md";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

function HomeAdvisor() {


    const [currentTime, setCurrentTime] = useState(new Date());

    const HandleSubmit = () =>{
        navigate('/add_course');
    }
    

 
    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId); 
    }, []);

    const advisorName = "John Doe"; // Replace with dynamic data if needed
    const date = currentTime.toLocaleDateString();
    const time = currentTime.toLocaleTimeString();
    return (
  <div className="bg-light">
    {/* Header Section */}
    <div className="header-container">
      <header className="text-white py-4">
        <div className="ahmed-left h3 font-weight-bold"><MdAccountBalance />
        Welcome Home, advisor {advisorName}</div>
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
                <h2>Advisor Summary</h2>
            </div>

            
            <button className = 'custom-box' onClick={HandleSubmit}>
                <h2>Add courses</h2>
            </button>

           
            <div className="custom-box">
                <h2>Drop courses</h2>
            </div>

            
            <div className="custom-box">
                <h2>What If</h2>
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
export default HomeAdvisor;