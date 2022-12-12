import React from 'react';
import { useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import { tokens } from '../theme';

function ProblemsBox({ header, body, priority }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Typography color={colors.greenAccent[500]}>{header}</Typography>

      {priority === 'Critical' ? (
        <Typography color={colors.redAccent[500]}>{priority}</Typography>
      ) : (
        <Typography color={colors.redAccent[400]}>{priority}</Typography>
      )}

      <Typography fontWeight={600}>{body}</Typography>
    </>
  );
}

export default ProblemsBox;
