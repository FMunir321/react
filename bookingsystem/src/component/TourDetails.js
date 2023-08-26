import React from 'react'
import { useLocation, Link, useNavigate } from 'react-router-dom';
import TopHeader from './Header';
import { tourData } from './data';

import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import { ConstructionOutlined } from '@mui/icons-material';

export default function TourDetails() {

    const location = useLocation();
    const navigate = useNavigate();
    const tourid = location.state;


    function ClickHandler(id) {

        navigate("/confirmbooking", { state: id });
    }

    function handleChange() {

    }
    return (
        <div style={{ marginLeft: "1%" }}>
            <TopHeader />
            {
                tourData.map((item, index) => {
                    if (item.id == tourid)
                        return <div style={{ margin: "2%" }} key={index}>
                            <div>
                                <h1>{item.name}</h1>
                            </div>
                            <div className='detail'>
                                <p><LocationOnOutlinedIcon style={{ marginRight: '10px', background: '#ededed', fontSize: '15px' }} />{item.city}</p>
                                <p style={{ marginLeft: '30px' }}><AttachMoneyOutlinedIcon style={{ marginRight: '10px', background: '#ededed', fontSize: '15px' }} />{item.price}</p>
                                <p style={{ marginLeft: '30px' }}><AccessTimeOutlinedIcon style={{ marginRight: '10px', background: '#ededed', fontSize: '15px' }} />{item.duration}</p>
                            </div>
                            <img className='imgdetailpage' src={item.image} />
                            <p>{item.description}</p>
                            <div>
                                <h1>What's included</h1>
                                <div className='included'>
                                    <h3>Destination</h3>
                                    <p>{item.city}</p>
                                </div>
                                <div className='included'>
                                    <h3>Departure Location</h3>
                                    <p>{item.departurelocation}</p>
                                </div>
                                <div className='included'>
                                    <h3>Return</h3>
                                    <p>on Day {item.returnday}</p>
                                </div>
                                <div className='included'>
                                    <h3>Return</h3>
                                    <div>
                                        <div className='setpadding'>
                                            <input onChange={handleChange} value="One" type="checkbox" checked />
                                            <span> Basic first aid kit </span>
                                        </div>
                                        <div className='setpadding'>
                                            <input onChange={handleChange} value="One" type="checkbox" checked />
                                            <span> Fuel Expense </span>
                                        </div>
                                        <div className='setpadding'>
                                            <input onChange={handleChange} value="One" type="checkbox" checked />
                                            <span> Detail Guided Maps </span>
                                        </div>
                                    </div>


                                    <div>
                                        <div className='setpadding'>
                                            <input onChange={handleChange} value="One" type="checkbox" checked />
                                            <span> Comfortable Private Booked </span>
                                        </div>
                                        <div className='setpadding'>
                                            <input onChange={handleChange} value="One" type="checkbox" checked />
                                            <span> Mess Tent, Kitchen Utensils, and Cook </span>
                                        </div>
                                        <div className='setpadding'>
                                            <input onChange={handleChange} value="One" type="checkbox" checked />
                                            <span> Waterproof Tents on twin/triple Sharing </span>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div>
                                <h1>Itinerary Schedule</h1>
                                <div className='schedulecontainer'>
                                    <div>
                                        <h4>Day 1</h4>
                                        <li>Tours with American Sign Language</li>
                                        <li>Tours with American Sign Language</li>
                                        <li>Tours with American Sign Language</li>
                                    </div>
                                    <div style={{ marginLeft: '3%' }}>
                                        <h4>Day 2</h4>
                                        <li>Tours with American Sign Language</li>
                                        <li>Tours with American Sign Language</li>
                                        <li>Tours with American Sign Language</li>
                                    </div>
                                    <div style={{ marginLeft: '3%' }}>
                                        <h4>Day 3</h4>
                                        <li>Tours with American Sign Language</li>
                                        <li>Tours with American Sign Language</li>
                                        <li>Tours with American Sign Language</li>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', padding: '5%' }}>
                                <button className='booknowbtn' onClick={() => { ClickHandler(item.id) }}>Book Now</button>
                            </div>
                        </div>
                })
            }
        </div>
    )
}
