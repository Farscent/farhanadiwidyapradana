import React from 'react';
import Header from './components/Header';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div>
            <Header />
            <Bio />
            <Projects />
            <Footer />
        </div>
    );
};

export default App;
