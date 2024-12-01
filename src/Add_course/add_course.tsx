import "./Home.css";
import React, { useState, useEffect } from "react";
import { MdAccountBalance } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

interface Item {
  course_id: number;
  course_name: string;
  course_instructor:string;
  checked: boolean;
}


const Add_page: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [items, setItems] = useState<Item[]>([
    { course_id: 113, course_name: "Chemistry", course_instructor:"John Doe",  checked: false },
    {  course_id: 114, course_name: "Engineering", course_instructor:"Sam Meen", checked: false },
    {  course_id: 115, course_name: "Mathematics", course_instructor:"Felix Pal", checked: false  },
  ]);

  const filteredItems = location.state || []; // Retrieve the passed state

  const ErrorPopup = ({message, onClose}) => {
    return (
      <div className="error-popup">
        <div className="error-popup-content">
          <p>{message}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };
  const filteredItems_2 = items.filter((item) => item.checked);
  const SuccessPopup = ({message, onClose}) => {
    return (
      <div className="error-popup">
        <div className="error-popup-content">
          <h2>{message}</h2>

          <h3> Courses</h3>
          <ul>
          {filteredItems_2.map((item) => (
            <li key={item.course_id}>{item.course_name}</li>
          ))}
        </ul>
        <h3>For students:</h3>
        <ul>
          {filteredItems.map((item) => (
            <li key={item.id}>{item.student_name}</li>
          ))}
        </ul>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };

  const anyItemChecked = items.some((item) => item.checked);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const HandleSubmit = () =>{
    if(anyItemChecked){
    setShowSuccessPopup(true);
    }
    else{
      setShowErrorPopup(true);
    }
}
const handleCloseErrorPopup = () => {
  setShowErrorPopup(false);
};

const handleCloseSuccessPopup = () => {
  navigate('/advisor')
};


  const handleItemChange = (id: number): void => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.course_id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const advisorName: string = "John Doe"; // Replace with dynamic data if needed
  const date: string = currentTime.toLocaleDateString();
  const time: string = currentTime.toLocaleTimeString();

  return (
    <div className="bg-light">
      {/* Header Section */}
      <div className="header-container">
        <header className="text-white py-4">
          <div className="ahmed-left h3 font-weight-bold">
            <MdAccountBalance />
            Welcome Home, advisor {advisorName}
          </div>
          <div className="ahmed-right small">{date}</div>
          <div className="ahmed-right small">{time}</div>
        </header>
      </div>

      {/* Main Content */}
      <div className="body-container">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ marginLeft: "auto", marginRight: "auto" }}>
            <h3>Select Courses</h3>
         </div>
  
        <div className="submit" onClick={HandleSubmit}>Add Courses</div>

        {showErrorPopup && (
        <ErrorPopup
          message="Please select atleast one Courses!"
          onClose={handleCloseErrorPopup}
        />
      )}
      {showSuccessPopup && (
        <SuccessPopup
          message="Succesfully Added!"
          onClose={handleCloseSuccessPopup}
        />
      )}
</div>
      <div style={{ display: "flex", alignItems: "left", justifyContent: "left", gap: "20px" }}>
        <h3>Course ID</h3>
        <h3>Course Name</h3>
        <h3>Course Instructor</h3>
        <h3>Selected</h3>
      </div>
        <div className="custom-container">
        <ul>
          {items.map((item) => (
            <li
              key={item.course_id}
              style={{
                display: "grid",
                gridTemplateColumns: "100px 150px 200px 50px 200px", // Adjust widths
                alignItems: "center",
                gap: "20px",
              }}
            >
              <label>{item.course_id}</label>
              <label>{item.course_name}</label>
              <label>{item.course_instructor}</label>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleItemChange(item.course_id)}
              />
            </li>
          ))}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Add_page;
