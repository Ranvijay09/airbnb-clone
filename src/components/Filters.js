import React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { grey } from '@mui/material/colors'
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { filtersDataItems } from '../data/dummyData';
import { flexCenter } from '../themes/commonStyles';

const Filters = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth="xl">
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
                <Button variant="outlined"
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        whiteSpace: 'nowrap',
                        border: '1px solid #ddd',
                        borderRadius: 10,
                        textTransform: 'capitalize',
                        py: 1,
                        minWidth: '100px',
                        ml:2,
                        color: 'theme.palette.text.primary',
                    }}
                >
                    Dates
                </Button>
                <Button variant="outlined"
                    sx={{
                        border: '1px solid #ddd',
                        whiteSpace: 'nowrap',
                        borderRadius: 10,
                        textTransform: 'capitalize',
                        py: 1,
                        minWidth: '100px',
                        ml: 2,
                        color: 'theme.palette.text.primary',
                    }}
                >
                    Group size
                </Button>
                <Button variant="outlined"
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        whiteSpace: 'nowrap',
                        border: '1px solid #ddd',
                        borderRadius: 10,
                        textTransform: 'capitalize',
                        py: 1,
                        minWidth: '100px',
                        ml: 2,
                        color: 'theme.palette.text.primary',
                    }}
                >
                    More filters
                </Button>
                <Divider sx={{ ml: 2, }} orientation="vertical" flexItem />
                <Tabs
                    value={value}
                    onChange={handleChange}
                    TabIndicatorProps={{
                        style: { transition: 'none' }
                    }}
                    variant="scrollable"
                    scrollButtons
                    sx={{
                        ...flexCenter,
                        ml: 2,
                        [`& .MuiTabs-indicator`]: {
                            display: "none"
                        },
                        [`& .${tabsClasses.scrollButtons}`]: {
                            border: '1px solid #ddd',
                            borderRadius: 5,
                            py: 1,
                            '&.Mui-disabled': { opacity: 0.3 },
                        },
                    }}
                >
                    {filtersDataItems.map((tab) => {
                        return <Tab wrapped label={tab.label} key={tab.id} sx={{
                            borderRadius: 10,
                            textTransform: 'capitalize',
                            ml: 2,
                            py: 1,
                            backgroundColor: grey[200],
                        }} />
                    })}
                </Tabs>
            </Box>
        </Container>
    );
};

export default Filters;