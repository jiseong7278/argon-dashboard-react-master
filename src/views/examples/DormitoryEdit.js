/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    Progress,
    Table,
    Container,
    Row,
    Col
} from "reactstrap";

// core components
import {
    chartOptions,
    parseOptions,
    chartExample1,
    chartExample2
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import "../../assets/css/dormitory-edit.css";
import Axios from "axios";

// You must read here
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!Change const "Template" name!!!
// !!!ex) Template -> fileName    !!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const DormitoryEdit = (props) => {

    //dormitory name variable
    let dormitory_name = "dormitory_name";
    //img name variable
    let img_name = "clickit.png";

    const findDormitoryNumName = props.match.params.dormitory_num
    const findDormitoryValue = findDormitoryNumName.split('|')



    const [dormitoryEditList,setdormitoryEditList] = useState([]);
    Axios.get("http://localhost:3001/dormitory_edit",{params:{
            dormitoryNum : findDormitoryValue[0],
        }}).then((response) => {
        setdormitoryEditList(response.data);
    });


    return (
        <>
            <Header />
            <Container className={"dormitoryEdit-container"}>
                <div className={"dormitory-name"}>
                    <h1>{findDormitoryValue[1]}</h1>
                </div>
                {/* =============== start dormitory edit content =============== */}

                <div className={"dormitory-edit-content"}>
                    <div className={"dormitory-edit-content-header"}>
                        <div className={"dormitory-img"}>
                            <img src={require('../../assets/img/dormitory/' + img_name)}/>
                        </div>
                        <Button className={"dormitory-img-edit"} type={"button"} color={"primary"} size={"sm"}>????????? ??????</Button>
                        {/*<input type={"submit"} className={"dormitory-img-edit"} value={"????????? ??????"}/>*/}
                        <input type={"text"} className={"dormitory-name-input"} placeholder={dormitory_name}/>
                        <Button className={"dormitory-name-edit"} type={"button"} color={"primary"} size={"sm"}>?????? ??????</Button>
                        <Button className={"dormitory-edit-save"} type={"button"} color={"primary"}>??????</Button>
                        <Button className={"dormitory-create-innerFacility"} type={"button"} color={"primary"}>????????? ??????</Button>
                    </div>
                    
                    <div className={"dormitory-edit-content-body"}>
                        {/*dormitoryEditList??? ?????? facility name limit time ????????????*/}


                        <div className={"dormitory-innerFacility-list"}>
                            <ul className={"dormitory-innerFacility-list-ul"}>
                                <li className={"dormitory-innerFacility-list-li"}>
                                    ?????????
                                </li>
                                <li className={"dormitory-innerFacility-list-li"}>
                                    ?????????
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            {/* =============== end of dormitory edit content ===============  */}
            </Container>

        </>
    );
};

// you must read here
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!Change "Template" name      !!!
// !!!ex) Template -> fileName    !!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export default DormitoryEdit;
