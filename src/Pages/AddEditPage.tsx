import axios from "axios";
import React, {useState, useEffect} from "react"
import { useParams, useNavigate } from "react-router-dom"
import { API_URL, ERROR_MESSAGE } from "../constants";
import isEmpty from "lodash/isEmpty";

const AddEditPage = (props: any) => {
  const {studentId} = useParams();

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [dateOfBirth, setDateOfBirth] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false);


  return (<>
    
  </>)
}

export default AddEditPage;