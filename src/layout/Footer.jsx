import React from 'react';
import { Box, Grid2, Typography, Button, Badge, Link } from '@mui/material';
import CallMadeIcon from '@mui/icons-material/CallMade';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { BORDER_STYLE } from '../shared/constants';
const ICON_STYLE = {
    color: 'text.primary',
    fontSize: '24px',
    cursor: 'pointer',
};
const Footer = () => {
    const data = [
        {
            heading: "Home",
            lists: [
                { listname: "Feautures", isnew: false },
                { listname: "Blogs", isnew: false },
                { listname: "Resources", isnew: true },
                { listname: "Testimonial", isnew: false },
                { listname: "Contact Us", isnew: false },
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
                            <Grid2 size={2.4} key={index}>
                                <Typography variant='body1' color='text.primary' sx={{ mb: "20px" }}>{item.heading}</Typography>

                                {item.lists.map((listItem, listIndex) => (
                                    <Box
                                        key={listIndex}
                                        sx={{ display: 'flex', alignItems: 'center' }}
                                    >
                                        <Link
                                            href={listItem.href}
                                            underline="hover"
                                            sx={{
                                                color: 'text.secondary',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            <Typography variant="body2" color='text.secondary' sx={{ my: "10px" }}>{listItem.listname}</Typography>
                                        </Link>
                                        {listItem.isnew && (
                                            <Badge
                                                badgeContent="New"
                                                sx={{
                                                    px: '20px',
                                                    pt: '10px',
                                                    '& .MuiBadge-badge': {
                                                        color: 'text.primary',
                                                        backgroundColor: 'transparent',
                                                        border: BORDER_STYLE,
                                                        borderRadius: '6px',
                                                        p: '15px',

                                                    },
                                                }}
                                            />
                                        )}
                                    </Box>
                                ))}

                            </Grid2>

                        ))
                    }
                    <Grid2 size={2.4}>
                        <Typography variant='body1' color='text.primary' sx={{ mb: "20px" }}>Resources</Typography>
                        {
                            ["WhitePaper", " Ebooks", " Reports", " Research Paper"].map((item, index) => (
                                <Box sx={{ my: "15px" }} key={index}><Button variant='outlined' endIcon={<CallMadeIcon sx={{ color: "warning.main" }} />} >{item}</Button></Box>
                            ))
                        }
                    </Grid2>
                </Grid2>
            </Box>
            <Box sx={{ paddingY: "40px", display: "flex", justifyContent: "space-between" }}>
                <Typography variant='body2' color='text.secondary'>Terms & Conditions | Privacy Policy</Typography>
                <Box><LinkedInIcon sx={ICON_STYLE} /> <TwitterIcon sx={ICON_STYLE} /> <YouTubeIcon sx={ICON_STYLE} /></Box>
                <Typography variant='body2' color='text.secondary'> <Typography variant='body2' color='text.secondary'>Terms & Conditions | Privacy Policy</Typography></Typography>

            </Box>
        </Box>
    )
}

export default Footer
