export default function Card({
	name,
	scientificName,
	lightRequirements,
	wateringSchedule,
	soilType,
	difficultyLevel,
}) {
	return (
		<article className="plant-card">
			<h3 className="plant-card__title">{name}</h3>
			<p>
				<strong>Scientific Name:</strong> {scientificName}
			</p>
			<p>
				<strong>Light Requirements:</strong> {lightRequirements}
			</p>
			<p>
				<strong>Watering Schedule:</strong> {wateringSchedule}
			</p>
			<p>
				<strong>Soil Type:</strong> {soilType}
			</p>
			<p>
				<strong>Difficulty Level:</strong> {difficultyLevel}
			</p>
		</article>
	);
}
