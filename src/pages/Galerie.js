 import Menu from '../Menu';
 import React from 'react';
 import './Galerie.css';
  import img1 from '../img/imag1.jpg';
  import img2 from '../img/img2.jpeg';
  import img3 from '../img/img3.jpg';
  import img4 from '../img/img4.jpg';
  import img5 from '../img/img5.jpg';
  import img6 from '../img/img6.jpg';
  import img7 from '../img/img7.jpg';
  import img8 from '../img/img8.jpg';
  const Galerie = (props) => {
      return (
          <div>
              <Menu />
          
         <img src={img1} alt="" className='phs1' /> 
            <img src={img2} alt=""  className='phs2'/>
            <img src={img3} alt=""  className='phs3'/>
            <img src={img4} alt="" className='phs4' />
            <img src={img5} alt="" className='phs5' />
            <img src={img6} alt=""  className='phs6'/>
            <img src={img7} alt=""  className='phs7'/>
            <img src={img8} alt=""  className='phs8'/>
          
        </div>
     );
 }; 

 export default Galerie;
