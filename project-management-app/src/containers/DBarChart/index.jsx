import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Grid, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store';
import { dbChartStyles } from './dBarChatStyles';
import fetchBarGraphData from '../../api/barGraph.service';

const HorizontalChart = () => {
    const dispatch = useAppDispatch();
    const [chartOptions, setChartOptions] = useState({});
    const [percentages, setPercentages] = useState([]);

    const { data } = useAppSelector((state) => state.barGraphState);

    useEffect(() => {
        const fetchData = async () => {

                await dispatch(fetchBarGraphData());

            const filteredData = data?.departmentWise?.filter((item) => item.closedProjects > 0);
            if (filteredData) {
    
                const calculatedPercentages = filteredData?.map((item) => {
                    return ((item.closedProjects / item.totalProjects) * 100).toFixed(2);
                });
                setPercentages(calculatedPercentages);
    
                const chartType = window.innerWidth < 768 ? 'bar' : 'column';
                const chartHeight = window.innerWidth < 768 ? '600px' : '400px';
    
                setChartOptions({
                    chart: {
                        type: chartType, 
                        height: chartHeight,
                        style: { borderRadius: '10px' },
                        spacingTop: 30,
                        spacingRight: 30,
                        spacingBottom: 30,
                        spacingLeft: 30,
                    },
                    title: {
                        text: '',
                    },
                    xAxis: {
                        labels: {
                            useHTML: true,
                            formatter: function () {
                                const index = this.pos;

                                return `${this.value}<br/><span style="font-weight: bold; color: #333;">${percentages[index]}%</span>`;
                            },
                            style: {
                                fontSize: '12px',
                                fontWeight: 'bold',
                                padding: '5px',
                            },
                        },
                        categories: filteredData?.map((item) => item.department),
                        lineColor: 'gray',
                        lineWidth: 1,
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: '',
                            align: 'high',
                        },
                        lineColor: 'gray',
                        lineWidth: 1,
                    },
                    plotOptions: {
                        series: {
                            pointWidth: 10,
                            pointPadding: 0.1,
                            groupPadding: 0.3,
                            borderRadius: 20,
                            dataLabels: {
                                enabled: true,
                                formatter: function () {
                                    return this.y;
                                },
                                style: {
                                    fontWeight: 'bold',
                                    color: '#333',
                                },
                                verticalAlign: 'bottom',
                            },
                        },
                    },
                    legend: {
                        position: 'bottom',
                    },
                    series: [
                        {
                            name: 'Total',
                            data: filteredData.map((item) => item.totalProjects),
                            color: '#025AAB',
                        },
                        {
                            name: 'Closed',
                            data: filteredData.map((item) => item.closedProjects),
                            color: '#5AA647',
                        },
                    ],
                });
            }
        };
    
        fetchData();
    }, [dispatch, data]);
    

    return (
        <Grid>
            <Grid item sx={{...dbChartStyles.chartMainContainer , marginBottom:{xs:'300px'}}}>
                <Grid item>
                    <Typography sx={dbChartStyles.chartInfo}>
                        Department wise - Total Vs Closed
                    </Typography>
                </Grid>
                <Grid item sx={dbChartStyles.barGraph}>
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={chartOptions}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default HorizontalChart;
