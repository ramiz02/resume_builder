import React, { createContext, useState, useEffect } from 'react';

// Create Context
export const FormContext = createContext();

// Create Provider
export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        address: '',
        education: '',
        experience: '',
        image: '',
    });

    useEffect(() => {
        // Load data from local storage on initial render
        const storedData = JSON.parse(localStorage.getItem('resumeData'));
        if (storedData) {
            setFormData(storedData);
        }
    }, []);

    const updateFormData = (field, value) => {
        setFormData(prevState => ({
            ...prevState,
            [field]: value,
        }));
    };

    const saveToLocalStorage = () => {
        localStorage.setItem('resumeData', JSON.stringify(formData));
        alert('Resume data saved to local storage!');
    };

    return (
        <FormContext.Provider value={{ formData, updateFormData, saveToLocalStorage }}>
            {children}
        </FormContext.Provider>
    );
};
