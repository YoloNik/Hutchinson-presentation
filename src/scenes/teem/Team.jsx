import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { tokens } from '../../theme';
import { useTheme, Box } from '@mui/material';
import Header from '../../components/Header';

function Team() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
      rows: 2,
      cols: 2,
      featured: true,
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
      cols: 2,
    },
  ];

  return (
    <Box m="20px">
      <Header title="My Team" />
      <ImageList cols={4} gap={20} sx={{ padding: '20px' }}>
        {/*<ImageListItem key="team">*/}
        {/*<ListSubheader component="div">December</ListSubheader>*/}
        {/*</ImageListItem>*/}
        {itemData.map(item => (
          <ImageListItem
            sx={{
              ':hover': {
                boxShadow: `0px 0px 10px ${colors.grey[100]};`,
                transform: 'scale(1.05)',
              },
              borderRadius: '8px',
              overflow: 'hidden',
            }}
            key={item.img}
          >
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

export default Team;
