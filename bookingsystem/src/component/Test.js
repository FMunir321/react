import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";
import { tourData } from "./data";
import { useForm } from "react-hook-form";

function Test() {
    const personalData = [
        { firstname: 'Faisal', email: 'abc' }
    ]
    const [updateState, setUpdateState] = useState([]);

    function pushData(data) {
        setUpdateState(personalData[0]);
    }
    function handleInput(e) {
        const { name, value } = e.target;

        setUpdateState({
            ...updateState,
            [name]: value
        });
    }

    function savetData() {
        console.log(updateState)
    }

    function updateData() {
        console.log('click update button');
        console.log(updateState)
    }

    return (
        <div>test page
            {
                personalData.map((item) => (
                    <div>
                        <p>{item.firstname}</p><br />
                        <p>{item.email}</p>
                        <button onClick={() => pushData(item)}>Edit</button>
                    </div>
                ))
            }

            <form>
                <label>Name:</label><br />
                <input type='text' id='email' name='firstname' value={updateState.firstname} onChange={handleInput} ></input><br />

                <label>Email</label><br />
                <input type='text' id='email' name='email' value={updateState.email} onChange={handleInput} ></input><br />

            </form>
            <button onClick={updateData}>Save</button>
        </div>
    );
};

export default Test;