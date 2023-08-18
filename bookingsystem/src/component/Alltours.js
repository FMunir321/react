import React from 'react'
import { tourData } from './data'
import './Alltours.css'
import { duration } from '@mui/material'
import { Diversity1Outlined, Margin } from '@mui/icons-material'
import TopHeader from './Header'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';

export default function Alltours() {
    return (
        <div style={{ marginLeft: '10%' }}>
            <TopHeader />
            <br></br>
            <div style={{ display: 'flex', justifyContent: 'end', margin: '4% 8% 0% 0%' }}>

                <div></div><FilterListOutlinedIcon style={{ padding: '20px 0px' }} /> <h4>Filters</h4>
            </div>
            <div>
                {
                    tourData.map((item) => (
                        <div className='column' >
                            <img src={item.facilities} alt="No image" />
                            <div style={{padding:'0px 0px 0px 10px'}}>
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                                <div style={{ display: 'flex', marginTop: '-5%' }}>

                                    <p><AttachMoneyOutlinedIcon style={{ marginRight: '10px', background: '#ededed', fontSize: '15px' }} /> {item.price}</p>
                                    <p style={{ marginLeft: '20%' }}><AccessTimeOutlinedIcon style={{ marginRight: '10px', background: '#ededed', fontSize: '15px' }} />{item.duration}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
