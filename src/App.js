import React, { Component } from 'react';
import Carousel from "react-bootstrap/Carousel";
import './App.css';
export class App extends Component {
  render() {
    return (
    <div>
    {/****FIRST SLIDER DIV */}
    <div>
    <Carousel autoPlay={false} controls={true} indicators={true} fade={true} interval={1000}>
  <Carousel.Item>
      <img className="d-block w-100" src="https://wallpapercave.com/wp/wp2601438.jpg" alt="First slide" style={{height:500,width:"100%"}} />
   </Carousel.Item>
    <Carousel.Item>
     <img className="d-block w-100" src="https://i.pinimg.com/originals/e2/0a/3e/e20a3ef3bebfcaae762f7a0735136b0f.jpg" alt="second slide" style={{height:500,width:"100%"}} />
      </Carousel.Item>
         <Carousel.Item>
         <img className="d-block w-100" src="http://wonderfulengineering.com/wp-content/uploads/2016/01/wallpaper-download-1.jpg" alt="Third slide"  style={{height:500,width:"100%"}}  />
    </Carousel.Item>
 </Carousel>
 </div>
 {/****CONTINUE WATCHING */}
 <div className="kquZKY1">
 <div className="kLKzPK2">
 <span>Continue watching</span>
 <span>{"<"} {">"}</span>
</div>
<div className="jhwLvj1">
    <img src="/images/wanderon-meghalaya-3.jpg" className="okeiS1" alt="Third slide" />
    <img src="/images/wanderon-meghalaya-4.jpg" className="okeiS1" alt="Third slide" />
    <img src="/images/wanderon-meghalaya-5.jpg" className="okeiS1" alt="Third slide" />
    <img src="/images/wanderon-meghalaya-7.jpg" className="okeiS1" alt="Third slide" />
    <img src="/images/wanderon-meghalaya-6.jpg" className="okeiS1" alt="Third slide" />
    <img src="/images/wanderon-meghalaya-8.jpg" className="okeiS1" alt="Third slide" />
    <img src="/images/wanderon-meghalaya-4.jpg" className="okeiS1" alt="Third slide" />
    <img src="/images/wanderon-meghalaya-5.jpg" className="okeiS1" alt="Third slide" />
   </div>
   </div>
    {/****TRENDING */}
   <div className="kquZKY1">
   <div className="kLKzPK2">
   <span>Trending</span>
   <span>More</span>
   </div>
  <div className="jhwLvj1">
       <img src="/images/wanderon-meghalaya-3.jpg" className="okeiS1" alt="Third slide" />
       <img src="/images/wanderon-meghalaya-4.jpg" className="okeiS1" alt="Third slide" />
       <img src="/images/wanderon-meghalaya-5.jpg" className="okeiS1" alt="Third slide" />
       <img src="/images/wanderon-meghalaya-7.jpg" className="okeiS1" alt="Third slide" />
       <img src="/images/wanderon-meghalaya-6.jpg" className="okeiS1" alt="Third slide" />
       <img src="/images/wanderon-meghalaya-8.jpg" className="okeiS1" alt="Third slide" />
       <img src="/images/wanderon-meghalaya-4.jpg" className="okeiS1" alt="Third slide" />
       <img src="/images/wanderon-meghalaya-5.jpg" className="okeiS1" alt="Third slide" />
      </div>
      </div>
    </div>
    )
  }
}

export default App;




