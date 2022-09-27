import React, { useEffect, useState } from "react";
import sortBy from "lodash/sortBy";
import { API_URL } from "../constants";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
export default function App() {
  const [students, setStudents] = useState<any>([]);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [sortByName, setSortByName] = useState<boolean>(false);
  const [sortByDate, setSortByDate] = useState<boolean>(false);
  const [sortByMonth, setSortByMonth] = useState<boolean>(false);
  const [isAsc, setIsAsc] = useState<boolean>(true);

  const navigate = useNavigate()



  const onEdit = (studentId: string) => {
    navigate(`/edit/${studentId}`)
  }

  const onCreate = () => {
    navigate(`/create`)
  }

  const renderStudents = async () => {

    try {
        const resp = await axios.get('https://random-data-api.com/api/v2/users?size=10');
        setStudents(resp.data);
        console.log(resp.data);
      } catch (err) {
        console.error(err);
      }
    };
    useEffect(() => {
      renderStudents();

    }, []);
  const onSortByName = () => {
    if (isAsc) {
      setSortByName(true);
      setSortByDate(false);
      setSortByMonth(false);
      setIsAsc(false);
    }
    if (!isAsc) {
      setSortByName(true);
      setSortByDate(false);
      setSortByMonth(false);
      setIsAsc(true);
    }
  }

  const onSortByDate = () => {
    if (isAsc) {
      setSortByDate(true);
      setSortByName(false);
      setSortByMonth(false);
      setIsAsc(false)
    }
    if (!isAsc) {
      setSortByDate(true);
      setSortByName(false);
      setSortByMonth(false);
      setIsAsc(true)
    }
  }

  const onSortByMonth = () => {
    if (isAsc) {
      setSortByMonth(true);
      setSortByName(false);
      setSortByDate(false);
      setIsAsc(false)
    }
    if (!isAsc) {
      setSortByMonth(true);
      setSortByName(false);
      setSortByDate(false);
      setIsAsc(true)
    }
  }

  return (
    <div className="App">
      <div className="student-table-wrapper">
        <Table striped bordered hover className="student-table">
          <thead>
            
            <tr>
              <th>First Name</th>
              <th>Date of birth</th>
            </tr>
          </thead>
          <tbody>
          {!sortByName && !sortByDate && !sortByMonth ? students.map((ele:any) => (
              <tr key={ele.uid}>
                <td>{ele.first_name}</td>
                <td>{ele.date_of_birth}</td>
            </tr>
            )): sortByName ? students.sort((a:any,b:any) => isAsc ? ((a.first_name > b.first_name) ? 1 : -1) : ((a.first_name < b.first_name) ? 1 : -1)).map((ele:any) => (
              <tr key={ele.uid}>
                <td>{ele.first_name}</td>
                <td>{ele.date_of_birth}</td>
            </tr>
            )) : sortByDate ? students.sort((a:any,b:any) => isAsc ? ((new Date(a.date_of_birth) > new Date(b.date_of_birth)) ? 1 : -1) : 
            ((new Date(a.date_of_birth) < new Date(b.date_of_birth)) ? 1 : -1)).map((ele:any) => (
              <tr key={ele.uid}>
                <td>{ele.first_name}</td>
                <td>{ele.date_of_birth}</td>
            </tr>
            )) : sortByMonth ? students.sort((a:any,b:any) => isAsc ? ((new Date(a.date_of_birth).getMonth() > new Date(b.date_of_birth).getMonth()) ? 1 : -1) : 
            ((new Date(a.date_of_birth).getMonth() < new Date(b.date_of_birth).getMonth()) ? 1 : -1)).map((ele:any) => (
              <tr key={ele.uid}>
                <td>{ele.first_name}</td>
                <td>{ele.date_of_birth}</td>
            </tr>
            )) : ''}
          </tbody>
        </Table>
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
