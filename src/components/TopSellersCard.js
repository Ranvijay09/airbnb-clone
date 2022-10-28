import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


import { AiFillStar } from 'react-icons/ai';
import { FaRegHeart } from 'react-icons/fa';
import {
    flexBetween,
    dFlex,
    fixedIcon,
    carouselImage,
} from '../themes/commonStyles';

const TopSellersCard = ({ location }) => {
    return (
        <Box
            sx={{
                flexGrow: 1,
                position: 'relative',
                height: '450px',
                width: '220px',
                mr: 1
            }}
        >
            <Box sx={fixedIcon}>
                <FaRegHeart size={24} color="#fff"/>
            </Box>
            <div key={location.locationImages[0].id}>
                <Box
                    component="img"
                    sx={carouselImage}
                    src={location.locationImages[0].url}
                    alt={location.locationImages[0].id}
                ></Box>
            </div>
            <Box sx={{ mt: 2 }}>
                <Box sx={dFlex}>                    
                    <AiFillStar size={18} />
                    <Typography component="h5"> {location.rating}</Typography>
                    <Typography component="h5"> (102) &#8226;</Typography>
                    <Typography component="h3"> {location.location}</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default TopSellersCard;