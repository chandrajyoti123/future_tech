import { Box, Grid2 } from '@mui/material';
import React from 'react';
import ReviewCard from '../../shared/components/ReviewCard';
import { Constants } from '../../shared/constants';
import { BORDER_STYLE } from '../../shared/constants';


const Review = () => {
  const data = [
    {
      img: Constants.customImages.Img1,
      name: 'Sarah Thompson',
      address: 'San Francisco, USA',
      review:
        'The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.',
      reviewcount: 5,
    },
    {
      img: Constants.customImages.Img2,
      name: 'Raj Patel',
      address: 'Mumbai, India',
      review:
        'The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions.',
      reviewcount: 5,
    },
    {
      img: Constants.customImages.Img3,
      name: 'Emily Adams',
      address: 'London, UK',
      review:
        'The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.',
      reviewcount: 5,
    },
    {
      img: Constants.customImages.Img4,
      name: 'Alan Jackson',
      address: 'Houston, USA',
      review:
        'The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth.',
      reviewcount: 5,
    },
    {
      img: Constants.customImages.Img5,
      name: 'Jessica Miller',
      address: 'Boston, USA',
      review:
        "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics.",
      reviewcount: 5,
    },
    {
      img: Constants.customImages.Img6,
      name: 'Diego Lopez',
      address: 'Barcelona, Spain',
      review:
        'The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.',
      reviewcount: 5,
    },
  ];

  const gridStyles = {
    px: '40px',
    display: 'flex',
    alignItems: 'stretch',
    flex: 1,
  };

  const containerStyles = {
    px: '162px',
    borderBottom: BORDER_STYLE,
  };

  const getBorderStyle = (index) =>
    index === 0 || index === 1 ? BORDER_STYLE : 'none';

  return (
    <Box sx={{ backgroundColor: 'primary.main' }}>
      <Grid2 container sx={containerStyles}>
        {data.slice(0, 3).map((item, index) => (
          <Grid2
            key={index}
            sx={{
              ...gridStyles,
              borderRight: getBorderStyle(index),
            }}
          >
            <ReviewCard
              img={item.img}
              name={item.name}
              address={item.address}
              review={item.review}
              reviewrate={item.reviewcount}
            />
          </Grid2>
        ))}
      </Grid2>
      <Grid2 container sx={{ px: '162px' }}>
        {data.slice(3, 6).map((item, index) => (
          <Grid2
            key={index}
            sx={{
              ...gridStyles,
              borderRight: getBorderStyle(index),
            }}
          >
            <ReviewCard
              img={item.img}
              name={item.name}
              address={item.address}
              review={item.review}
              reviewrate={item.reviewcount}
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Review;
