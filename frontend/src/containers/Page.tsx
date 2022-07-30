import React from 'react';
import { Box, Typography } from '@mui/material';
import useApiQuiz from '../hooks/useApiQuiz';

function Page() {
  const { isLoading } = useApiQuiz();
  return (
    <Box>
      {isLoading ? (
        <Typography>Loading</Typography>
      ) : (
        <Typography>done</Typography>
      )}
    </Box>
  );
}

export default Page;
