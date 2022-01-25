import React,{ useState } from 'react';
import './style.css'
import Chart from './Chart/Chart';
import List from './List/List';

function Home() {
    const [infoCity, setInfoCity] = useState([])
    return(
        <div className="home">
            <List infoCity={infoCity} setInfoCity={setInfoCity}/>
            <Chart infoCity={infoCity} />
        </div>
    )
}

export default Home;
