import { useEffect, useState } from "react";
import BASE_URL from "../Config/Config";
import axios from "axios";



const Display = ()=>{

    const [mydata, setMydata]  =useState([]);

    const LoadData = async()=>{
        const api  =`${BASE_URL}/Student/DisplayData`;
        const response = await axios.get(api);
        console.log(response.data);
    }


    useEffect(()=>{
      LoadData();
    },[])

    return(
        <>
        <h1>Display Page</h1>
        
        </>
    )
}

export default Display;