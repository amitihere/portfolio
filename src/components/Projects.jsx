import React from 'react'
import '../designs/Projects.css'

export default function Projects() {
    const content = [{
        id: 1,
        name: 'SportsHub',
        url: 'https://sportsweb2-henna.vercel.app/#',
        para: 'Provides a convenient way to book table tennis and badminton sessions online.It is a online website for a sports complex built with classic UILets users browse available time slots, select their preferred sport, and confirm bookings instantly.Offers a modern, responsive, and user-friendly interface for both regular players and first-time visitors.',
        lang: 'HTML | CSS | JAVASCRIPT | REACT'
    },
    {
        id: 2,
        name: 'Wedding Photography',
        url: 'https://lakshith7748.github.io/Wedding-S-W/',
        para: 'A photography website showcasing three diverse wedding cultures: Punjabi, Malayali, and Rajasthani.Built as a team project to simulate real-world company collaboration and teamwork.Provides visitors with an engaging visual experience highlighting cultural traditions and photography styles.',
        lang: 'HTML | CSS'
    },
    {
        id: 3,
        name: 'FlexIt',
        url: 'https://drive.google.com/file/d/1wQ8sJGmxZn0wT2QXJfkURZKYguM3OLaw/view',
        para: 'Allows players to check and book available sports slots.Displays details of ongoing and upcoming sports competitions in the user’s locality.View the sports venues around India along with the cometitions around you by accessing your current location.',
        lang: 'JAVASCRIPT | REACT NATIVE'
    },
    {
        id: 4,
        name: 'MINI PLACEMENT PORTAL',
        url: 'cmg soon',
        para: 'For the Companies , they can perform the CRUD operations on the jobs they post and handle the students who apply to there jobs.for the students, they can see the jobs and apply accordingly based on their skills.Resume pipeline , for the students to see the status of the job application i.e , they are approved by the company or not ',
        lang: 'JAVASCRIPT | REACT | EXPRESS | PRISMA'
    },
    {
        id: 5,
        name: 'Portfolio',
        url: 'this is the app',
        para: 'The portfolio about my work',
        lang: 'HTML | CSS | JAVASCRIPT | REACT'
    }
    ]
    return (
        <div className='whole'>
            <div className='container'>
                {content.map((data) => {
                    return (

                        <div className='cards'>
                            <h2>Title: {data.name}</h2>
                            <h3>Link: <a onClick={() => { window.open(`${data.url}`) }}>{data.url}</a></h3>
                            <p>{data.para}</p>
                            <h2>Languages used: {data.lang}</h2>
                        </div>

                    )

                })}
            </div>
        </div>
    )
}
