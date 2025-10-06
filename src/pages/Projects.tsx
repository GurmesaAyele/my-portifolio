import React from 'react'
import ProjectCard from '../components/ProjectCard'
import type { Project } from '../types'
import p1 from '../assets/project-1.jpg'


const projects: Project[] = [
{ id: '1', title: 'Project One', description: 'An awesome project', image: p1, link: '#' },
]


const Projects: React.FC = () => {
return (
<section className="container projects" data-aos="fade-up">
<h2>Projects</h2>
<div className="projects-grid">
{projects.map(p => <ProjectCard key={p.id} p={p} />)}
</div>
</section>
)
}


export default Projects