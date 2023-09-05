import React, { useRef, useEffect } from 'react';
import './Home.css';
import { useState } from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { tourData } from './data.js';
import { addDays } from 'date-fns';
import { DateRange } from 'react-date-range';
import moment from "moment";


export default function Home() {
    const [Search, setSearch] = useState({});
    const [filteredData, setFilteredData] = useState([])
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

    function handlechange(event) {
        setSearch({ ...Search, [event.target.name]: event.target.value });

        //For search 
        // const filterData = tourData.filter((el) => {
        //     setIsopen(true)
        //     //if no input the return the original
        //     if (Search.location === '') {
        //         setFilteredData({ el })
        //         return el;
        //     }
        //     //return the item which contains the user input
        //     else {
        //         console.log("s")
        //         return el.name.toLowerCase().includes(event.target.value)

        //     }

        // })
        // setFilteredData(filterData);

    }
    const [search, setsearch] = useState('');
    function submitrequest() {
        const dateformate = {
            startDate: moment(state[0].startDate).format('DD-MM-YYYY'),
            endDate: moment(state[0].endDate).format('DD-MM-YYYY')
        }
        console.log(dateformate);
    }

    return (
        <div>
            <div>
                <div className='centered'>
                    <h5>Tours</h5>
                    <h5>Add Tours</h5>
                    <h5>My Tours</h5>
                </div>
                <img width={'100%'} height={'480px'} src="homepageImage.jpg" alt='no image' />

            </div>

            <table>

                <thead></thead>
                <tbody>
                    <tr>
                        <th>
                            <label style={{ display: 'flex' }}> <LocationOnOutlinedIcon />Location</label>
                            <input name='Location' onChange={(e) => setsearch(e.target.value)} placeholder='Where you want you go?'></input>
                        </th>
                        <th ref={refOne}>
                            <label style={{ display: 'flex' }}> <CalendarMonthOutlinedIcon /> Choose Date</label>
                            <input name='chooseDate' onChange={handlechange} onClick={() => setDateshow(true)} placeholder='Choose Here'></input>
                        </th>
                        <th>
                            <label style={{ display: 'flex' }}> <MonetizationOnOutlinedIcon />Price Range</label>
                            {/* <input name='PriceRange' onChange={handlechange} placeholder='Choose Here'></input> */}
                            <select name='chooseDate' style={{ border: 'none' }} onChange={handlechange}>
                                <option value="">Choose Here</option>
                                <option value="$50-$200">$50 - $200</option>
                                <option value="$200-$400">$200 - $400</option>
                                <option value="$400-$500">$400 - $500</option>
                                <option value="$500-$750">$500 - $750</option>
                                <option value="$750-$1000">$750 - $1000</option>
                                <option value="$1000Above">$1000 Above</option>
                            </select>
                        </th>
                        <th style={{ borderRadius: '20px', background: '#f35531', color: 'white' }} onClick={submitrequest}><SearchOutlinedIcon /></th>
                    </tr>
                </tbody>
                <tfoot></tfoot>
            </table >

            {dateshow &&
                <div style={{marginLeft:'50%'}}>
                    <DateRange

                        editableDateInputs={true}
                        onChange={item => setState([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                    />
                </div>
            }

            <ul>
                {tourData
                    .filter((item) => {
                        return search.toLowerCase() === ''
                            ? item
                            : item.name.toLowerCase().includes(search)
                    })
                    .map((item) => (
                        <label className='lable'>{item.name}</label>
                    ))}
            </ul>
        </div >
    )
}
