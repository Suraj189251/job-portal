import { Avatar, Divider, Tabs } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import AboutComp from "./AboutComp";
import CompanyJobs from "./CompanyJobs";
import CompanyEmployees from "./CompanyEmployees";

const Company = () => {
  return (
    <div className="w-2/3">
      {/* Banner + Avatar */}
      <div className="relative">
        <img
          className="rounded-t-2xl w-full h-40 object-cover"
          src="/profile/download.jpeg"
          alt="Banner"
        />

        <img
          className="w-36 h-36 rounded-3xl absolute -bottom-1/4 left-5 p-2
                     border-8 border-mine-shaft-950 object-cover"
          src="/Google.png"
          alt="Avatar"
        />
      </div>

      {/* Content */}
      <div className="px-3 mt-12">
        <div className="text-3xl font-semibold flex justify-between items-center">
          Google
          <Avatar.Group>
      <Avatar src="/Avatar.jpeg" />
      <Avatar src="/Avatar.jpeg" />
      <Avatar src="/Avatar.jpeg" />
      <Avatar>+10k</Avatar>
    </Avatar.Group>
        </div>

        <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
          <IconMapPin className="h-5 w-5" stroke={1.5} />
          New York, United States
        </div>

        <Divider mx="xs" my="xl" />
        <div>
             <Tabs variant="outline" radius="lg" defaultValue="about">
      <Tabs.List className="[&_button]:text-lg font-semibold mb-5 [&_button[data-active='true']]:text-bright-sun-400">
        <Tabs.Tab value="about">About</Tabs.Tab>
        <Tabs.Tab value="jobs">Jobs</Tabs.Tab>
        <Tabs.Tab value="employees">Employees</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="about"><AboutComp/></Tabs.Panel>
      <Tabs.Panel value="jobs"><CompanyJobs/></Tabs.Panel>
      <Tabs.Panel value="employees"><CompanyEmployees/>  </Tabs.Panel>
    </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Company;
