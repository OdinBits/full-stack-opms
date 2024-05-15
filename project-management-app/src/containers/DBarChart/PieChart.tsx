import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { Grid, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from '../../store';
import { dbChartStyles } from './dBarChatStyles';
import { practiceApi } from '../../api/practiceApi';
import fetchBarGraphData from '../../api/barGraph.service';

const PieChart = () => {
    const dispatch = useAppDispatch();
    const [chartOptions, setChartOptions] = useState({});

    const { data } = useAppSelector((state) => state.barGraphState);

    useEffect(() => {
        const fetchData = async () => {

                await dispatch(fetchBarGraphData());
            

            const filteredData = data?.departmentWise?.filter((item:any) => item.closedProjects > 0);

            const pieData = filteredData?.map((item:any) => ({
                name: item.department,
                y: item.closedProjects
            }))

            setChartOptions({
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: '',
                },
                tooltip: {
                    pointFormat: '{series.name}: <b>{point.y}</b>'
                },
                accessibility: {
                    point: {
                        valueSuffix: ''
                    }
                },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        cursor: 'pointer',
                        dataLabels: {
                            enabled: true,
                            format: '<b>{point.name}</b>: {point.y}'
                        }
                    }
                },
                series: [{
                    name: 'Closed Projects',
                    colorByPoint: true,
                    data: pieData
                }]
            });

            ;
        };

        fetchData();
    }, [dispatch,data]);

    return (
        <Grid >
            <Grid item sx={{...dbChartStyles.chartMainContainer,marginBottom:{xs:'30px'}}}>
                <Grid item>
                    <Typography sx={dbChartStyles.chartInfo}>
                        Department wise PieChart - Closed
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

export default PieChart;
