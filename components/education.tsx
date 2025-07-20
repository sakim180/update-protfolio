import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

import Image from 'next/image';



interface EducationProps {
    id: string;
}


export const Education: React.FC<EducationProps> = ({ id }) => {


    return (
        <>
            <div id={id}  >
                <div className="text-center text-black dark:text-white">
                    <p className="text-4xl sm:text-5xl font-serif font-medium mt-4">Education</p>
                    <p className="mt-2 font-serif font-medium text-lg sm:text-xl">I have done so far</p>
                </div>
                <Timeline position="alternate" >
                    <TimelineItem >
                        <TimelineOppositeContent />
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                      
                            align="right"
                            variant="body2"
                            className='text-sky-400 text-xl sm:text-3xl font-mono font-semibold tabular-nums'
                        >
                            2016-2017
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector className='h-6 sm:h-auto' />
                            <TimelineDot className='h-12 w-12 sm:h-16 sm:w-16'>
                                <Image src="/mawnaSchool.jpeg" alt="" className='rounded-full' width={500} height={500} />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span" className='text-lime-500 text-xl sm:text-3xl font-serif font-medium italic'>
                                Secondary
                            </Typography>
                            <Typography className='mt-4 font-serif text-sm sm:text-xl text-black dark:text-white sm:ml-8'>Secured 84.57% in Secondary Examination, demonstrating commitment, effective time management, and academic prowess. Engaged in a variety of subjects, enhancing critical thinking and problem-solving abilities. Eager to utilize this knowledge in upcoming ventures</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            className='text-sky-400 text-xl sm:text-3xl font-mono font-semibold tabular-nums'
                        >
                            2018-2019
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector className='h-6 sm:h-auto' />
                            <TimelineDot className='h-12 w-12 sm:h-16 sm:w-16'>
                                <Image src="/bccs.jpg" alt="Higher Seconary" className='rounded-full' width={500} height={500} />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span" className='text-lime-500 text-xl sm:text-3xl font-serif font-medium italic'>
                                Higher Secondary
                            </Typography>
                            <Typography className='mt-4 font-serif text-sm sm:text-xl text-black dark:text-white'>Achieved 82% in Higher Secondary Examination, reflecting dedication and academic excellence. Engaged in diverse subjects, honing critical thinking and problem-solving skills. Ready to apply this knowledge in future projects and challenges</Typography>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineOppositeContent
                            sx={{ m: 'auto 0' }}
                            align="right"
                            variant="body2"
                            className='text-sky-400 text-xl sm:text-3xl font-mono font-semibold tabular-nums'
                        >
                            2021-2025
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineConnector className='h-6 sm:h-auto' />
                            <TimelineDot className='h-12 w-12 sm:h-16 sm:w-16'>
                                <Image src="/bwu.jpg" alt="" className='rounded-full' width={500} height={500} />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant="h6" component="span" className='text-lime-500 text-xl sm:text-3xl font-serif font-medium italic'>
                                B.Tech in Computer Science and Engineering with specialization in AI&ML
                            </Typography>
                            <Typography className='mt-4 font-serif text-sm sm:text-xl text-black dark:text-white '>Currently pursuing a Bachelor of Technology degree, specializing in Computer Science and Engineering with a focus on Artificial Intelligence and Machine Learning. Committed to leveraging technology to solve complex problems.</Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </div>
        </>
    )

}
