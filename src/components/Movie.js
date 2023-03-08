import React from 'react'
import PropTypes from 'prop-types';
import '../styles/Movie.css';
import { Link } from 'react-router-dom';

function Movie({genres,id,poster,summary,title,year}) {
  // console.log(props);
  // const{genres,id,poster,summary,title,year} = props;
  return (
    <div className='movie'>
      <Link to={'/detail'} state={{genres,id,poster,summary,title,year}}>
      <img src={poster} alt={title} title={title} />
      <div className='movie_data'>
        <h3 className='movie_title' style={{backgroundColor:'#eee'}}>{title}</h3>
        <h4 className='movie_year'>{year}</h4>
        <ul className='movie_genres'>
        {genres.map((genres,index)=>{
          return(
          <li className='movie_genres' key={index}>{genres}</li>
          )
        })}
        </ul>
        <p className='movie_summary'>{summary.slice(0,180)}...</p>
      </div>
      </Link>
    </div>
  )
}

//npm install prop-types : 데이터 전달이 잘 되었는지 확인
Movie.propTypes ={
  id : PropTypes.number.isRequired,
  year : PropTypes.number.isRequired,
  poster : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  title : PropTypes.string.isRequired,
  year : PropTypes.number.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie