import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import {  } from 'reactstrap';
import { useEffect, useState } from "react";
import { Button, Input, ButtonGroup, Container, Row, Col } from "reactstrap";
import Breadcrumb from "./Breadcrumb";

function App() {
  var minWidth = 20;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [value, setValue] = useState([]);
  const [crumbs, setCrumbs] = useState([
    "Home",
    "Category",
    "Sub Category",
    "contact",
  ]);
  const [navData, setNavData] = useState([]);
  // const [toggle,setToggle]  = useState(false);

  useEffect(() => {
    setCount(count + 1);
  }, [firstName]);

  useEffect(() => {
    setCount1(count1 + 1);
  }, [lastName]);

  const handleChangeFirst = (e) => {
    setFirstName(e.target.value);
    // setToggle(!toggle);
  };

  const handleChangeLast = (e) => {
    setLastName(e.target.value);
    // setToggle(!toggle);
  };

  const onCheckboxBtnClick = (val) => {
    const index = value.indexOf(val);
    if (index < 0) {
      value.push(val);
    } else {
      value.splice(index, 1);
    }
    setValue([...value]);
  };

  const selected = (crumb) => {
    setNavData(crumb);
  };

  return (
    <div className="App">
      <label>Login Form</label>
      <div className="Container1">
        <Input
          style={{
            width: `${firstName.length + minWidth}ch`,
            backgroundColor: firstName ? "#ccc" : "#fff",
          }}
          autoFocus
          onChange={(e) => handleChangeFirst(e)}
        />
        <hr style={{ heigth: "4px", width: `${firstName.length + minWidth}ch` }} />

        <Input
          style={{
            width: `${lastName.length + minWidth}ch`,
            backgroundColor: lastName ? "#A9E4EF" : "#fff",
          }}
          autoFocus
          onChange={(e) => handleChangeLast(e)}
        />
        <hr style={{ heigth: "4px", width: `${lastName.length + minWidth}ch` }} />

        <Button color="danger">ADD</Button>
      </div>
      <hr />
      <div className="Container2">
        <Container>
          <Row>
            <Col lg="8">
              <ButtonGroup>
                <Button
                  color="info"
                  outline
                  onClick={() => onCheckboxBtnClick(1)}
                  active={value.includes(1)}
                >
                  Slot 1
                </Button>
                <Button
                  color="info"
                  outline
                  onClick={() => onCheckboxBtnClick(2)}
                  active={value.includes(2)}
                >
                  Slot 2
                </Button>
                <Button
                  color="info"
                  outline
                  onClick={() => onCheckboxBtnClick(3)}
                  active={value.includes(3)}
                >
                  Slot 3
                </Button>
                <Button
                  color="info"
                  outline
                  onClick={() => onCheckboxBtnClick(4)}
                  active={value.includes(4)}
                >
                  Slot 4
                </Button>
              </ButtonGroup>
              <br />
              <br />
              <ButtonGroup>
                <Button
                  color="info"
                  outline
                  onClick={() => onCheckboxBtnClick(5)}
                  active={value.includes(5)}
                >
                  Slot 5
                </Button>
                <Button
                  color="info"
                  outline
                  onClick={() => onCheckboxBtnClick(6)}
                  active={value.includes(6)}
                >
                  Slot 6
                </Button>
                <Button
                  color="info"
                  outline
                  onClick={() => onCheckboxBtnClick(7)}
                  active={value.includes(7)}
                >
                  Slot 7
                </Button>
                <Button
                  color="info"
                  outline
                  onClick={() => onCheckboxBtnClick(8)}
                  active={value.includes(8)}
                >
                  Slot 8
                </Button>
              </ButtonGroup>
            </Col>
            <Col lg="4">
              <p>Parking Slot value: {JSON.stringify(value)}</p>
            </Col>
          </Row>
        </Container>
      </div>
      <hr />
      <div className="Container3">
        <Breadcrumb crumbs={crumbs} selected={selected} />
        <p>{navData}</p>
      </div>
    </div>
  );
}

export default App;
