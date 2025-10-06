import React from 'react'
import type { Project } from '../types'


const ProjectCard: React.FC<{p: Project}> = ({ p }) => {
return (
<article className="project-card" data-aos="fade-up">
<img src={p.image} alt={p.title} />
<div className="card-body">
<h3>{p.title}</h3>
<p>{p.description}</p>
<a className="btn small" href={p.link || '#'} target="_blank" rel="noreferrer">Live</a>
</div>
</article>
)
}


export default ProjectCard