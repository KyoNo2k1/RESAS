import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './style.css'
import * as api from '../../../app/api'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'


function ChartList({infoCity}) {
    const initialState = []
    const [dataDis, setDataDis] = useState(initialState)
    const data = {
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
    const fetchData =() => {
        infoCity.map(async (city) => {
            const data = await api.fetchDataDis(city.cityCode,city.prefCode) .then((data) => data.data.result.data[0])
            const newDataFetch =
                {
                    data:[data.data[0]?.value,data.data[1]?.value,data.data[2]?.value,data.data[3]?.value,data.data[4]?.value,data.data[5]?.value,data.data[6]?.value,data.data[7]?.value,data.data[8]?.value],
                    label: city.cityName,
                    borderColor: `#${Math.floor(Math.random()*16777215).toString(16)}`,
                    fill: false
                }
            setDataDis([...dataDis,newDataFetch])
        })
    }
    console.log(dataDis);

    useEffect(() => {
        setDataDis(initialState)
        console.log(dataDis);
        fetchData()
    },[infoCity])
    return(
        <div className="chart">
            <Line data={data} options={options}/>
        </div>
    )
}

export default ChartList;

