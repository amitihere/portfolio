import React from 'react'
import '../designs/Projects.css'

export default function Projects() {
    const content = [{
        id: 1,
        name: 'SportsHub',
        url: 'https://sportsweb2-henna.vercel.app/#',
        para: 'This is normal sports booking website.',
        lang: 'HTML | CSS | JAVASCRIPT | REACT'
    },
    {
        id: 2,
        name: 'Wedding Photography',
        url: 'https://lakshith7748.github.io/Wedding-S-W/',
        para: 'Wedding photographt website which shows the amazing pictures of 3 different types of wedding',
        lang: 'HTML | CSS'
    },
    {
        id: 3,
        name: 'Snake Game',
        url: 'https://amitihere.github.io/Snake_game/',
        para: 'The nostalgic snake game which everyone loves',
        lang: 'HTML | CSS | JAVASCRIPT'
    },
    {
        id: 4,
        name: 'ToDo',
        url: 'cmg soon',
        para: 'A Todo app for mobile which helps to keep track of tasks.',
        lang: '| REACT NATIVE |'
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
