import React from 'react';

type Props = {
	certificates: Array<string>;
};

function Certificates({ certificates }: Props) {
	return (
		<div className={`w-fill mx-1 my-1 flex flex-col justify-start content-start items-start`}>
			<div className={`w-fill flex flex-row justify-start content-start items-start`}>
				<span className={`text-10 font-bold`}>{`CERTIFICATES`}</span>
			</div>
			<div
				className={`w-fill mx-1 my-1 flex flex-col justify-start content-start items-start justify-items-start`}
			>
				{certificates?.map((certificate, index) => {
					return (
						<span className={`text-10 text-left`} key={index}>
							{`\u25CF ${certificate}`}
						</span>
					);
				})}
			</div>
		</div>
	);
}

export default Certificates;
