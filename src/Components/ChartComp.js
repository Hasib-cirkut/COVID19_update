import React from 'react'

import {Doughnut} from 'react-chartjs-2';




export default function ChartComp(props){
    
    let { confirm, death, recover } = props.data;
    
    const data = {
        labels: [
            'Confirmed',
            'Recoverd',
            'Deaths',
        ],
        datasets: [{
            data: [confirm,recover,death  ],
            backgroundColor: [
                '#0099ff',
                '#99f53d',
                '#ec1313',
            ],
            hoverBackgroundColor: [
                
                
                '#0052cc',
                '#39e600',
                '#ff0066',
            ]
        }]
    };
    
    return <Doughnut data={data} />
}