import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {
  carouselImage,
} from '../themes/commonStyles';

import { newThisWeekItems } from '../data/dummyData';


const NewThisWeek = () => {
  return <Container maxWidth="xl">
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
        px: { xs: 0, md: 2 },
        alignItems: 'center',
        mt: 2,
        mb: 2,
      }}
    >
    <Typography
      sx={{
        ml: 1,
        color: theme => theme.palette.primary.main,
        fontSize: '30px',
        fontWeight: 'bolder'
      }}
      component="h1"
    >
      New this week
    </Typography>
  </Box>
    <Box
      sx={{
        display: 'flex',
        flexGrow: 1,
        px: { xs: 0, md: 2 },
        alignItems: 'center',
        mt: 2,
        mb: 2,
      }}
    >
    
      <div style={{ width: "100%", overflow: "scroll", display: "flex"}}>
        {newThisWeekItems.map((item) => {
          return (
            <Grid key={item.id} item sx={{mr: 1}}>
                <Box
                  component="img"
                  sx={{
                    ...carouselImage,
                    height: '460px',
                    width: '740px'
                  }}
                  src={item.imageUrl}
                  alt={item.id}
                ></Box>
              </Grid>
          );
        })}
      </div>
      </Box>
  </Container>
}

export default NewThisWeek