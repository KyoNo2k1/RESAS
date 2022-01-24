import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './style.css'
import * as api from '../../../app/api'
function Chart() {
    const [dataDis, setDataDis] = useState([])
    useEffect(() => {
        api.fetchDataDis(11362,11) .then((data) => setDataDis([{year:data.data.result.data[0].data[0].year,value:data.data.result.data[0].data[0].value},{year:data.data.result.data[0].data[2].year,value:data.data.result.data[0].data[2].value},{year:data.data.result.data[0].data[4].year,value:data.data.result.data[0].data[4].value},{year:data.data.result.data[0].data[6].year,value:data.data.result.data[0].data[6].value},{year:data.data.result.data[0].data[8].year,value:data.data.result.data[0].data[8].value}]))
    },[])

    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, {name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
    console.log(dataDis);
    console.log(Math.floor(Math.random()*16777215).toString(16));
        return  <div className="chart">
                <LineChart width={600} height={300} data={dataDis} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="value" stroke="red" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
}

export default Chart;

