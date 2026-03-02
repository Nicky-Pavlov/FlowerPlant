import indoorPlant from '../assets/indoor-plants-studio.jpg';
import blob from '../assets/blob.svg';


export default function Home() {
  return (
    <div className="hero">
      <img src={indoorPlant} alt="Indoor Plant" className="hero-image" />
      <div className="hero-title-wrap" aria-hidden="true">
        <img src={blob} alt="" className="hero-blob" />
        <h1 className="hero-title">FlowerPlant</h1>
      </div>
    </div>
  );
}
