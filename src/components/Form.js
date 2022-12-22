import React,{useEffect, useState} from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box } from '@mui/material';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
import BasicInfo from './BasicInfo';

const Form = () => {
    const[page,setPage]=useState(1)
    const[basicinfo,setBasicinfo]=useState("")
    const[bodyinfo,setBodyinfo]=useState("")
    
  return (<Stack direction="row" >
    { <Timeline position='left' sx={{mt:"50px"}}>
         <TimelineItem >
             <TimelineSeparator>
                 <TimelineDot variant="outlined" />
                 <TimelineConnector/>
             </TimelineSeparator>
             <TimelineContent>
                 <BasicInfo/>
             </TimelineContent>
         </TimelineItem>
         <TimelineItem sx={{mr:{sm:"",lg:"5px"}}}>
             <TimelineSeparator>
                 <TimelineDot variant="outlined" />
                 <TimelineConnector/>
             </TimelineSeparator>
             <TimelineContent>
                 <Box></Box>
             </TimelineContent>
         </TimelineItem>
         <TimelineItem sx={{mr:{sm:"",lg:"5px"}}}>
             <TimelineSeparator>
                 <TimelineDot variant="outlined" />
             </TimelineSeparator>
             <TimelineContent>
                 <Box></Box>
             </TimelineContent>
         </TimelineItem>
          </Timeline> }
    </Stack>
    )
}

export default Form
