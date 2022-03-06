import Company from "./Company";
import Project from "./Project";

interface Experience {
    position: string,
    startDate: Date,
    endDate: Date,
    company: Company,
    description: Array<string>,
    projects: Array<Project>,
}

export default Experience;