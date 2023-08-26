import React, { useEffect, useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import TopHeader from './Header';
import { tourData, myTourData, bookedtour } from './data';
import { click } from '@testing-library/user-event/dist/click';
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useForm, SubmitHandler } from "react-hook-form";
import { ContactSupportOutlined } from '@mui/icons-material';

export default function Confirmbooking() {
    const location = useLocation();
    const navigate = useNavigate();
    const tourid = location.state;
    console.log(tourid)
    const [countryState, setCountryState] = useState({
        loading: false,
        countries: [],
        errorMessage: "",
    });

    useEffect(() => {

        //fetchData();

        findtourData();

    }, []);


    const [bookedtour, setBookedtour] = useState([])
    function findtourData() {
        for (var i = 0; i <= tourData.length; i++) {
            if (tourData[i].id == tourid) {
                return bookedtour.push(tourData[i]);


            }
        }
    }

    const fetchData = async () => {
        try {
            // fetch spinner
            setCountryState({
                ...countryState,
                loading: true,
            });

            //  fetch data
            const dataUrl = `https://restcountries.com/v3.1/all`;
            const response = await axios.get(dataUrl);
            setCountryState({
                ...countryState,
                countries: response.data,
                loading: false,
            });
        } catch (error) {
            setCountryState({
                ...countryState,
                loading: false,
                errorMessage: "Sorry Something went wrong",
            });
        }
    };
    const { loading, errorMessage, countries } = countryState;
    const [selectedCountry, setSelectedCountry] = useState();

    //   find selected country data
    //search selected country
    const searchSelectedCountry = countries.find((obj) => {
        if (obj.name.common === selectedCountry) {

            return true;
        }
        return false;
    }, []);

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(bookedtour)
        console.log(myTourData)
        myTourData.push(data);
        navigate( "/mytours" );
    }


    return (
        <div>
            <div style={{ padding: '3%' }}><TopHeader /></div>
            <div style={{ display: 'flex', width: '94%', padding: '3%' }}>
                <div style={{ width: '50%' }}>
                    <h1>Confirm Your Booking</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Name:</label><br />
                        <input type='text' id='name' {...register('name')} /><br />

                        <label>Email</label><br />
                        <input type='text' id='email' {...register('email')} /><br />

                        <label>Phone</label><br />

                        <div style={{ display: 'flex' }}>
                            <select
                                className='select'
                                value={selectedCountry}
                                onChange={(e) => setSelectedCountry(e.target.value)}
                            >
                                <option>--Select Country--</option>
                                {countries.map((item) => {
                                    return (
                                        <option key={uuidv4()} value={item.name.common}>
                                            {item.name.common}
                                        </option>
                                    );
                                })}
                            </select>

                            {searchSelectedCountry && (
                                <div>
                                    {/* <input value={searchSelectedCountry.idd.root}></input> */}
                                    <p>
                                        {searchSelectedCountry.idd.root}{searchSelectedCountry.idd.suffixes}
                                    </p>
                                </div>
                            )}
                        </div>
                        <input style={{ marginTop: '1%' }} type='number' id='phone' {...register('phone')} /><br />


                        <div className='adultschildren'>
                            <label>Numbers of Adults</label>
                            <label style={{ marginLeft: "19%" }}>Number of Childrens</label><br />
                            <input type='text' name='firstname' {...register('numberOfadults')} />
                            <input style={{ marginLeft: "6%" }} type='text' name='firstname' {...register('numberOfchild')} />
                        </div>

                        <label>Payment Method</label><br />
                        <select className='optioncss' {...register('paymentmethod')}>
                            <option>Select</option>
                            <option value={'mastercard'}>Master Card</option>
                            <option value={'visacard'}>Visa Card</option>
                        </select>
                        <button className='confirmBtn' type='submit'>Confirm</button>
                    </form>


                </div>


                <div style={{ width: '50%' }}>
                    <img style={{ width: '90%' }} src='https://wallpaperaccess.com/full/2272119.jpg' />
                </div>
            </div>
        </div>
    )
}
