import "./Home.css";
import React, { useState, useEffect } from "react";
import { MdAccountBalance } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface Item {
  id: number;
  student_name: string;
  student_department:string;
  student_grade:string;
  checked: boolean;
}

const HomeAdvisor: React.FC = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [items, setItems] = useState<Item[]>([
    { id: 1, student_name: "Ahmed Lamid", student_grade:"Junior", student_department:"Engineering", checked: false },
    {  id: 2, student_name: "Ahmed Lamidi", student_grade:"Junior", student_department:"Engineering", checked: false },
    {  id: 3, student_name: "Ahmed Lamidb", student_grade:"Junior", student_department:"Engineering", checked: false  },
  ]);

  const handleItemChange = (id: number): void => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
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
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <h2>Select a student</h2>
      </div>
      <div style={{ display: "flex", alignItems: "left", justifyContent: "left", gap: "20px" }}>
        <h3>Student ID</h3>
        <h3>Student Name</h3>
        <h3>Student Department</h3>
        <h3>Student Grade</h3>
        <h3>Selected</h3>
      </div>
        <div className="custom-container">
        <ul>
          {items.map((item) => (
            <li
              key={item.id}
              style={{
                display: "grid",
                gridTemplateColumns: "100px 250px 200px 100px 200px", // Adjust widths
                alignItems: "center",
                gap: "20px",
              }}
            >
              <label>{item.id}</label>
              <label>{item.student_name}</label>
              <label>{item.student_department}</label>
              <label>{item.student_grade}</label>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleItemChange(item.id)}
              />
            </li>
          ))}
          </ul>

        </div>
      </div>
    </div>
  );
};

export default HomeAdvisor;
