import React from "react";

import ProjectCard from "../ProjectCard.js";

import projects from "../../projects.json";

const Projects = () => (
    <Wrapper>
        <Title>Coding Projects</Title>
        {/* //weather dashboard */}
        <ProjectCard
        img={projects[0].img}
        title={projects[0].title}
        text={projects[0].text}
        siteurl={projects[0].siteurl}
        repourl={projects[0].repourl}
        />
        {/* brewr app */}
        <ProjectCard 
        img={projects[1].img}
        title={projects[1].title}
        text={projects[1].text}
        siteurl={projects[1].siteurl}
        repourl={projects[1].repourl}  
        />
        {/* find next gig app */}
        <ProjectCard 
        img={projects[2].img}
        title={projects[2].title}
        text={projects[2].text}
        siteurl={projects[2].siteurl}
        repourl={projects[2].repourl}  
        />
        {/* work day scheduler */}
        <ProjectCard 
        img={projects[3].img}
        title={projects[3].title}
        text={projects[3].text}
        siteurl={projects[3].siteurl}
        repourl={projects[3].repourl}  
        />
        {/* Burger Lust Wish List */}
        <ProjectCard 
        img={projects[3].img}
        title={projects[3].title}
        text={projects[3].text}
        siteurl={projects[3].siteurl}
        repourl={projects[3].repourl}  
        />
        {/* Express Note Taker */}
        <ProjectCard 
        img={projects[3].img}
        title={projects[3].title}
        text={projects[3].text}
        siteurl={projects[3].siteurl}
        repourl={projects[3].repourl}  
        />
        {/* Employee Database Command Line Application */}
        <ProjectCard 
        img={projects[3].img}
        title={projects[3].title}
        text={projects[3].text}
        siteurl={projects[3].siteurl}
        repourl={projects[3].repourl}  
        />
        {/* Random Number Generator */}
        <ProjectCard 
        img={projects[3].img}
        title={projects[3].title}
        text={projects[3].text}
        siteurl={projects[3].siteurl}
        repourl={projects[3].repourl}  
        />
        {/* Readme Generator */}
        <ProjectCard 
        img={projects[3].img}
        title={projects[3].title}
        text={projects[3].text}
        siteurl={projects[3].siteurl}
        repourl={projects[3].repourl}  
        />

    </Wrapper>
    
    
    <div className="projectCard">
        <h1>Projects</h1>
        <p> projects will go here </p>
    </div>
)

export default Project;