import React, { useState } from 'react'
import TopHeader from './Header'
import { tourData, bookedtour } from './data'
import { Link, useNavigate } from 'react-router-dom'
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Swal from 'sweetalert2'


export default function Mytours() {
    const navigate = useNavigate();

    const [Alltour, setAlltour] = useState(tourData);

    function deleteHandle(tour) {
        const currentDate = new Date();
        const examDate = new Date(tour.startDate);
        const timeDifference = Math.abs(examDate - currentDate);
        const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

        console.log(daysRemaining)

        if (daysRemaining <= 3) {
            Swal.fire({
                title: 'Delete Tour',
                text: "You can't delete'" + tour.name + "' because there are only '" + daysRemaining + "days remining' untill beginning of this tour.",
                showCancelButton: false,
            })
        }
        else {
            alertfordelete(tour)
        }
    }

    function alertfordelete(tour) {
        Swal.fire({
            title: 'Delete Tour',
            text: "Are you sure to delete '" + tour.name + "' ?",
            showCancelButton: true,
            cancelButtonText: 'Cancel',
            confirmButtonText: 'Delete',


        }).then((result) => {
            if (result.isConfirmed) {
                setAlltour(Alltour.filter(items => items.id !== tour.id));
                console.log('cancel')
            }
            else {

            }
        })

        // setAlltour(Alltour.filter(items => items.id !== id));

    }

    function detailHandle(id) {
        navigate("/detail", { state: id })
    }
    return (
        <div className='mytourContainer'>
            <TopHeader />
            <div>
                {bookedtour == 0 &&
                    <div> No tour you selected</div>
                }

                {

                    Alltour.map((item, index) => (

                        <div className='column' key={index}>
                            <img className='imgalltour' src={item.image} alt="No image" />
                            <div style={{ padding: '0px 0px 0px 10px' }}>
                                <h2>{item.name}</h2>
                                <p className='textskip'>{item.description}</p>
                                <div style={{ display: 'flex' }}>
                                    <DeleteForeverOutlinedIcon onClick={() => deleteHandle(item)} style={{ color: '#e9763d' }} />
                                    {/* <button></button> */}
                                    <button className='detailBtn' onClick={() => detailHandle(item.id)}>Details</button>
                                    <button className='detailBtn' onClick={() => navigate('/update', { state: item })}>Update</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
                {
                    tourData.map((item, index) => (
                        <Link to={'detail'} state={{ tourid: item.id }} key={index}>
                            <div className='column' >
                                <img className='imgalltour' src={item.image} alt="No image" />
                                <div style={{ padding: '0px 0px 0px 10px' }}>
                                    <h2>{item.name}</h2>
                                    <p className='textskip'>{item.description}</p>
                                    <div style={{ display: 'flex', marginTop: '-5%' }}>

                                        <p><AttachMoneyOutlinedIcon style={{ marginRight: '10px', background: '#ededed', fontSize: '15px' }} /> {item.price}</p>
                                        <p style={{ marginLeft: '20%' }}><AccessTimeOutlinedIcon style={{ marginRight: '10px', background: '#ededed', fontSize: '15px' }} />{item.duration}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
