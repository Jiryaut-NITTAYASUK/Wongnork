import React, {useState, useEffect } from "react";
import yelpApi from "./yelpApi";

export default () => {
    const [results, setResults] = useState([]);
    const [errMessage, setErrMessage] = useState("");

    const searchFunc = async searchTerm => {
        try {
        const response = await yelpApi.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'Los Angles',
            },
        });
        setResults(response.data.businesses); 
        } catch (err){
            setErrMessage("Something worng happened!")
        }
        console.log(results);
    };

    useEffect(() => {
        searchFunc("Pizza");
    }, []);

    return [searchFunc, results, errMessage];
};