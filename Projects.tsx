import React from 'react';

interface Project {
    title: string;
    description: string;
    image: string;
    links: { label: string; url: string }[];
}

const projects: Project[] = [
    {
        title: 'Clam Age Prediction Using Machine Learning',
        description:
            'Conducted Exploratory Data Analysis (EDA) to identify patterns in clam characteristics and their correlation with age. Developed a regression-based model to predict clam age based on physical attributes such as weight, diameter, and shell thickness.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Clams_on_Sandy_Hook_beaches_-_panoramio.jpg/640px-Clams_on_Sandy_Hook_beaches_-_panoramio.jpg',
        links: [
            { label: 'View Project', url: 'https://github.com/Farscent/Oemoem2024-DSAI-Challenge/blob/main/Farhan%20Adiwidya%20Pradana_dsaioemoem.ipynb' },
        ],
    },
    // ...other projects
];

const Projects: React.FC = () => {
    return (
        <section id="projects">
            <h2>Personal Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <h3>{project.title}</h3>
                        <img src={project.image} alt={project.title} />
                        <p>{project.description}</p>
                        {project.links.map((link, idx) => (
                            <a href={link.url} target="_blank" rel="noopener noreferrer" key={idx}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
