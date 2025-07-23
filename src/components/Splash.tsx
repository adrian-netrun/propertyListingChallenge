import bgSplashImage from '../assets/hi_res_house.jpg';
import './Splash.css';

function Spash() {
  return (
    <div className='background__container'>
      <img
        className='bacground__container__splash'
        src={bgSplashImage}
        alt='splash image'
      />
    </div>
  );
}

export default Spash;
