import React from 'react';
import { tokens } from '../../theme';
import { useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/material';

export default function CreateMemberImg({ fullname, radius }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery('(min-width:600px)');
  let imgSrc = '';
  //const size = isNonMobile ? 90 : 20;

  const getInitials = name => {
    return name
      .split(' ')
      .map(name => name[0])
      .join('')
      .toUpperCase();
  };

  const createImageFromInitials = (size, name, color) => {
    if (name == null) return;
    name = getInitials(name);
    //console.log('name', name);

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = canvas.height = size;

    context.fillStyle = colors.blueAccent[600];
    context.fillRect(0, 0, size, size);

    context.fillStyle = color;
    context.textBaseline = 'middle';
    context.textAlign = 'center';
    context.font = `${size / 2}px Roboto`;
    context.fillText(name, size / 2, size / 1.8);

    return canvas.toDataURL();
  };
  const imgStyle = {
    maxWidth: '100%',
    //aspectRatio: '1/1',
    borderRadius: radius,
    //fontSize: '35px',
    //textAlign: 'center',
    //lineHeight: '150px',
  };

  return (
    <img
      id="preview"
      style={{ ...imgStyle }}
      src={
        imgSrc.length <= 0
          ? createImageFromInitials(
              250,
              getInitials(fullname),
              colors.primary[100],
            )
          : imgSrc
      }
      alt="profile-pic"
    />
  );
}
