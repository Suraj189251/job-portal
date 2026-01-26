import { Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";

const Profile = (props:any) => {
  return (
    <div className="w-2/3">
      <div className="relative">
        <img
          className="rounded-t-2xl w-full h-25"
          src="\profile\download.jpeg"
          alt="Banner"
        />

        <img
          className="w-48 h-48 rounded-full absolute -bottom-24 left-3 border-8 border-mine-shaft-950"
          src="\profile\riya.jpeg"
          alt="Avatar"
        />
      </div>

      <div className="px-3 mt-28">
        <div className="text-3xl font-semibold flex justify-between items-center">{props.name}
          <Button color="bright-sun.4" variant="light">
            Message
          </Button>
        </div>

        <div className="text-xl flex gap-1 items-center mt-2">
          <IconBriefcase className="h-5 w-5" stroke={1.5} />
          {props.role} &bull; {props.company}</div>

        <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
          <IconMapPin className="h-5 w-5" stroke={1.5} />
          {props.location}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">About</div>
        <div className="text-sm text-mine-shaft-300 text-justify">
          {props.about}
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-3">skill</div>
        <div className="flex flex-wrap gap-2">
            {
                (props.skill ?? []).map((skill:any,index:any)=><div key={index} className="bg-bright-sun-300 text-sm font-medium bg-opacity-15 rounded-3xl text-bright-sun-400 px-3 py-1">{skill}</div>)
            }
        </div>
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3 ">
        <div className="text-2xl font-semibold mb-5">Experience</div>
        <div className="flex flex-col gap-8">
        {
          props.experience.map((exp:any,index:any)=><ExpCard key={index} {...exp}/>)
         }
        </div>
        
        
      </div>
      <Divider mx="xs" my="xl" />
      <div className="px-3">
        <div className="text-2xl font-semibold mb-5">Certification</div>
        <div className="flex flex-col gap-8">
        {
          props.certifications.map((certi:any,index:any)=><CertiCard key={index} {...certi}/>)
         }
        </div>
      </div>
    </div>
  );
};

export default Profile;
