import React, { Component } from "react";
import Project from "../models/Project";

interface Props {
	project: Project;
}
interface State {
	project: Project;
}

class MyProject extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			project: props?.project,
		};
	}

	render() {
		return (
			<div
				className={`w-fill my-1/2 mx-1 flex flex-col justify-start content-start items-start`}
			>
				<span className={`text-10 font-semibold`}>{this.state?.project?.name}</span>
				<div
					className={`w-fill my-1/2 flex flex-row justify-start content-start items-start`}
				>
					{this.state?.project?.projectLink && (
						<a
							className={`link-blue mx-1 text-8`}
							href={this.state?.project?.projectLink}
						>
							{`Project Link`}
						</a>
					)}
					{this.state?.project?.githubLink && (
						<a
							className={`link-blue mx-1 text-8`}
							href={this.state?.project?.githubLink}
						>
							{`GitHub Link`}
						</a>
					)}
				</div>
				<div
					className={`w-fill my-1/2 mx-1 flex flex-col justify-start content-start items-start`}
				>
					{this.state?.project?.description?.map((item, index) => {
						return (
							<span className={`text-left`} key={index}>
								{`\u25CF ${item}`}
							</span>
						);
					})}
				</div>
			</div>
		);
	}
}

export default MyProject;
