import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './style.css'
import * as api from '../../../app/api'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'


function ChartList() {
    const [dataDis, setDataDis] = useState([])
    const data = {
        labels: ["1980","1990","2000","2010","2020"],
        datasets: dataDis,
    }
    const options={
        title: {
            display: true,
            text: "Biểu đồ thể hiện dân số Nhật Bản"
        },
        legend: {
            display: true,
            position: "bottom"
        }
    }

    useEffect(async () => {
        const data = await api.fetchDataDis(11362,11)
        setDataDis([
            {
                data:[data.data.result.data[0].data[0].value,data.data.result.data[0].data[2].value,data.data.result.data[0].data[4].value,data.data.result.data[0].data[6].value,data.data.result.data[0].data[8].value], 
                label: "1",
                borderColor: `#${Math.floor(Math.random()*16777215).toString(16)}`,
                fill: false
            },
            {
                data:[data.data.result.data[0].data[0].value,data.data.result.data[0].data[2].value,data.data.result.data[0].data[4].value,data.data.result.data[0].data[6].value,data.data.result.data[0].data[8].value], 
                label: "2",
                borderColor: `#${Math.floor(Math.random()*16777215).toString(16)}`,
                fill: false
            }])
    },[])
    console.log(data);
    // console.log(Math.floor(Math.random()*16777215).toString(16));
    return(
        <div className="chart">
            <Line data={data} options={options}/>
        </div>
    )
}

export default ChartList;

