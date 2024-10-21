import React, { useContext } from 'react';
import { FormContext } from './FormContext';

const ResumeForm = () => {
    const { formData, updateFormData } = useContext(FormContext);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                updateFormData('image', reader.result); // Set the image data URL
            };
            reader.readAsDataURL(file); // Convert the file to a data URL
        }
    };

    return (
        <div className="form-container p-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center text-white mb-4">Resume Builder</h2>
            <form>
                <div className="mb-4">
                    <label className="block text-white" htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => updateFormData('name', e.target.value)}
                        className="w-full p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                        placeholder="Enter your name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white" htmlFor="phone">Phone No</label>
                    <input
                        type="text"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => updateFormData('phone', e.target.value)}
                        className="w-full p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                        placeholder="Enter your phone number"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white" htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        className="w-full p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white" htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        value={formData.address}
                        onChange={(e) => updateFormData('address', e.target.value)}
                        className="w-full p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                        placeholder="Enter your address"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white" htmlFor="education">Educational Qualification</label>
                    <input
                        type="text"
                        id="education"
                        value={formData.education}
                        onChange={(e) => updateFormData('education', e.target.value)}
                        className="w-full p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                        placeholder="Enter your educational qualification"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white" htmlFor="experience">Experience</label>
                    <input
                        type="text"
                        id="experience"
                        value={formData.experience}
                        onChange={(e) => updateFormData('experience', e.target.value)}
                        className="w-full p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                        placeholder="Enter your experience"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-white" htmlFor="image">Upload Profile Image</label>
                    <input
                        type="file" // Changed to file type
                        id="image"
                        accept="image/*" // Accepts only image files
                        onChange={handleImageUpload} // Handle file input change
                        className="w-full p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>
            </form>
        </div>
    );
};

export default ResumeForm;
