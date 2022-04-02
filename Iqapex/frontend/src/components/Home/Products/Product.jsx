import React,{useEffect} from 'react'
import "./product.css";
import Aos from "aos";
import "aos/dist/aos.css";



function Product() {

    function handleClick(e){

    

    }

    
  useEffect(()=>{
    Aos.init({duration:900});

    },[]);

  return (
    <div className='circleDivs-container'>    
        <h1 data-aos="fade-left">
            Hardware Products
        </h1>
 
        <div className='flex-div'>

        <div className='circle'>
        <div className='Circle-contents'>
        <div className='circular-image'>
        <img src="" alt="App devlopment"/>

        </div>
        <div className='content'>
            <h2>
                Coconut Grinder
            </h2>
            <p>
                Something abount Coconut Grinder
            </p>
            <button onClick = {handleClick} className="order-button">
                Order now
            </button>
        </div>
        </div>
        
    </div> 
    
 {/*    <Tilt className="Tilt" options={{ max : 35 }} style={{ height: "52%", width: "48%",margin:60,marginRight:"10%"}} > */}

    <div className='circle'>
        <div className='Circle-contents'>
        <div className='circular-image'>
        <img src="" alt="App devlopment"/>
        </div>
        <div className='content'>
            <h2>
                Coconut Grinder
            </h2>
            <p>
                Something abount Coconut Grinder
            </p>
            <button onClick = {handleClick} className="order-button">
                Order now
            </button>
        </div>
        </div>
    </div> 
    
        </div>
        <div className='flex-div'>
        <div className='circle'>
        <div className='Circle-contents'>
        <div className='circular-image'>
        <img src="" alt="App devlopment"/>
        </div>
        <div className='content'>
            <h2>
                Coconut Grinder
            </h2>
            <p>
                Something abount Coconut Grinder
            </p>
            <button className="order-button">
                Order now
            </button>
        </div>
        </div>
    </div> 
    <div className='circle'>
        <div className='Circle-contents'>
        <div className='circular-image'>
        <img src="" alt="App devlopment"/>

        </div>
        <div className='content'>
            <h2>
                Coconut Grinder
            </h2>
            <p>
                Something abount Coconut Grinder
            </p>
            <button className="order-button">
                Order now
            </button>
        </div>
        </div>
    </div> 
        </div>
        <div className='flex-div'>
        <div className='circle'>
        <div className='Circle-contents'>
        <div className='circular-image'>
        <img src="" alt="App devlopment"/>

        </div>
        <div className='content'>
            <h2>
                Coconut Grinder
            </h2>
            <p>
                Something abount Coconut Grinder
            </p>
            <button className="order-button">
                Order now
            </button>
        </div>
        </div>
    </div> 
    <div className='circle'>
        <div className='Circle-contents'>
        <div className='circular-image'>
        <img src="" alt="App devlopment"/>

        </div>
        <div className='content'>
            <h2>
                Coconut Grinder
            </h2>
            <p>
                Something abount Coconut Grinder
            </p>
            <button className="order-button">
                Order now
            </button>
        </div>
        </div>
    </div> 
        </div>
       
    </div>
  )
}

export default Product