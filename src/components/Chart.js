import { createChart, ColorType } from "lightweight-charts";
import React, { useEffect, useRef, useState} from "react";

function Chart(props) {
const [data, setData] = useState([])

useEffect ( () => {
    const fetchData = async () => {
        const response = await fetch(props.url);
        const jsonData = await response.json();
        setData(jsonData); 
        }
        fetchData();
    }, [])

useEffect ( () => { //Another useEffect is needed to make sure on Browse refresh the page is loaded only after data is fetch from DB and then render
    if (data.length > 0){

        const chart = createChart(chartContainer.current, {
            layout: {
                background: { type: ColorType.Solid, color: "white" },
            },
            width: 600,
            height: 300,
        });

        const newSeries = chart.addCandlestickSeries({ 
                lineColor: '#2962FF',
                topColor: '#2962FF',
                bottomColor: 'rgba(41, 98, 255, 0.28)' });

            newSeries.setData(data); 

        chart.timeScale().fitContent();
        return () => [chart.remove()];

    }
},[data]);


const chartContainer = useRef();

return (
            <div ref={chartContainer} >
            </div>
  )
}

export default Chart
