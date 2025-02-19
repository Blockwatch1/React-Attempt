import { useState, useRef, useEffect, Component } from 'react'
import './index.css'
import { use } from 'react';
class Card extends Component {

  constructor(props) {
    super(props);
    this.source = props.source;
  }
  render() {
    return (
      <div onClick={()=>{this.props.action(this.source)}}  className='flex justify-center items-center hover:opacity-75'>
      <div className='bg-blue-700 rounded-3xl w-full aspect-[5/7] p-1.5  flex justify-center items-center'>
        <img src={this.source} className='w-5/6 h-5/6'></img>
      </div>
      </div>
    );
  }


}

function App() {
  const images =
    [
      "/apriloneil.jpg",
      "/baxterstockman.jpg",
      "/caseyjones.jpg",
      "/donatello.jpg",
      "/footninja.jpg",
      "/hun.jpg",
      "/karai.jpg",
      "/leonardo.jpg",
      "/mikey.jpg",
      "/raphael.jpg",
      "/shredder.jpg",
      "/splinter.jpg"
    ]
    
  const [score,setScore] = useState(0);
  const [usedImages,setUsedImages]=useState(
    []
  );
  let copy = [...images];
   let randomisedImages = [];
  function randomiseImages(){
    while(copy.length>0){
      let ind = parseInt(Math.random()*copy.length);
      randomisedImages.push(copy[ind]);
      copy.splice(ind,1);
    }
    copy=[...images];
  }
  function checkCardClick(src){
    if(usedImages.indexOf(src)!=-1){
      resetGame();
      return;
    }
    let temp=[...usedImages];
    temp.push(src);
    setUsedImages(temp);
    setScore(score+1);
  }
  function resetGame(){
    setScore(0);
    setUsedImages([]);
  }
  randomiseImages();
  return (
    <div className="h-auto min-h-screen bg-neutral-800 absolute top-0 left-0 w-screen flex flex-col">
      <div className="h-24 bg-neutral-500 flex flex-row justify-between items-center pl-5 md:pr-8 pr-5">
        <h3 className='md:text-3xl text-lg'>Score: {score}</h3>
        <button onClick={()=>{resetGame()}} className='hover:bg-gray-600 bg-gray-800 text-neutral-200 outline-none focus:outline-none rounded-3xl text-center w-20 h-12'>
          Reset
        </button>
      </div>
      <div className="h-auto min-h-0 p-2 md:p-4">
        <div className=" grid grid-rows-4 grid-cols-2 md:grid-rows-3 md:grid-cols-4 gap-6">
          {randomisedImages.map((dir) => (
            <Card key={dir} source={dir} action={checkCardClick}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App
