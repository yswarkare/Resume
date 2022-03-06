interface ProjectLink {
    name: string,
    link: string,
}


interface Project {
    name: string,
    projectLinks: Array<ProjectLink>,
    githubLink: string,
    description: Array<string>,
}

export default Project;