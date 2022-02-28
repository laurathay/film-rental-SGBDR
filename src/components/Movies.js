import React from 'react'

export const Posts = ({ posts, loading}) => {
    if(loading){
        return <h2> Loading ...</h2>;
    }

    return (
        <ul className="list-group-mb-4"> 
            {movies.map(movie => (
                <li key={movie.id} className="list-group-item">
                    {movie.title}
                </li>
            ))}
        </ul>
    )
}

