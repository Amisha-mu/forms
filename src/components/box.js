import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import  Axios  from "axios";
import "./box.css";

function Box() {
 const [bankname, setBankname] = useState("");
  const [accountnumber, setAccountnumber] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [branch, setBranch] = useState("");
  const [holdername, setHoldername] = useState("");
  const [box, setBox] = useState([]);
  const [edit, setEdit] = useState(null);

  const getAccountDetails =() => {
    Axios.get("http://localhost:8000/AccountDetails/")
    .then((res) => {
        console.log("Data getting from api", res.data);
        setBox(res.data.data);
    })
    .catch((err) => console.log(err));
    };

    useEffect(() => {
    getAccountDetails();
  }, []);
  
  const postData =() =>{
    Axios.post("http://localhost:8000/AccountDetails/", {
      bankname,
      accountnumber,
      ifsc,
      branch,
      holdername,
    })
    .then((res) => {
      getAccountDetails();
      setBankname();
      setAccountnumber();
      setIfsc();
      setBranch();
      setHoldername();
      console.log("Data posted successfully",res);
    })
    .catch((err) => console.log(err));
  };
    const updateData = () => {
    // e.preventDefault();
    Axios.put(`http://localhost:8000/AccountDetails/${edit}`, {
      bankname,
      accountnumber,
      ifsc,
      branch,
      holdername,
    })
      .then((res) => {
       getAccountDetails();
      setBankname();
      setAccountnumber();
      setIfsc();
      setBranch();
      setHoldername();
        console.log("data updated successfully", res);
      })
      .catch((err) => {
        console.log(err);
        setEdit(null);
      });
  };

  const deleteData = (Id) => {
    Axios.delete(`http://localhost:8000/AccountDetails/${Id}`)
      .then((res) => {
        getAccountDetails();
        console.log("data deleted successfully", res);
      })
      .catch((err) => console.log(err));
  };

  const Arr = () =>
    box.map((i, index) => {
      return (
        <tr key={index}>
          <td>{i.Id}</td>
          <td>{i.bankname} </td>
          <td>{i.accountnumber} </td>
          <td>{i.ifsc}</td>
          <td>{i.branch}</td>
          <td>{i.holdername}</td>
          <td>
            <button
              onClick={() => {
                setEdit(i.Id);
                setBankname(i.bankname);
                setAccountnumber(i.accountnumber);
                setIfsc(i.ifsc);
                setBranch(i.branch);
                setHoldername(i.holdername);
              }}
            >
              Edit
            </button>
          </td>
          <td>
            <button onClick={() => deleteData(i.Id)}>Delete</button>
          </td>
        </tr>
      );
    });

  return (
    <>
      <Container className="box">
        <h3 className="account">Account Details</h3>
        <Row className="details">
          <Col>
            <h4>Bank Name</h4>
          </Col>
          <Col>
            <input
              onChange={(e) =>setBankname(e.target.value)}
              className="text"
              value = {bankname}
              placeholder="Bank Name"
              
              type="text"
            ></input>
          </Col>
        </Row>
        <Row className="details">
          <Col>
            <h4>Account Number</h4>
          </Col>
          <Col>
            <input
              onChange={(e) => setAccountnumber(e.target.value)}
              className="text"
              placeholder="Account Number"
              value={accountnumber}
              type="text"
            ></input>
          </Col>
        </Row>
        <Row className="details">
          <Col>
            <h4>IFSC</h4>
          </Col>
          <Col>
            <input
              onChange={(e) => setIfsc(e.target.value)}
              className="text"
              placeholder="IFSC"
              value={ifsc}
              type="text"
            ></input>
          </Col>
        </Row>
        <Row className="details">
          <Col>
            <h4>Branch</h4>
          </Col>
          <Col>
            <input
              onChange={(e) =>setBranch(e.target.value)}
              className="text"
              placeholder="Branch"
              value={branch}
              type="text"
            ></input>
          </Col>
        </Row>
        <Row className="details">
          <Col>
            <h4>Holder Name</h4>
          </Col>
          <Col>
            <input
              onChange={(e) => setHoldername(e.target.value)}
              className="text"
              placeholder="Holder Name"
              value={holdername}
              type="text"
            ></input>
          </Col>
        </Row>
         <button
          onClick={() => {
            edit ? updateData() : postData();
          }}
        >
          {edit ? "Update" : "Submit"}
        </button>
      </Container>
      <div>
        <h3>Account Details</h3>
        <table>
          <tr>
            <th>Id</th>
            <th>bankname</th>
            <th>accountnumber</th>
            <th>ifsc</th>
            <th>branch</th>
            <th>holdername</th>
          </tr>
          <Arr />
        </table>
      </div>
      </>
  );
}

export default Box;