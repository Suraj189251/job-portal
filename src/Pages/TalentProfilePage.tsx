import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Profile from "../TalentProfile/Profile";
import { profile } from "../Data/TalentData";
import RecommendTalent from "../TalentProfile/RecommendTalent";
const TalentProfilePage=()=> {
  return (
    <div className="min-h-[100vh] background-mine-shaft-950 font-['Poppins'] p-4">
      <Link className="my-4 inline-block"to="/find-talent">
            <Button leftSection={<IconArrowLeft size={20}/>} color="bright-sun.4" variant="light">Back</Button>
            </Link>
            <Divider size="xs" mx="md"/>
            <div className="flex gap-5">
                <Profile {...profile}/>
                <RecommendTalent/>
            </div>
      
        
    </div>
  )
}
export default TalentProfilePage;