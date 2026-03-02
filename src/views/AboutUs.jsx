import imageOne from '../assets/1.jpg';
import imageTwo from '../assets/2.jpg';
import imageThree from '../assets/3.jpg';

export default function AboutUs() {
  return (
    <section className="about-us">
      <h2>About Us</h2>
      <p className="about-us__intro">
        FlowerPlant helps people care for their indoor plants with confidence.
        We focus on simple guidance, practical reminders and clear plant care
        information.
      </p>

      <div className="about-us__grid">
        <article className="about-us__card">
          <img src={imageOne} alt="Team members caring for plants" />
          <h3>Our Mission</h3>
          <p>
            We make plant care easy and approachable so every home can stay
            green, healthy and vibrant.
          </p>
        </article>

        <article className="about-us__card">
          <img src={imageTwo} alt="Indoor plant collection" />
          <h3>What We Do</h3>
          <p>
            We provide organized plant care details and tracking tools to help
            users build better routines.
          </p>
        </article>

        <article className="about-us__card">
          <img src={imageThree} alt="Healthy plants by a bright window" />
          <h3>Our Vision</h3>
          <p>
            We want every plant owner, from beginner to expert, to feel
            supported and successful.
          </p>
        </article>
      </div>
    </section>
  );
}
