import React from 'react';
import './Home.css';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { tourData } from './data.js';

export default function Home() {
    const filter
    console.log(tourData);

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
                        <input placeholder='Where you want you go?'></input>
                    </th>
                    <th>
                        <label style={{ display: 'flex' }}> <CalendarMonthOutlinedIcon /> Choose Date</label>
                        <input placeholder='Choose Here'></input>
                    </th>
                    <th>
                        <label style={{ display: 'flex' }}> <MonetizationOnOutlinedIcon />Price Range</label>
                        <input placeholder='Choose Here'></input>
                    </th>
                    <th style={{ borderRadius: '20px', background: '#f35531', color: 'white' }}><SearchOutlinedIcon /></th>
                </tr>
            </table >
        </div >
    )
}
