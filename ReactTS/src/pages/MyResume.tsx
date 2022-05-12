import { Component } from "react";
import resumeInfo from "../data/resume.data";
import Resume from "../models/Resume.model";
import { getMonthDate } from "../utils/convertDate";
import Certificates from "../views/Certificates/Certificates";
import MyProject from "../views/MyProject/MyProject";
import Skills from "../views/Skills/Skills";
import WorkExperience from "../views/WorkExperience/WorkExperience";

interface Props { }
interface State {
	resume: Resume;
}

class MyResume extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			resume: resumeInfo,
		};
	}

	render() {
		return (
			<div
				className={`w-fill mx-4 my-4 flex flex-col justify-center content-center items-center`}
			>
				{/* Header */}
				<div className={`w-fill flex flex-row justify-start content-start items-start`}>
					<div
						className={`w-70/100 flex flex-col justify-start content-start items-start`}
					>
						<span className={`text-20 font-semibold`}>{this.state.resume?.name}</span>
						<div
							className={`w-fill flex flex-row justify-start content-start items-start`}
						>
							<span className={`px-1 text-10 font-semibold`}>{`Profiles:`}</span>
							{this.state.resume.profiles.map((profile, index) => {
								return (
									<a
										className={`link px-1 text-10 text-blue-500`}
										href={profile?.profileLink}
										key={index}
									>
										{profile?.platform}
									</a>
								);
							})}
						</div>
					</div>
					<div
						className={`w-30/100 flex flex-col justify-center content-center items-center`}
					>
						<div
							className={`w-fill flex flex-row justify-center content-center items-center`}
						>
							<span className={`w-fill text-9 text-left`}>
								{this.state.resume.mobileNumber}
							</span>
						</div>
						<div
							className={`w-fill flex flex-row justify-center content-center items-center`}
						>
							<span className={`w-fill text-9 text-left`}>
								{this.state.resume.email}
							</span>
						</div>
						<div
							className={`w-fill flex flex-row justify-center content-center items-center`}
						>
							<span className={`w-fill text-9 text-left`}>
								{this.state.resume.address}
							</span>
						</div>
					</div>
				</div>

				{/* main body */}
				<div
					className={`w-fill mt-4 my-1 flex flex-row justify-start content-start items-start`}
				>
					<div
						className={`w-70/100 mt-4 mx-1 flex flex-col justify-start content-start items-start`}
					>
						{/* Education */}
						<div
							className={`w-fill my-1 mx-1 flex flex-col justify-center content-center items-center`}
						>
							<span className={`w-fill text-left text-10 font-bold `}>
								{`EDUCATION`}
							</span>
							{this.state.resume?.education?.map((course, index) => {
								return (
									<div
										className={`w-fill my-1 mx-1 flex flex-col justify-start content-start items-start`}
										key={index}
									>
										<span className={`text-10 text-left font-semibold`}>
											{course?.name}
										</span>
										{
											course?.completionDate &&
											<span className={`text-8 text-left`}>
												{getMonthDate(course.completionDate)}
											</span>
										}
										<span className={`text-9 text-left`}>
											{course?.institute}
										</span>
									</div>
								);
							})}
						</div>
						<MyProject projects={this.state.resume.projects} />
						<WorkExperience experiences={resumeInfo?.experience} />
					</div>
					<div
						className={`w-30/100 mt-4 mx-1 flex flex-col justify-start content-start items-start self-start`}
					>
						<Skills skills={this.state.resume.skills} />
						<Certificates certificates={this.state.resume.certificates} />
						{/* Languages */}
						<div
							className={`w-fill mx-1 my-1 flex flex-col justify-start content-start items-start`}
						>
							<div
								className={`w-fill flex flex-row justify-start content-start items-start`}
							>
								<span className={`text-10 font-bold`}>{`LANGUAGES`}</span>
							</div>
							<span className={`w-fill mx-1 my-1 text-left flex flex-wrap`}>
								{this.state?.resume?.languages?.map((language, index) => {
									return (
										<span className={`text-10 mx-1/2`} key={index}>
											{`${index + 1 === this.state?.resume?.languages?.length
													? `${language}.`
													: `${language},`
												}`}
										</span>
									);
								})}
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default MyResume;
