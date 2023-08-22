import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Test = () => {
    const [countryState, setCountryState] = useState({
        loading: false,
        countries: [],
        errorMessage: "",
    });

    useEffect(() => {
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

        fetchData();
    }, []);

    const { loading, errorMessage, countries } = countryState;
    console.log(countries);
    const [selectedCountry, setSelectedCountry] = useState();

    //   find selected country data
    //search selected country
    const searchSelectedCountry = countries.find((obj) => {
        if (obj.name.common === selectedCountry) {
            return true;
        }
        return false;
    });

    return (
        <React.Fragment>
            <section>

                <div>
                    <select
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
                </div>
                <div>
                    {searchSelectedCountry && (
                        <div>
                            <p>
                                {searchSelectedCountry &&
                                    searchSelectedCountry.idd.root}
                                {searchSelectedCountry &&
                                    searchSelectedCountry.idd.suffixes}
                            </p>
                        </div>
                    )}
                </div>


            </section>
        </React.Fragment>
    );
};

export default Test;