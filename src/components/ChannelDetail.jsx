import {useState,useEffect} from 'react';

import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import {Videos,ChannelCard} from './'
import { fetchFromAPI } from '../utils/fetchFromAPI';
//1
const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null);
  const [videos, setvideos] = useState([]);

    const {id} = useParams();

    useEffect (()=>{
      fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data)=>setchannelDetail(data?.item[0]));

      fetchFromAPI(`search?channelId=${id}&part=snippet&order=data`)
      .then((data)=>setvideos(data?.items));

    },[id])

  return (
    <Box minHeight="95vh">
    <Box>
    <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }}
      
         />
         <ChannelCard channelDetial={channelDetail} marginTop="-115px" />

    </Box>
        <Box display="flex" p="2">
          <Box sx={{mr:{sm:'110px'}}} />
          <Videos videos={videos} />

          
        </Box>
    </Box>
  )
}

export default ChannelDetail
