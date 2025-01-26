import { Box, Button, Grid2, Typography } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import SendIcon from '@mui/icons-material/Send';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { BORDER_STYLE } from '../constants';
import CallMadeIcon from '@mui/icons-material/CallMade';


const ImpressionBadge = ({ children }) => {
    return (
        <Box
            sx={{
                px: "16px",
                py: "10px",
                bgcolor: "secondary.main",
                border: BORDER_STYLE,
                borderRadius: "50px",
                display: "flex",
                gap: "5px"
            }}
        >
            {children}
        </Box>
    );
};

const TechHubCom = ({ img, name, address, date, blogname, blogtext, likecount, commentcount, sharecount, islike }) => {
    return (
        <Grid2 container sx={{ paddingX: "162px", backgroundColor: "transparent", paddingY: "80px", borderTop: BORDER_STYLE, bgcolor: "primary.main" }}>
            <Grid2 size={3}>
                <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <img src={img} style={{ width: "70px", height: "70px", borderRadius: "50%" }} />
                    <Box>
                        <Typography variant='h6'>{name}</Typography>
                        <Typography variant='body2' color='text.secondary'>{address}</Typography>
                    </Box>
                </Box>

            </Grid2>
            <Grid2 size={9} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box>
                    <Typography variant='h6' color='text.secondary' mb={"20px"}>{date}</Typography>
                    <Typography variant='h4'>{blogname}</Typography>
                    <Typography variant='body2' color='text.secondary'>{blogtext}</Typography>
                    <Box sx={{ display: 'flex', gap: '10px', mt: "20px" }}>
                        <ImpressionBadge>
                            {islike ? <FavoriteIcon sx={{ color: "rgba(255, 85, 0, 1)" }} /> : <FavoriteBorderOutlinedIcon sx={{ color: "text.secondary" }} />}
                            <Typography variant='body2' color='text.secondary'>{likecount}</Typography>
                        </ImpressionBadge>
                        <ImpressionBadge>
                            <ChatBubbleIcon sx={{ color: "text.secondary" }} />
                            <Typography variant='body2' color='text.secondary'>{commentcount}</Typography>
                        </ImpressionBadge>
                        <ImpressionBadge>
                            <SendIcon sx={{ color: "text.secondary" }} />
                            <Typography variant='body2' color='text.secondary'>{sharecount}</Typography>
                        </ImpressionBadge>
                    </Box>
                </Box>
                <Button variant='outlined' endIcon={<CallMadeIcon sx={{ color: "warning.main" }} />}> View Blogs</Button>

            </Grid2>

        </Grid2>
    )
}

export default TechHubCom
