import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { tourData } from "./data";

function Test() {
    //const [daysRemaining, setDaysRemaining] = useState(null);
    // const state = {
    //     curDT: new Date().toLocaleString(),
    // }
    const state = {
        date: ""
    };
    useEffect(() => {
        // getDate();
        datedifferent();
    }, []);


    function datedifferent() {
        const currentDate = new Date();
        const examDate = new Date(tourData[1].startDate);
        const timeDifference = Math.abs(examDate - currentDate);
        const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

        console.log(daysRemaining)

        if (daysRemaining <= 3) {

            console.log('not deleted');
        }
        else {
            console.log("deleted")
        }
    }

    return (
        <div>test page
            <p>Current Date And Time : {state.date}</p>
            <p>{tourData[0].startDate}</p>
        </div>
    );
};

export default Test;