import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TopSellersCard from './TopSellersCard'
import { locations as cardLocations } from '../data/dummyData';

const TopSellers = () => {
    const [cards] = React.useState(cardLocations);
    if (!cards.length) {
        return null;
    }
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
                    fontSize: '24px',
                    fontWeight: 'bolder'
                }}
                component="h2"
            >
                Top sellers
            </Typography>
        </Box>
        <Box sx={{
            display: 'flex',
            flexGrow: 1,
            px: { xs: 0, md: 2 },
            alignItems: 'center',
            mt: 2,
            mb: 2,
        }}>
            <div style={{ width: "100%", overflow: "scroll", display: "flex" }}>
                    {cards.map((location) => {
                        return (
                            <Grid key={location.id} item xs={12} sm={4} md={4} lg={3}>
                                <TopSellersCard location={location} />
                            </Grid>
                        );
                    })}
                </div>
            </Box>
    </Container>
}

export default TopSellers