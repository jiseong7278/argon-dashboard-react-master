import React, {useState} from "react";
import Axios from "axios";
import {Link} from 'react-router-dom'


const Facility = () => {
    const [facilityList,setfacilityList] = useState([]);
    Axios.get("http://localhost:3001/facility").then((response) => {
        setfacilityList(response.data);
    });
    const [innerFacilityNum, setInnerFacilityNum] = useState([{
        inner_facility_num: '',
    }])
    Axios.get("http://localhost:3001/seat_availability").then((response) => {
        setfacilityList(response.data);
    });


    return (
        <div>
            {facilityList.map(facility => (
                <div className={"fac-box"}>
                    <div className={"fac-left"}>
                        <div className={"fac-img"}>
                            <img
                                alt="..."
                                className="fac-img-detail"
                                src={require("../../assets/img/theme/react.jpg")}
                            />
                        </div>
                    </div>
                    <div className={"fac-right"}>
                        <div className={"fac-name"}>
                            <h2>{facility.facility_name}</h2>
                        </div>
                        <div className={"fac-content"}>
                            <ul className={"fac-content-detail"}>
                                <li className={"fac-content-detail-name"}>
                                    제한 인원 - {facility.facility_limit_peole}
                                </li>
                                <li className={"fac-content-detail-time"}>
                                    이용 가능 시간 - 00:00 ~ 23:59
                                </li>
                            </ul>
                        </div>
                        <div className={"fac-status"}>
                            <p>예약 현황 2/4 </p>
                        </div>
                        <div className={"fac-reserve"}>
                            <Link to={'/inner'}>
                                <button className={"fac-reserve-button"}>
                                    예약하기
                                </button>
                            </Link>


                        </div>
                    </div>
                </div>
            ))}
        </div>

    );
}
export default Facility;