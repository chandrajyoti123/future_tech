import React from 'react'
import { Box, Card, CardContent, Typography } from '@mui/material'
import GradeIcon from '@mui/icons-material/Grade';
import { BORDER_STYLE } from '../constants';
const ReviewCard = ({ img, name, address, review, reviewrate }) => {

  return (
    <Card sx={{ py: "80px", bgcolor: "transparent", border: "none", boxShadow: 'none' }}>
      <CardContent sx={{ display: "flex", justifyContent: "center", mb: '40px', alignItems: "center", gap: "10px" }}>
        <img src={img} style={{ width: "70px", height: "70px", borderRadius: "50%" }} />
        <Box>
          <Typography variant='h6'>{name}</Typography>
          <Typography variant='body2' color='text.secondary'>{address}</Typography>
        </Box>
      </CardContent>
      <CardContent
        sx={{
          px: "30px",
          py: "50px",
          border: BORDER_STYLE,
          borderRadius: "12px",
          bgcolor: "secondary.main",
          position: "relative",
        }}
      >
        <Box
          sx={{
            px: "16px",
            py: "10px",
            bgcolor: "primary.main",
            border:BORDER_STYLE,
            borderRadius: "50px",
            position: "absolute",
            top: "-20px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "inline-block",
          }}
        >
          {Array.from({ length: reviewrate }, (_, index) => (
            <GradeIcon key={index} sx={{ color: "warning.main" }} />
          ))}
        </Box>
        <Typography variant="body2">{review}</Typography>
      </CardContent>
    </Card>
  )
}

export default ReviewCard
