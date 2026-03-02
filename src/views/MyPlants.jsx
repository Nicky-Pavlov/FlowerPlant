import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';

const STORAGE_KEY = 'flowerplant-my-plants';

export default function MyPlants() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('All');
  const [plants, setPlants] = useState(() => {
    try {
      const savedPlants = localStorage.getItem(STORAGE_KEY);
      if (!savedPlants) {
        return [];
      }

      const parsedPlants = JSON.parse(savedPlants);
      return Array.isArray(parsedPlants) ? parsedPlants : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(plants));
  }, [plants]);

  const handleDelete = (plantId) => {
    setPlants((currentPlants) =>
      currentPlants.filter((plant) => plant.id !== plantId),
    );
  };

  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredPlants = plants.filter((plant) => {
    const matchesName = plant.name.toLowerCase().includes(normalizedSearch);
    const matchesDifficulty =
      difficultyFilter === 'All' || plant.difficultyLevel === difficultyFilter;

    return matchesName && matchesDifficulty;
  });

  return (
    <section className="my-plants">
      <h2>My Plants</h2>

      <Link
        to="/my-plants/new"
        className="my-plants__create-button"
      >
        Create New Plant Card
      </Link>

      <div className="my-plants__controls">
        <label>
          Search by Name
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="e.g. Snake Plant"
          />
        </label>

        <label>
          Filter by Difficulty
          <select
            value={difficultyFilter}
            onChange={(event) => setDifficultyFilter(event.target.value)}
          >
            <option value="All">All</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
        </label>
      </div>

      <div className="my-plants__list">
        {plants.length === 0 ? (
          <p>No plants yet. Click Create New Plant Card to add your first one.</p>
        ) : filteredPlants.length === 0 ? (
          <p>No plants match your search/filter.</p>
        ) : (
          filteredPlants.map((plant) => (
            <Card
              key={plant.id}
              name={plant.name}
              scientificName={plant.scientificName}
              lightRequirements={plant.lightRequirements}
              wateringSchedule={plant.wateringSchedule}
              soilType={plant.soilType}
              difficultyLevel={plant.difficultyLevel}
              onEdit={() => navigate(`/my-plants/${plant.id}/edit`)}
              onDelete={() => handleDelete(plant.id)}
            />
          ))
        )}
      </div>
    </section>
  );
}
