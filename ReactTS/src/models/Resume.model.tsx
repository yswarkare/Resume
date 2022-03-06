import Course from "./Course";
import Experience from "./Experience";
import Profile from "./Profile";
import Project from "./Project";

interface Resume {
    name: string,
    mobileNumber: string,
    email: string,
    address: string,
    languages: Array<string>,
    education: Array<Course>,
    profiles: Array<Profile>,
    skills: Array<string>,
    certificates: Array<string>,
    experience: Array<Experience>,
    projects: Array<Project>,
}

export default Resume;