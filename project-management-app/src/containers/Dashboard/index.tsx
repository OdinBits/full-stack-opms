import React from 'react';
import HorizontalChart from '../DBarChart';
import { useAppDispatch, useAppSelector } from '../../store';
import { getDashboardDataThunk } from '../../api/getDashboardData.service';
import { generateCardData } from '../../interfaces/CardData';
import { dashboardStyles } from './dashboardStyles';
import { barChartStyle } from '../DBarChart/barChartStyle';
import FeedBackWindow from '../../components/FeedBacks/CustomError';
import DashCard from '../../components/DashBoardCard/DashCard';
import { Box , Grid , Typography } from '@mui/material';
import PieChart from '../DBarChart/PieChart';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  React.useEffect(() => {
    dispatch(getDashboardDataThunk());
  }, [dispatch]);

  const { email} = useAppSelector((state) => state.auth);
  const { data, error } = useAppSelector(state => state.dashboradState);

  // const newEmail = email.slice('@')[0];

  if (error) return <FeedBackWindow message="Error loading dashboard data" />;


  const cardData = generateCardData(data);

  return (
    <Box>
      
      <Box>
        <Grid className='fade-in-out' sx={dashboardStyles.mainContainer}>
          {cardData.map((card) => (
            <DashCard title={card.title} value={card.value} key={card.title} />
          ))}
        </Grid>
        <Grid item mt={3} className='fade-in-out' sx={barChartStyle} >
          <HorizontalChart />
          <PieChart/>
          {/* <PracticeLists/> */}
          {/* <PracticeLists2 /> */}
          {/* <HorizontalChart  state={'reason'}/> */}
        </Grid>
      </Box>
    </Box>
  );
};
export default Dashboard;
