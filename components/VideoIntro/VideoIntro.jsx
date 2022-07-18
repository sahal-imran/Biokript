import React, { useEffect } from 'react';
import Box from "@mui/material/Box";
import ReactPlayer from 'react-player';
import { useRouter } from 'next/router';

function VideoIntro() {

  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/home')
    }, 8000);

  }, [])




  return (
    <Box className='player-wrapper' sx={{ width: '100%', height: '100vh', overflow: 'hidden', position: 'relative', background: 'black' }}>
      <ReactPlayer
        className='react-player'
        url={'/video/video.mp4'}
        width='100%'
        height='100%'
        volume={0.1}
        muted={true}
        playing={true}
        onEnded={() => router.push('/home')}
      // controls={true}
      // loop={false}
      />
      {/* <video width="100%" height="100%" muted autoPlay>
        <source src="/video/video.mp4" type="video/mp4" />
        <source src="/video/video.egg" type="video/ogg" />
      </video> */}
    </Box>
  )
}

export default VideoIntro