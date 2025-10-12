import React from 'react'
import { HiH1 } from 'react-icons/hi2';

const MovieRatingApp = () => {
    const moviedata = [
    { id: 1, title: "Inception", rating: 9.0 },
    { id: 2, title: "Avatar", rating: 7.3 },
    { id: 3, title: "The Flash", rating: 5.4 },
    { id: 4, title: "Interstellar", rating: 8.6 },
    { id: 5, title: "Morbius", rating: 4.2 }
    ];

    return (
        <section>
            {moviedata.map((data =>(
                <MovieRate key={data} title={data.title} rating={data.rating}/>
            )))}
        </section>
    );
};

const MovieRate = ({title,rating}) => {
    return (
        <li>

            <h2>{title}</h2>
             {rating >= 8 ? (<p>Highly Rated</p>) : rating >= 5 ? (<p>Average</p> ) : (<p>Poor</p>)}
        </li>
    );
};

export default MovieRatingApp; 