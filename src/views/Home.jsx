import indoorPlant from '../assets/indoor-plants-studio.jpg';
import blob from '../assets/blob.svg';
import Carousel from '../components/Carousel';


export default function Home() {
  return (
    <>
      <div className="hero">
        <img src={indoorPlant} alt="Indoor Plant" className="hero-image" />
        <div className="hero-title-wrap" aria-hidden="true">
          <img src={blob} alt="" className="hero-blob" />
          <h1 className="hero-title">FlowerPlant</h1>
        </div>
      </div>
      <div className="intro">
        <h2>Welcome to FlowerPlant!</h2>
        <p>
          Discover the joy of indoor gardening with FlowerPlant, your ultimate companion for plant care. Whether you're a seasoned green thumb or just starting out, our app provides personalized care tips, watering reminders and a vibrant community to help your plants thrive. Join us and watch your indoor garden flourish!
        </p>
        <p>
          With FlowerPlant, you can easily track your plant collection, receive tailored care advice based on your specific plants and connect with fellow plant enthusiasts. Say goodbye to wilted leaves and hello to a thriving indoor oasis with FlowerPlant!
        </p>
      </div>
      <div className="carousel-header">
        <h2>Check out some of the most popular plants:</h2>
      </div>
      <Carousel />
    </>
  );
}
