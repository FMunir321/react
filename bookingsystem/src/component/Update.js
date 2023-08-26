import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { personalData } from './data';
import axios from "axios";
import TopHeader from './Header';
import { v4 as uuidv4 } from "uuid";
import { useForm, SubmitHandler } from "react-hook-form";

export default function Update() {
    const location = useLocation();
    const userData = location.state;

    const [countryState, setCountryState] = useState({ countries: [], });
    const [register1, setRegister1] = useState({});
    // setRegister1(personalData[0]);

    useEffect(() => {
        fetchData();
        findtourData();

    }, []);

    const [bookedtour, setBookedtour] = useState([])
    function findtourData() {

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
    const { countries } = countryState;

    const [selectedCountry, setSelectedCountry] = useState();
    const searchSelectedCountry = countries.find((obj) => {
        if (obj.name.common === selectedCountry) {

            return true;
        }
        return false;
    }, []);

    const { register, handleSubmit } = useForm();

    const onSubmit = () => {
        personalData.length = 0;
        console.log(personalData);
        personalData.push(register1);
        console.log(personalData);

    }

    function handleInput(e) {
        const { name, value } = e.target;
        setRegister1({ ...register1, [name]: value });
    }

    return (
        <div>
            <div style={{ padding: '3%' }}><TopHeader /></div>
            <div style={{ display: 'flex', width: '94%', padding: '3%' }}>
                <div style={{ width: '50%' }}>
                    <h1>Update Your Booking</h1>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Name:</label><br />
                        <input type='text' id='name' name='name' defaultValue={personalData[0].name} onChange={handleInput} /><br />

                        <label>Email</label><br />
                        <input type='text' id='email' name='email' defaultValue={personalData[0].email} onChange={handleInput} /><br />

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
                        <input style={{ marginTop: '1%' }} type='number' id='phone' name='phone' defaultValue={personalData[0].phone} onChange={handleInput} /><br />


                        <div className='adultschildren'>
                            <label>Numbers of Adults</label>
                            <label style={{ marginLeft: "19%" }}>Number of Childrens</label><br />
                            <input type='text' name='numberofadult' defaultValue={personalData[0].numberOfadults} onChange={handleInput} />
                            <input style={{ marginLeft: "6%" }} type='text' name='numberOfchild' defaultValue={personalData[0].numberOfchild} onChange={handleInput} />
                        </div>

                        <label>Payment Method</label><br />
                        <select className='optioncss' name='paymentmethod' onChange={handleInput}>
                            <option value={personalData[0].paymentmethod}>{personalData[0].paymentmethod}</option>
                            <option value={'visacard'}>Visa Card</option>
                            <option value={'mastercard'}>Master Card</option>
                        </select>
                        <button className='confirmBtn' type='submit'>Update</button>
                    </form>


                </div>


                <div style={{ width: '50%' }}>
                    <img style={{ width: '90%' }} src={userData.image} />
                </div>
            </div>
        </div>
    )
}
