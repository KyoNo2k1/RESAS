import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './style.css'
import * as api from '../../../app/api'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'


function ChartList({infoCity}) {
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
            <div style={{position: "relative", marginRight: "20px"}}>
                <Line data={data} options={options}/>
                <span style={{position: "absolute", bottom: "20px", right: "-15px", fontWeight: "bold", fontSize: "1.2rem"}}>年</span>
                <span style={{position: "absolute", top: "-10px", left: "20px", fontWeight: "bold", fontSize: "1.2rem"}}>人口</span>
            </div>
        </div>
    )
}

export default ChartList;

