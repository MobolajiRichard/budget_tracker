import React from 'react'
import {Card, CardHeader, CardContent, Typography} from '@mui/material'
import {Doughnut} from 'react-chartjs-2'
import useTransactions from '../../useTransactions'
import {Chart, ArcElement, Tooltip, Title, Legend} from 'chart.js'
Chart.register(ArcElement, Tooltip, Title, Legend);

const Details = ({color, title}) => {
 const {total, chartData} = useTransactions(title)

 console.log('chart', chartData.datasets[0].data.length);
  return (
    <div className='details-container'>
        <Card sx={{
            borderBottom: `5px solid ${color}`,
  
        }}>
            <CardHeader title={<p>{title} - &#8358;{total}</p>}/>
            <CardContent >
                {(chartData.datasets[0].data.length !== 0) && <Doughnut
                 data={chartData} 
                 />}
            </CardContent>
        </Card>
    </div>
  )
}

export default Details