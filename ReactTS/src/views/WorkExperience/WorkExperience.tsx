import Experience from '../../models/Experience'
import { getMonthDate } from '../../utils/convertDate';
import WorkProjects from '../WorkProjects/WorkProjects';

type Props = {
  experiences: Array<Experience>
}

const WorkExperience = ({ experiences }: Props) => {
  /* Experience */
  return (
    <div
    className={`w-fill my-1 mx-1 flex flex-col justify-start content-start items-start`}
  >
    <span className={`w-fill text-left text-10 font-bold `}>
      {`EXPPERIENCE`}
    </span>
    <div
      className={`w-fill flex flex-col justify-start content-start items-start`}
    >
      {experiences?.map((exp, index) => {
        return (
          <div
            className={`w-fill my-1 mx-1 flex flex-col justify-start content-start items-start`}
            key={index}
          >
            <div
              className={`w-fill flex flex-row justify-start content-start items-start`}
            >
              <span className={`mr-2 text-10 font-semibold`}>
                {`${exp.position}`}
              </span>
              <span className={`text-10`}>
                {`(${getMonthDate(exp.startDate)} - ${
                  getMonthDate(exp?.endDate) === null
                    ? "Present"
                    : getMonthDate(exp?.endDate)
                    ? getMonthDate(exp.endDate)
                    : ""
                }) at`}
              </span>
            </div>
            <span className={`text-10`}>
              {`${exp.company?.name}`}
            </span>
            <div
              className={`w-fill my-1 mx-1 flex flex-col justify-start content-start items-start`}
            >
              {exp?.projects?.length > 0 && (
                <div
                  className={`w-fill my-1 mx-1 flex flex-col justify-start content-start items-start`}
                >
                  <span
                    className={`w-fill my-1 text-left text-10 font-semibold `}
                  >
                    {`Projects`}
                  </span>
                  {exp?.projects?.map(
                    (project, index) => {
                      return (
                        <WorkProjects project={project} key={index}></WorkProjects>
                      );
                    }
                  )}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default WorkExperience