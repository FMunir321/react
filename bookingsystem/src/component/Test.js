import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { tourData } from "./data";
import { useForm } from "react-hook-form";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { DateRange } from 'react-date-range';
import Moment from 'moment';
import { Search } from "@mui/icons-material";



function Test() {

    // code for date
    const [dateshow, setDateshow] = useState(false);
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: 'selection'
        }
    ]);

    const refOne = useRef(null)

    useEffect(() => {
        document.addEventListener('keypress', hideOnEscape, true)
        document.addEventListener('click', hideOnClickOutside, true)

    }, [])

    const hideOnEscape = (e) => {
        if (e.key === "Escape") {
            setDateshow(false);
        }

    }

    const hideOnClickOutside = (e) => {
        if (refOne.current && !refOne.current.contains(e.target)) {
            setDateshow(false);
        }
    }

    function consolelog() {

        const dateformate = {
            startDate: moment(state[0].startDate).format('DD-MM-YYYY'),
            endDate: moment(state[0].endDate).format('DD-MM-YYYY')
        }
    }

    function handlechange() {
        setDateshow(true)
    }
    return (

        // code for Date
        <div>
            <div ref={refOne}>
                <input name='chooseDate' onClick={handlechange} placeholder='Choose Here'></input>

                {dateshow &&
                    <DateRange
                        editableDateInputs={true}
                        onChange={item => setState([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                    />
                }

                <button style={{ margin: '6%' }} onClick={consolelog}>date range</button>
            </div>
        </div>
    );
};

export default Test;