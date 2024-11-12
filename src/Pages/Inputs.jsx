import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Inputs = () => {
  const navigate = useNavigate();

  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    destination: "",
    duration: "",
    budget: "",
    companions: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    destination: "",
    duration: "",
    budget: "",
    companions: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission and validation
  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = { ...errors };
    let isValid = true;

    // Validate each field
    if (!formData.name) {
      formErrors.name = "Full Name is required.";
      isValid = false;
    }
    if (!formData.destination) {
      formErrors.destination = "Please select a destination.";
      isValid = false;
    }
    if (!formData.duration) {
      formErrors.duration = "Trip duration is required.";
      isValid = false;
    }
    if (!formData.budget) {
      formErrors.budget = "Please select a budget level.";
      isValid = false;
    }
    if (!formData.companions) {
      formErrors.companions = "Please select who you are traveling with.";
      isValid = false;
    }

    setErrors(formErrors);

    if (isValid) {
      navigate(
        `/detail?name=${encodeURIComponent(
          formData.name
        )}&destination=${encodeURIComponent(
          formData.destination
        )}&duration=${encodeURIComponent(
          formData.duration
        )}&budget=${encodeURIComponent(
          formData.budget
        )}&companions=${encodeURIComponent(formData.companions)}`
      );
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('your-image-url.jpg')" }}
    >
      <div className="flex justify-center items-center h-full">
        <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-md w-full sm:w-96">
          <h2 className="text-center text-xl mb-6">Register Your Trip</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs">{errors.name}</p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="destination"
                className="block text-sm font-medium"
              >
                Where to Go?
              </label>
              <select
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="" disabled>
                  Select a district
                </option>
                <option value="Vellore">Vellore</option>
                <option value="Chennai">Chennai</option>
                <option value="Coimbatore">Coimbatore</option>
                <option value="Madurai">Madurai</option>
              </select>
              {errors.destination && (
                <p className="text-red-500 text-xs">{errors.destination}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="duration" className="block text-sm font-medium">
                How long is the trip?
              </label>
              <input
                type="number"
                id="duration"
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                placeholder="Enter number of days"
                min="1"
                max="30"
              />
              {errors.duration && (
                <p className="text-red-500 text-xs">{errors.duration}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="budget" className="block text-sm font-medium">
                What is Your Budget?
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="" disabled>
                  Select budget level
                </option>
                <option value="cheap">Cheap</option>
                <option value="moderate">Moderate</option>
                <option value="luxury">Luxury</option>
              </select>
              {errors.budget && (
                <p className="text-red-500 text-xs">{errors.budget}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="companions" className="block text-sm font-medium">
                Who are you traveling with?
              </label>
              <select
                id="companions"
                name="companions"
                value={formData.companions}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="" disabled>
                  Select companion type
                </option>
                <option value="family">Family</option>
                <option value="partner">Partner</option>
                <option value="solo">Solo</option>
                <option value="friends">Friends</option>
              </select>
              {errors.companions && (
                <p className="text-red-500 text-xs">{errors.companions}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
            >
              Register Trip
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Inputs;
