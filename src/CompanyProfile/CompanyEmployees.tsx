import { talents } from "../Data/TalentData";
import TalentCards from "../FindTalent/TalentCard";

const CompanyEmployees = () => {
  return <div className="mt-10 flex flex-wrap gap-10">
            {talents.map((t, idx) => (
               idx < 6 && <TalentCards key={idx} {...t} />
            ))}
        </div>
};
export default CompanyEmployees;