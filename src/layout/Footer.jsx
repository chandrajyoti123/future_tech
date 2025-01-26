import React from 'react';
import { Box, Grid2, Typography, Button, Badge } from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { BORDER_STYLE } from '../shared/constants';
const Footer = () => { 
    const data = [
        {
            heading: "Home",
            lists: [
                { listname: "feautures", isnew: false },
                { listname: "Blogs", isnew: false },
                { listname: "Resources", isnew: true },
                { listname: "testimonial", isnew: false },
                { listname: "contact Us", isnew: false },
                { listname: "Newsletter", isnew: false }
            ]
        },
        {
            heading: "News",
            lists: [
                { listname: "Trading Stories", isnew: false },
                { listname: "Featured Videos", isnew: false },
                { listname: "Technology", isnew: false },
                { listname: "Health", isnew: false },
                { listname: "Politics", isnew: false },
                { listname: "Environment", isnew: false }
            ]
        },
        {
            heading: "Blogs",
            lists: [
                { listname: "Quantum Computing", isnew: false },
                { listname: "AI Ethics", isnew: false },
                { listname: "Space Exploration", isnew: false },
                { listname: "BioTechnology", isnew: true },
                { listname: "Renewable Energy", isnew: false },
                { listname: "Biohacking", isnew: false }
            ]

        },
        {
            heading: "Podcasts",
            lists: [
                { listname: "AI Revolution", isnew: false },
                { listname: "AI Revolution", isnew: true },
                { listname: "TechTalks AI", isnew: false },
                { listname: "AI Conversation", isnew: false }
            ]

        },
    ]
    return (
        <Box sx={{ paddingX: "162px", backgroundColor: "primary.main" }}>
            <Box sx={{ paddingY: "80px", borderBottom: BORDER_STYLE }}>
                <Grid2 container >
                    {
                        data.map((item, index) => (
                            <Grid2 size={2.4}>
                                <Typography variant='body1' color='text.primary' sx={{ mb: "20px" }}>{item.heading}</Typography>
                                {
                                    item.lists.map((item, index) => (
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <Typography variant='body2' color='text.secondary' sx={{ my: "10px" }}>{item.listname}</Typography>
                                            {item.isnew && <Badge
                                                badgeContent="New"
                                                variant='body2'
                                                sx={{
                                                    px: "12px",
                                                    py: "8px",
                                                    "& .MuiBadge-badge": {
                                                        color: "text.primary",
                                                        backgroundColor: "transparent",
                                                        border: BORDER_STYLE,
                                                        borderRadius: "6px",
                                                    },
                                                }}
                                            />
                                            }
                                        </Box>
                                    ))
                                }

                            </Grid2>

                        ))
                    }
                    <Grid2 size={2.4}>
                        <Typography variant='body1' color='text.primary' sx={{ mb: "20px" }}>Resources</Typography>
                        {
                            ["WhitePaper", " Ebooks", " Reports", " Research Paper"].map((item, index) => (
                                <Box sx={{ my: "15px" }}><Button variant='outlined' endIcon={<CallMadeIcon sx={{ color: "warning.main" }} />} >{item}</Button></Box>
                            ))
                        }
                    </Grid2>
</Grid2>
            </Box>
            <Box sx={{ paddingY: "40px", display: "flex", justifyContent: "space-between" }}>
                <Typography variant='body2' color='text.secondary'>Terms & Conditions | Privacy Policy</Typography>
                <Box><LinkedInIcon sx={{ color: "text.primary" }} /> <TwitterIcon sx={{ color: "text.primary" }} /> <YouTubeIcon sx={{ color: "text.primary" }} /></Box>
                <Typography variant='body2' color='text.secondary'> <Typography variant='body2' color='text.secondary'>Terms & Conditions | Privacy Policy</Typography></Typography>

            </Box>
        </Box>
    )
}

export default Footer
