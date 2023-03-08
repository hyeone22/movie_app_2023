
import axios from 'axios';
import React, { Component } from 'react'
import Movie from '../components/Movie';

import '../styles/Home.css';


export class Home extends Component {
 constructor(props) {
  super(props);
  console.log('constructor 함수는 클래스형 컴포넌트가 생성할때 호출됨')
 }

 componentDidMount(){
  console.log('componentDidMount함수는 컴포넌트가 처음 화면에 그려지면 실행되는 함수')
 }

 componentDidUpdate(){
  console.log('componentDidUpdate함수는 화면이 새로 그려지면 즉 업데이트 되면 실행되는 함수')
 } 

 componentWillUnmount(){
  console.log('componentWillUnmount함수는 컴포넌트가 죽을때 실행되는 함수')
 }

//  -----------------------------------------

state = {
  isLoading: true,
  movies: [],
}
componentDidMount(){
  
//  setTimeout(()=>{
// this.setState({isLoading:false})
//  }, 6000);
this.getMovies();
}

getMovies = async () =>{
 const { //구조분해 할당
  data : {
    data :{
      movies
    }
  }
 } = 
await axios.get('https://yts.mx/api/v2/list_movies.json?genre=animation&sort_by=like_count');
console.log(movies);
this.setState({
  //state값 바꿔줌 | movies에는 가져온 배열인movies를 저장
  isLoading: false,
  movies, //movies: movies,
  //속성과 이름이 같으면 하나만 써줘도 된다. 키: 키값 이름 동일
  //처음에는 true니까 로딩이 나왓다가 compodentDidmount해서 setState값이 바뀌어서 화면이 다시 그려짐
})
}

  render() {
    const {isLoading, movies} = this.state; //구조분해할당
    return (
    
     <section className='container'>
      {isLoading ?
      <div className='loader'>
        <span className='loader_text'>'Loading...'</span>
      </div>
      :
      <div className='movies'>
        {movies.map((movie,index) => <Movie
                                       key={index}
                                       id={movie.id}
                                       year={movie.year}
                                       title={movie.title}
                                       summary={movie.summary}
                                       poster={movie.medium_cover_image}
                                       genres={movie.genres}
                                      />
                    )
        }
      </div>
      }
     </section>
    
    )
  }
}

export default Home;


