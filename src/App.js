import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ResumeForm from './components/ResumeForm';
import ResumePreview from './components/ResumePreview';
import { FormProvider }  from './components/FormContext';

function App() {
    return (
        <FormProvider>
            <div className="min-h-screen flex flex-col">
                <Header />
                <main className="p-6 flex flex-col lg:flex-row justify-center space-y-6 lg:space-x-6 lg:space-y-0">
                    <div className="form-container w-full lg:w-1/2">
                        <ResumeForm />
                    </div>
                    <div className="preview-container w-full lg:w-1/2">
                        <ResumePreview />
                    </div>
                </main>
                <Footer />
            </div>
        </FormProvider>
    );
}

export default App;
