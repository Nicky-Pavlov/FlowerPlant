import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const STORAGE_KEY = 'flowerplant-my-plants';

const emptyForm = {
  name: '',
  scientificName: '',
  lightRequirements: '',
  wateringSchedule: '',
  soilType: '',
  difficultyLevel: 'Beginner',
};

function getStoredPlants() {
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
}

export default function EditPlant() {
  const { plantId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(emptyForm);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const currentPlants = getStoredPlants();
    const targetPlant = currentPlants.find((plant) => plant.id === plantId);

    if (!targetPlant) {
      setIsNotFound(true);
      return;
    }

    setFormData({
      name: targetPlant.name,
      scientificName: targetPlant.scientificName,
      lightRequirements: targetPlant.lightRequirements,
      wateringSchedule: targetPlant.wateringSchedule,
      soilType: targetPlant.soilType,
      difficultyLevel: targetPlant.difficultyLevel,
    });
  }, [plantId]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const currentPlants = getStoredPlants();
    const updatedPlants = currentPlants.map((plant) =>
      plant.id === plantId ? { ...plant, ...formData } : plant,
    );

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPlants));
    navigate('/my-plants');
  };

  if (isNotFound) {
    return (
      <section className="my-plants">
        <h2>Edit Plant Card</h2>
        <p>That plant card was not found.</p>
        <Link to="/my-plants" className="plant-form__link-button">
          Back to My Plants
        </Link>
      </section>
    );
  }

  return (
    <section className="my-plants">
      <h2>Edit Plant Card</h2>

      <form className="plant-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Scientific Name
          <input
            type="text"
            name="scientificName"
            value={formData.scientificName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Light Requirements
          <input
            type="text"
            name="lightRequirements"
            value={formData.lightRequirements}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Watering Schedule
          <input
            type="text"
            name="wateringSchedule"
            value={formData.wateringSchedule}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Soil Type
          <input
            type="text"
            name="soilType"
            value={formData.soilType}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Difficulty Level
          <select
            name="difficultyLevel"
            value={formData.difficultyLevel}
            onChange={handleChange}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Expert">Expert</option>
          </select>
        </label>

        <div className="plant-form__actions">
          <button type="submit">Save Changes</button>
          <Link to="/my-plants" className="plant-form__link-button">
            Cancel
          </Link>
        </div>
      </form>
    </section>
  );
}
