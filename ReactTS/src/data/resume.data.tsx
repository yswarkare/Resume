import Resume from '../models/Resume.model';

const resumeInfo: Resume = {
	name: `Yogesh S. Warkare`,
	mobileNumber: `+91-7020904227`,
	email: `yswarkare@gmail.com`,
	address: `Shantiniketan Colony, Parbhani, Maharashtra, India 431401.`,
	languages: [`English`, `Marathi`, `Hindi`],
	education: [
		{
			name: `S.Y. B.C.A.`,
			institute: `YCMOU, Maharashtra, India.`,
		},
		{
			name: `Software Engineering`,
			completionDate: new Date('2021-03-30'),
			institute: `Full stack web development using MERN, PERN stack at AttainU.`,
		},
		{
			name: `B.E. Mechanical Engineering`,
			completionDate: new Date('2016-07-01'),
			institute: `Government College of Engineering, Jalgaon, Maharashtra, India.`,
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
		},
	],
	skills: [
		`JavaScript`,
		`React.js`,
		`Next.js`,
		`Primereact`,
		`Tailwind`,
		`Git`,
	],
	certificates: [
		`Full stack web development using MERN, PERN stack, at AttainU.`,
	],
	experience: [
		{
			position: `Associate Developer`,
			startDate: new Date('2020-11-17'),
			endDate: new Date(''),
			company: {
				name: `At Quest Sustainable Solutions Pvt. Ltd. India.`,
			},
			description: [],
			projects: [
				{
					name: `Sus360\u00B0 Compass`,
					projectLinks: [],
					githubLink: ``,
					description: [
						`A Deep-dive into every aspect of Corporate Sustainability and draw actionable Sustainability roadmaps for Board and Leadership teams of a corporate entity.`,
						`Worked on complete development of client side and server side apps.`,
						`Client side app developed by using React.js, Primereact, Tailwind, PostCSS`,
						`Serve side app developed by using Spring Boot, MySql.`,
					],
				},
				{
					name: `Sus360\u00B0 Benchmarker`,
					projectLinks: [{ name: '', link: `https://care.atquest.in/sus360benchmarker` }],
					githubLink: ``,
					description: [
						`A tool for corporate entity to self-assess their current position on Corporate Sustainability.`,
						`Worked on debugging the deployment problems with created builds of react app.`,
						`Client side app developed by using React.js, Primereact, Tailwind, PostCSS.`,
						`Serve side app developed by using Node.js, MySql.`,
					],
				},
				{
					name: `At Quest Website`,
					projectLinks: [
						{ name: 'At Quest', link: `https://atquest.in` },
						{ name: 'Care At Quest', link: `https://care.atquest.in` },
						{ name: 'Life At Quest', link: `https://life.atquest.in` },
					],
					githubLink: ``,
					description: [
						`Includes apps for atquest.in, care.atquest.in and life.atquest.in`,
						`Frontend apps developed by using Next.js, Primereact, Tailwind.`,
					],
				},
				{
					name: `At Quest AmpactCorp`,
					projectLinks: [],
					githubLink: ``,
					description: [
						`A collection of apps to manage all administrative workings of At Quest services for corporate entities.`,
						`Worked on development of client side and server side apps.`,
						`Client side app developed by using React.js, Redux, Primereact, Tailwind, PostCSS`,
						`Serve side app developed by using Spring Boot, MySql.`,
					],
				},
				{
					name: `At Quest AmpactEdu`,
					projectLinks: [],
					githubLink: ``,
					description: [
						`A collection of apps to manage all administrative workings of At Quest services for educational organizations and institutions.`,
						`Worked on development of client side and server side apps.`,
						`Client side app developed by using React.js, Redux, Primereact, Tailwind, PostCSS`,
						`Serve side app developed by using Spring Boot, MySql.`,
					],
				},
			],
		},
	],
	projects: [
		{
			name: `Exploring React`,
			projectLinks: [],
			githubLink: `https://github.com/yswarkare/react-reusable-components`,
			description: [
				`My current exploration to learn react, redux, best practices, and other libraries to use with react app.`,
			],
		},
		{
			name: `Resume App`,
			projectLinks: [],
			githubLink: `https://github.com/yswarkare/Resume`,
			description: [`React app to create my resume.`],
		},
		{
			name: `Rock Paper Scissor Game`,
			projectLinks: [],
			githubLink: `https://github.com/yswarkare/rock-paper-scissors`,
			description: [`A react app to play rock-paper-scissor game with computer.`],
		},
	],
};

export default resumeInfo;
