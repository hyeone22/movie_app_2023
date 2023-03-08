import React from 'react'
import { useLocation } from 'react-router-dom';
import '../styles/Detail.css'

function Detail() {
  const location = useLocation();
  console.log(location);
  const {genres,poster,summary,title,year} = location.state;
  return (
    <div className='detail'>
      
      <img src={poster} alt={title} title={title} />
      <div className='detail_data'>
        <h3 className='detail_title' style={{backgroundColor:'#eee'}}>{title}</h3>
        <h4 className='detail_year'>{year}</h4>
        <ul className='detail_genres'>
        {genres.map((genres,index)=>{
          return(
          <li className='detail_genres' key={index}>{genres}</li>
          )
        })}
        </ul>
        <p className='detail_summary'>{summary.slice(0,180)}...</p>
      </div>
      
    </div>
  )
}

export default Detail