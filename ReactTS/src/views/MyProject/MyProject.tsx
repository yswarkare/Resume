import Project from '../../models/Project';

type Props = {
	projects: Array<Project>;
};

function MyProject({ projects }: Props) {
	return (
		<div className={`w-fill my-1 mx-1 flex flex-col justify-start content-start items-start`}>
			<span className={`w-fill text-left text-10 font-bold `}>{`PROJECTS`}</span>
			{projects?.map((project, index) => {
				return (
					<div
						className={`w-fill my-1 mx-1 flex flex-col justify-start content-start items-start`}
						key={index}
					>
						<span className={`text-10 font-semibold`}>{project?.name}</span>
						<div className={`w-fill my-1 flex flex-row justify-start content-start items-start`}>
							{project?.projectLinks?.length > 0 &&
								project?.projectLinks?.map(({name, link}, index) => (
									<a className={`link-blue mx-1 text-8`} href={link} key={index}>
										{`${name || 'Project Link' }`}
									</a>
								))}
							{project?.githubLink && (
								<a className={`link-blue mx-1 text-8`} href={project?.githubLink}>
									{`GitHub Link`}
								</a>
							)}
						</div>
						<div
							className={`w-fill my-1 mx-1 flex flex-col justify-start content-start items-start`}
						>
							{project?.description?.map((item, index) => {
								return (
									<span className={`text-left`} key={index}>
										{`\u25CF ${item}`}
									</span>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default MyProject;
