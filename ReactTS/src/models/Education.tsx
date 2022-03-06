import Course from "./Course";

class Education extends Array<Course> {
    constructor(props:Course) {
        super(props);
        this?.map(()=>{this?.pop()})
    }
}

export default Education;