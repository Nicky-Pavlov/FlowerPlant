import Card from '../components/Card';

export default function MyPlants() {
  return (
    <section>
      <h2>My Plants</h2>
      <Card
        name="Snake Plant"
        scientificName="Dracaena trifasciata"
        lightRequirements="Bright, indirect light to low light"
        wateringSchedule="Every 2-3 weeks"
        soilType="Well-draining cactus or succulent mix"
        difficultyLevel="Beginner"
      />
    </section>
  );
}
