import { Divider } from "@mantine/core";
import SearchBar from "../FindTalent/SearchBar";
import Talents from "../FindTalent/Talents";


const FindTalentPage=()=> {
  return (
    <div className="min-h-[100vh] background-mine-shaft-950 font-['Poppins'] ">
      <SearchBar/>
      <Divider size="xs" mx="md" />
      <Talents/>
      
        
    </div>
  )
}
export default FindTalentPage;