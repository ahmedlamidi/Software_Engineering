import "./Home.css"
import { useState, useEffect} from 'react';
import { MdAccountBalance } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";


function HomeStudent() {
    const navigate = useNavigate();

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId); 
    }, []);

    const handleAccountClick = () => {
      navigate('/student-account'); // Navigate to the Account page
  };  

    const handleCoursesClick = () => {
      navigate('/table');
    };

    const handleSummaryClick = () => {
      navigate('/student-summary');
    };

    const handleScheduleClick = () => {
      navigate('/student-schedule'); // Correct route path
    };

    const handleLogIn = () => {
    navigate('/');
    };

    const studentName = "John Doe"; // Replace with dynamic data if needed
    const date = currentTime.toLocaleDateString();
    const time = currentTime.toLocaleTimeString();
    return (
  <div className="bg-light">
    {/* Header Section */}
    <div className="header-container">
      <header className="text-white py-4">
        <div className="ahmed-left h3 font-weight-bold" onClick={handleLogIn}><MdAccountBalance />
        Welcome Home, Student {studentName}</div>
        <div className="ahmed-right">
          <MdAccountCircle 
              className="account-icon" 
              size={30} 
              onClick={handleAccountClick} 
              style={{ cursor: 'pointer' }}
          />
        </div>
        <div className="ahmed-right small">{date}</div>
        <div className="ahmed-right small">{time}</div>
      </header>
    </div>

    {/* Main Content */}
    <div className="body-container">
      <div className=" ">
        <div className="">
        <div className="custom-container">
            
            <div className="custom-box" onClick={handleSummaryClick}>
              <h2>Student Summary</h2>
            </div>

            <div className="custom-box" onClick={handleScheduleClick}>
                <h2>Student Schedule</h2>
            </div>

            <div className="custom-box" onClick={handleCoursesClick}>
                <h2>Courses List</h2>
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
export default HomeStudent;