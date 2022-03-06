type Props = {
	skills: Array<string>;
};

function MySkills({ skills }: Props) {
	return (
		<div className={`w-fill mx-1 my-1 flex flex-col justify-start content-start items-start`}>
			<div className={`w-fill flex flex-row justify-start content-start items-start`}>
				<span className={`text-10 font-bold`}>{`SKILLS`}</span>
			</div>
			<span className={`w-fill mx-1 my-1 text-left flex flex-wrap`}>
				{skills?.map((skill, index) => {
					return (
						<span className={`text-10 mx-1/2`} key={index}>
							{`${index + 1 === skills?.length ? `${skill}.` : `${skill},`}`}
						</span>
					);
				})}
			</span>
		</div>
	);
}

export default MySkills;
