import React, { App } from "react";

import ProjectCard from "../ProjectCard.js";

import projects from "../../projects.json";

const Projects = (props) => (
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
        img={projects[4].img}
        title={projects[4].title}
        text={projects[4].text}
        siteurl={projects[4].siteurl}
        repourl={projects[4].repourl}  
        />
        {/* Express Note Taker */}
        <ProjectCard 
        img={projects[5].img}
        title={projects[5].title}
        text={projects[5].text}
        siteurl={projects[5].siteurl}
        repourl={projects[5].repourl}  
        />
        {/* Employee Database Command Line Application */}
        <ProjectCard 
        img={projects[6].img}
        title={projects[6].title}
        text={projects[6].text}
        siteurl={projects[6].siteurl}
        repourl={projects[6].repourl}  
        />
        {/* Random Number Generator */}
        <ProjectCard 
        img={projects[7].img}
        title={projects[7].title}
        text={projects[7].text}
        siteurl={projects[7].siteurl}
        repourl={projects[7].repourl}  
        />
        {/* Readme Generator */}
        <ProjectCard 
        img={projects[8].img}
        title={projects[8].title}
        text={projects[8].text}
        siteurl={projects[8].siteurl}
        repourl={projects[8].repourl}  
        />

  
    
    
    <div className="projectCard">
        <h1>Projects</h1>
        <p> projects will go here </p>
    </div>
    </Wrapper>
);

export default Project;