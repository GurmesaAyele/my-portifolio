import React from 'react'
import Hero from '../components/Hero'


const Home: React.FC = () => {
return (
<div>
<Hero />
<section className="intro container" data-aos="fade-up">
<h2>What I do</h2>
<p>I design and build fast user interfaces with a focus on animations and accessibility.</p>
</section>
</div>
)
}


export default Home