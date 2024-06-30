import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const LoadingScreen = () => {
  return (
    <div className='bg-[#F4EBDC] w-full h-screen flex justify-center items-center '>
         <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
    </div>
  )
}

export default LoadingScreen