import Resume from "../models/Resume.model";

const resumeInfo:Resume = {
    name: `Yogesh S. Warkare`,
    mobileNumber: `+91-7020904227`,
    email: `yswarkare@gmail.com`,
    address: `Shantiniketan Colony, Parbhani, Maharashtra, India 431401.`,
    languages: [`English`, `Marathi`, `Hindi`,],
    education: [
        {
            name: `Software Engineering`,
            completionDate: new Date("2021-03-30"),
            institute: `Full stack web development using MERN, PERN stack at AttainU.`,
        },
        {
            name: `B.E. Mechanical Engineering`,
            completionDate: new Date("2016-07-01"),
            institute: `Government College of Engineering, Jalgaon,
            Maharashtra, India.`,
        },
    ],
    profiles: [
        {
            platform: `GitHub`,
            profileLink: `https://github.com/yswarkare`,
        },
        {
            platform: `LinkedIn`,
            profileLink: `https://www.linkedin.com/in/yswarkare/`,
        }
    ],
    skills: [`JavaScript`, `MERN Stack`, `PERN Stack`, `JavaScript(ES5 & ES6)`, `MongoDB`, `PostgreSQL`, `Express.js`, `React.js`, `Next.js`, `Node.js`, `Handlebars`, `Spring-Boot`, `Git`, `JQuery`, `Tailwind`, `Primereact`,],
    certificates: [`Full stack web development using MERN, PERN stack, at AttainU.`, `Integrated Course in CAD (Auto CAD, Solidworks, UG-CAD) at Indo-German Tool Room, Aurangabad.`, `Web Designing using Adobe Dreamweaver, at MKCL.`, `DOEACC-CCC (Computer Basics and MS Office).`, `English Typewriting 30.`,],
    experience: [{
        position: `Associate Developer`,
        startDate: new Date("2020-11-17"),
        endDate: new Date(""),
        company: {
            name: `At Quest Sustainable Solutions Pvt. Ltd. India.`
        },
        description: [``],
        projects: [
            {
                name: `Sus360\u00B0 Compass`,
                projectLink: ``,
                githubLink: ``,
                description: [
                    `A Deep-dive into every aspect of Corporate Sustainability and draw actionable Sustainability roadmaps for Board and Leadership teams of a corporate entity.`,
                    `Worked on complete development of client side and server side apps.`,
                    `Client side app developed by using React.js, Primereact, Tailwind, PostCSS`,
                    `Serve side app developed by using Spring Boot, MySql.`,
                ]
            },
            {
                name: `Sus360\u00B0 Benchmarker`,
                projectLink: ``,
                githubLink: ``,
                description: [
                    `A tool for corporate entity to self-assess their current position on Corporate Sustainability.`,
                    `Worked on debugging the deployment problems with created builds of react app.`,
                    `Client side app developed by using React.js, Primereact, Tailwind, PostCSS.`,
                    `Serve side app developed by using Node.js, MySql.`,
                ]
            },
            {
                name: `At Quest Website`,
                projectLink: ``,
                githubLink: ``,
                description: [
                    `Includes apps for atquest.in, care.atquest.in and life.atquest.in`,
                    `Frontend apps developed by using Next.js, Primereact, Tailwind.`,
                ]
            },
            {
                name: `At Quest AmpactCorp`,
                projectLink: ``,
                githubLink: ``,
                description: [
                    `A collection of apps to manage all administrative workings of At Quest.`,
                    `Worked on development of client side and server side apps.`,
                    `Client side app developed by using React.js, Redux, Primereact, Tailwind, PostCSS`,
                    `Serve side app developed by using Spring Boot, MySql.`,
                ]
            },
        ]   
    }],
    projects: [
        {
            name: `Rate N Review`,
            projectLink: `https://rating-and-reviews.herokuapp.com`,
            githubLink: `https://github.com/attainu/Yogesh-Mayank-Ratings-and-Reviews-au4`,
            description: [
                `A place where users could rate and review products.`,
                `The entire application is built using react-redux, bootstrap, material-UI for the front-end.`,
                `Back-end was built using Express.js, MongoDB with Mongoose.`, `JWT Auth with Cookies to store jwt token used for sign in the user.`,
                `Password-Jwt for authenticated routes.`,
            ]
        },
        {
            name: `Career Door`,
            projectLink: `http://careerdoors.herokuapp.com/`,
            githubLink: `https://github.com/attainu-nightingale/au3_sd_career-door`,
            description: [
                `A place where employees could review their employer companies and share their experience.`,
                `This application was built using Node.js, Express.js, MongoDB, templating engine , Handlebars, Heroku.`,
            ]
        }
    ]
}

export default resumeInfo;