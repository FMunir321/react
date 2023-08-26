import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const Test = () => {

    // let date_raw = newDate.getDate();
    date_create: moment().format("DD-MM-YYYY hh:mm:ss")

    return (
        <div>test page</div>
    );
};

export default Test;