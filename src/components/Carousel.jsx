import { useRef, useState } from 'react';
import Card from './Card';

const plants = [
	{
		name: 'Snake Plant',
		scientificName: 'Dracaena trifasciata',
		lightRequirements: 'Bright, indirect light to low light',
		wateringSchedule: 'Every 2-3 weeks',
		soilType: 'Well-draining cactus or succulent mix',
		difficultyLevel: 'Beginner',
	},
	{
		name: 'Monstera',
		scientificName: 'Monstera deliciosa',
		lightRequirements: 'Bright, indirect light',
		wateringSchedule: 'Every 1-2 weeks',
		soilType: 'Chunky, well-draining potting mix',
		difficultyLevel: 'Intermediate',
	},
	{
		name: 'Fiddle Leaf Fig',
		scientificName: 'Ficus lyrata',
		lightRequirements: 'Bright, filtered light',
		wateringSchedule: 'When top 2 inches of soil are dry',
		soilType: 'Rich, well-draining indoor potting mix',
		difficultyLevel: 'Expert',
	},
	{
		name: 'Pothos',
		scientificName: 'Epipremnum aureum',
		lightRequirements: 'Low to bright, indirect light',
		wateringSchedule: 'About once a week',
		soilType: 'Standard, well-draining potting soil',
		difficultyLevel: 'Beginner',
	},
	{
		name: 'Peace Lily',
		scientificName: 'Spathiphyllum wallisii',
		lightRequirements: 'Medium to low, indirect light',
		wateringSchedule: 'When the top inch of soil is dry',
		soilType: 'Moist but well-draining potting mix',
		difficultyLevel: 'Intermediate',
	},
	{
		name: 'ZZ Plant',
		scientificName: 'Zamioculcas zamiifolia',
		lightRequirements: 'Low to bright, indirect light',
		wateringSchedule: 'Every 2-3 weeks',
		soilType: 'Fast-draining indoor potting mix',
		difficultyLevel: 'Beginner',
	},
	{
		name: 'Calathea',
		scientificName: 'Calathea orbifolia',
		lightRequirements: 'Medium, indirect light',
		wateringSchedule: 'Keep soil lightly moist',
		soilType: 'Peat-rich, well-draining mix',
		difficultyLevel: 'Expert',
	},
	{
		name: 'Aloe Vera',
		scientificName: 'Aloe barbadensis Miller',
		lightRequirements: 'Bright, direct to indirect light',
		wateringSchedule: 'Every 2-3 weeks after soil fully dries',
		soilType: 'Sandy, fast-draining succulent mix',
		difficultyLevel: 'Beginner',
	},
];

export default function Carousel() {
	const trackRef = useRef(null);
	const [isDragging, setIsDragging] = useState(false);
	const dragStartXRef = useRef(0);
	const dragStartScrollRef = useRef(0);

	const handleMouseDown = (event) => {
		const track = trackRef.current;
		if (!track) {
			return;
		}

		setIsDragging(true);
		dragStartXRef.current = event.clientX;
		dragStartScrollRef.current = track.scrollLeft;
	};

	const handleMouseMove = (event) => {
		const track = trackRef.current;
		if (!track || !isDragging) {
			return;
		}

		const delta = event.clientX - dragStartXRef.current;
		track.scrollLeft = dragStartScrollRef.current - delta;
	};

	const stopDragging = () => {
		setIsDragging(false);
	};

	return (
		<section className="carousel" aria-label="Plant care cards">
			<div
				ref={trackRef}
				className={`carousel-track${isDragging ? ' is-dragging' : ''}`}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={stopDragging}
				onMouseLeave={stopDragging}
			>
				{plants.map((plant) => (
					<Card
						key={plant.name}
						name={plant.name}
						scientificName={plant.scientificName}
						lightRequirements={plant.lightRequirements}
						wateringSchedule={plant.wateringSchedule}
						soilType={plant.soilType}
						difficultyLevel={plant.difficultyLevel}
					/>
				))}
			</div>
		</section>
	);
}
