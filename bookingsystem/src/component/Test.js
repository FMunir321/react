import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { tourData } from "./data";
import { useForm } from "react-hook-form";

function Test() {
    const personalData = [
        { name: 'Faisal', email: 'abc' }
    ]

    const [register1, setRegister1] = useState({});
    // setRegister1(personalData[0]);
    useEffect(() => {
    }, []);


    function handleInput(e) {
        // console.log(e.target);
        const { name, value } = e.target;
        setRegister1({ ...register1, [name]: value });
        console.log(register1);
    }


    function updateData() {
        console.log('click update button');
        console.log(personalData)
    }

    return (
        <div>test page
            <form>
                <label>Name:</label><br />
                <input type='text' id='name' name="name" defaultValue={personalData[0].name} onChange={handleInput} /><br />

                <label>Email</label><br />
                <input type='text' id='email' name="email" defaultValue={personalData[0].name} onChange={handleInput} /><br />
                <button className='confirmBtn' onClick={updateData}>Update</button>
            </form>
        </div>
    );
};

export default Test;