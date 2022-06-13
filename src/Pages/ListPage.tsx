import React, { useEffect, useState } from "react";
import sortBy from "lodash/sortBy";
import { API_URL } from "../constants";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import "./style.css";

export default function App() {
  const [students, setStudents] = useState<any>([])
  const [showPopup, setShowPopup] = useState<boolean>(false)
  const navigate = useNavigate()



  const onEdit = (studentId: string) => {
    navigate(`/edit/${studentId}`)
  }

  const onCreate = () => {
    navigate(`/create`)
  }

  const renderStudents = () => {
    
  }

  const onSortByName = () => {

  }

  const onSortByDate = () => {

  }

  const onSortByMonth = () => {

  }

  return (
    <div className="App">
      <div className="student-table-wrapper">
        <table className="student-table">
          <tr>
            <th className="student-col">Name</th>
            <th className="student-col">Date of birth</th>
            <th></th>
          </tr>
          {renderStudents()}
        </table>
      </div>
      <div className="button-wrapper">
        <button onClick={onSortByName} className="button">Sort By Name</button>
        <button onClick={onSortByDate} className="button">Sort By Date of Birth</button>
        <button onClick={onSortByMonth} className="button">Sort By Month of Birth</button>
      </div>
      <div className="button-wrapper">
        <button onClick={onCreate} className="create-button">Create new student</button>
      </div>
    </div>
  );
}
