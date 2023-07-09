import React from 'react';
import Stack from './Stack';
import Typography from './Typography';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white py-4 mt-20 ">

      <Stack justifyContent='between'>
        <Stack gap={3} margin="ml-20">
        <Typography > 
          About Us
        </Typography>
        <Typography> 
          Blog
        </Typography>
        </Stack>
 
      <Typography variant='normal' className='text-[18px] text-center mr-4'>
        &copy; 2023 Metadapp - All rights reserved.
        </Typography>
      </Stack>
     

    </footer>
  );
};

export default Footer;
