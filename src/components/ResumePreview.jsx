import React, { useContext } from 'react';
import { FormContext } from './FormContext';

const ResumePreview = () => {
    const { formData, saveToLocalStorage } = useContext(FormContext);

    return (
        <div className="preview-container p-6 bg-gray-100 rounded-lg shadow-lg h-full max-w-md mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Resume Preview</h2>
            {formData.image && (
                <img
                    src={formData.image}
                    alt="Profile"
                    className="mb-4 w-32 h-32 rounded-full object-cover shadow-md mx-auto"
                />
            )}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg font-semibold text-gray-700 mb-2"><strong>Name:</strong> {formData.name}</p>
                <p className="text-lg font-semibold text-gray-700 mb-2"><strong>Phone No:</strong> {formData.phone}</p>
                <p className="text-lg font-semibold text-gray-700 mb-2"><strong>Email:</strong> {formData.email}</p>
                <p className="text-lg font-semibold text-gray-700 mb-2"><strong>Address:</strong> {formData.address}</p>
                <p className="text-lg font-semibold text-gray-700 mb-2"><strong>Educational Qualification:</strong> {formData.education}</p>
                <p className="text-lg font-semibold text-gray-700 mb-2"><strong>Experience:</strong> {formData.experience}</p>
            </div>
            <button 
                onClick={saveToLocalStorage}
                className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
            >
                Save to Local Storage
            </button>
        </div>
    );
};

export default ResumePreview;
