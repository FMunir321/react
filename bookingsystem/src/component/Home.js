import React from 'react';
import './Home.css';
import { useState } from 'react';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { tourData } from './data.js';

export default function Home() {
    const [Location, setLocation] = useState({});
    const [search, setSearch] = useState({});

    const [isopen, setIsopen] = useState(false);
    const [filteredData, setFilteredData] = useState([])


    function handlechange(event) {
        setSearch({
            ...search, [event.target.name]: event.target.value
        })

        //For search 
        const filterData = tourData.filter((el) => {
            setIsopen(true)
            //if no input the return the original
            if (search.location === '') {
                setFilteredData({ el })
                return el;
            }
            //return the item which contains the user input
            else {
                console.log(search)
                return el.name.toLowerCase().includes(event.target.value)

            }

        })
        setFilteredData(filterData);

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
                <tr>
                    <th>
                        <label style={{ display: 'flex' }}> <LocationOnOutlinedIcon />Location</label>
                        <input name='Location' onChange={handlechange} placeholder='Where you want you go?'></input>
                    </th>
                    <th>
                        <label style={{ display: 'flex' }}> <CalendarMonthOutlinedIcon /> Choose Date</label>
                        <input name='chooseDate' onChange={handlechange} placeholder='Choose Here'></input>
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
                    <th style={{ borderRadius: '20px', background: '#f35531', color: 'white' }}><SearchOutlinedIcon /></th>
                </tr>
            </table >

            {isopen ? <ul>
                {filteredData.map((item) => (
                    <lable className='lable'>{item.name}</lable>
                ))}
            </ul> : <ul>
                {tourData.map((item) => (
                    <lable className='lable'>{item.name}</lable>
                ))}
            </ul>}
        </div >
    )
}
