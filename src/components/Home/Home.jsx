import React,{ useState } from 'react';
import './style.css'
import Chart from './Chart/Chart';
import List from './List/List';

function Home() {
    const [infoCity, setInfoCity] = useState([])
    return(
        <div className="home">
            <List infoCity={infoCity} setInfoCity={setInfoCity}/>
            {
                infoCity.length>0 ? <Chart infoCity={infoCity} /> : <div className="noCity">Chọn thành phố bạn muốn xem!</div>
            }
        </div>
    )
}

export default Home;
