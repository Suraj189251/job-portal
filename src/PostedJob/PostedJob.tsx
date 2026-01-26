import { Tabs } from "@mantine/core";
import PostedJobCard from "./PostedJobCard";
import { activeJobs } from "../Data/PostedJob";

const PostedJob = () => {
  return <div className="w-1/6 mt-5">
      <div className="text-2xl font-semibold mb-5">Jobs</div>

      <Tabs autoContrast variant="pills" defaultValue="active">
        <Tabs.List className="[&_[data-active]]:background-mine-shaft-900 font-medium">
          <Tabs.Tab value="active">Active [4]</Tabs.Tab>
          <Tabs.Tab value="draft">Drafts [1]</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="active">
          <div className="flex flex-col gap-5 mt-5">
            {
                activeJobs.map((job,index)=><PostedJobCard key={index} {...job}/>)
            }
          </div>
        </Tabs.Panel>

        <Tabs.Panel value="draft">
          s
        </Tabs.Panel>
      </Tabs>
    </div>
  
};

export default PostedJob;
