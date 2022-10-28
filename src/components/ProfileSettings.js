import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { BsGlobe } from 'react-icons/bs';
import { AiOutlineMenu } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import { flexCenter, justifyCenter } from '../themes/commonStyles';
import IconButton from '@mui/material/IconButton';

const ProfileSettings = () => {
    return (
        <Box sx={flexCenter}>
            <Button
                sx={{
                    borderRadius: '25px',
                    px: '15px',
                    py: '10px',
                    fontWeight: 'bold',
                    transform: 'translateX(20%)'
                }}
            >
                Become A Host
            </Button>
            <Stack>
                <IconButton
                    sx={{
                        px: '15px',
                        py: '14px', 
                        borderRadius: 20,
                        transform: 'translateX(20%)',
                        color: theme => theme.palette.primary.main,
                    }}>
                    <BsGlobe size={15} />
                </IconButton>
                <Button
                    sx={{
                        ...justifyCenter,
                        borderRadius: 20,
                        border: '1px solid #ddd',
                        px: 0,
                        py: 0,
                    }}
                >
                    <Stack>
                        <AiOutlineMenu size={20}/>
                        <FaRegUserCircle size={20} />
                    </Stack>
                </Button>
            </Stack>
        </Box>
    );
};

export default ProfileSettings;