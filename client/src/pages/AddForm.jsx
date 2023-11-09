import { useState } from 'react';

const AddShoeForm = ( ) => {
  const [shoe, setShoe] = useState({
    name: '',
    brand: '',
    img_url: '',
    description: '',
    sizing_recommendations: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShoe({ ...shoe, [name]: value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // Replace '/api/shoes' with the correct path to your backend's endpoint
    const response = await fetch('http://localhost:3001/api/shoes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: shoe.name,
        brand: shoe.brand,
        color: shoe.color, // This should be included if your server expects it
        description: shoe.description,
        material: shoe.material, // This too, if needed
        technologies: shoe.technologies, // Include all fields that the server expects
        sizing_recommendations: shoe.sizing_recommendations,
        img_URL: shoe.img_url, // Make sure the property names match those expected by the server
      }),
    });
    if (response.ok) {
      const addedShoe = await response.json();
      console.log('Shoe added successfully:', addedShoe);
      // Here you might want to redirect the user or give some feedback
    } else {
      throw new Error('Failed to add the shoe');
    }
  } catch (error) {
    console.error('Error adding the shoe:', error);
    // Here you would handle the error, maybe setting an error state or displaying a message to the user
  }
  // Clear the form after submission
  setShoe({
    name: '',
    brand: '',
    color: '', // Reset all fields after submission
    description: '',
    material: '',
    technologies: '',
    sizing_recommendations: '',
    img_url: '',
  });
};

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Shoe Name"
        value={shoe.name}
        onChange={handleChange}
        className="border rounded-lg p-2"
        required
      />
      <input
        type="text"
        name="brand"
        placeholder="Brand"
        value={shoe.brand}
        onChange={handleChange}
        className="border rounded-lg p-2"
        required
      />
      <input
        type="text"
        name="img_url"
        placeholder="Image URL"
        value={shoe.img_url}
        onChange={handleChange}
        className="border rounded-lg p-2"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={shoe.description}
        onChange={handleChange}
        className="border rounded-lg p-2"
        required
      />
      <input
        type="text"
        name="sizing_recommendations"
        placeholder="Sizing Recommendations"
        value={shoe.sizing_recommendations}
        onChange={handleChange}
        className="border rounded-lg p-2"
      />
      <button type="submit" className="bg-blue-500 text-white rounded-lg p-2">
        Add Shoe
      </button>
    </form>
  );
};

export default AddShoeForm;
