import React,{useEffect} from 'react';
import Box from "@mui/material/Box";
import ReactPlayer from 'react-player';
import { useRouter } from 'next/router';

function VideoIntro() {

    const router = useRouter();
    useEffect(() => {
      setTimeout(() => {
        router.push('/home');
      }, 7000);
    
      return () => {
        // setTimeout()
      }
    }, [])
    

    return (
        <Box className='player-wrapper' sx={{ width: '100%', height: '100vh', overflow: 'hidden', position: 'relative', background: 'black' }} >
            <ReactPlayer
                className='react-player'
                url='/video/video2.mp4'
                width='100%'
                height='100%'
                // volume={0.1}
                controls={false}
                muted={false}
                playing={true}
                loop={false}
            />
        </Box>
    )
}

export default VideoIntro