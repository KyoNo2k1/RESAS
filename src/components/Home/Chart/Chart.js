import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './style.css'
import * as api from '../../../app/api'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'


function ChartList({infoCity}) {

    var data1 = [
        {
            data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
            label: "Africa",
            borderColor: "#3e95cd",
            fill: false
        },
        {
            data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
            label: "Asia",
            borderColor: "#8e5ea2",
            fill: false
        },
        {
            data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
            label: "Europe",
            borderColor: "#3cba9f",
            fill: false
        },
        {
            data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
            label: "Latin America",
            borderColor: "#e8c3b9",
            fill: false
        },
        {
            data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
            label: "North America",
            borderColor: "#c45850",
            fill: false
        }
    ]

    const [dataDis, setDataDis] = useState([])
    var data = {
        labels: ["1980","1985","1990","1995","2000","2005","2010","2015","2020"],
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
    const fetchData =(infoCityData) => {
        var arrData = []
        infoCityData?.map(async (city) => {
            const data = await api.fetchDataDis(city.cityCode,city.prefCode) .then((data) => data.data.result.data[0])
            const newDataFetch ={
                data:[data.data[0]?.value,data.data[1]?.value,data.data[2]?.value,data.data[3]?.value,data.data[4]?.value,data.data[5]?.value,data.data[6]?.value,data.data[7]?.value,data.data[8]?.value],
                label: city.cityName,
                borderColor: `#${Math.floor(Math.random()*16777215).toString(16)}`,
                fill: false
            }
            arrData.push(newDataFetch)
        })
        setTimeout(() => {
            setDataDis(arrData);
        },1000)
    }

    useEffect(() => {
        fetchData(infoCity)
    },[infoCity])
    return(
        <div className="chart">
            <Line data={data} options={options}/>
        </div>
    )
}

export default ChartList;

