import { Carousel } from "@mantine/carousel";
import { jobCategories } from "../Data/Data";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
const JobCategory = () => {
 return<div className="mt-20 pb-5 ">
        <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100">Browse <span className="text-bright-sun-400">Job</span>Category</div>

        <div className="text-lg mb-10 mx-auto text-mine-shaft-300 text-center w-1/2">Explore diverse job opportunities tailored to your skills. Start your career journey today!</div>

         <Carousel slideSize="22%" slideGap="md"
      controlsOffset="sm"
      controlSize={26}
      withControls
      withIndicators={false} 
      className="focus-visible:[&_button]:!outline-none[&_button]:!background-bright-sun-400 [&_button]:!border-none [&_button]:hover:opacity-75 &button]:opacity-0 hover:[&_button]:opacity-100"
      nextControlIcon={<IconArrowRight className="h-8 w-8"/>}
      previousControlIcon={<IconArrowLeft className="h-8 w-8"/>}
      >
      { 
          jobCategories.map((category,index)=><Carousel.Slide>
             <div className="flex flex-col items-center w-64 gap-2 border border-bright-sun-400 p-5 rounded-xl hover:shadow-[0_0_5px_black] my-5 transition duration-300 ease-in-out !shadow-bright-sun-300">
        <div className="p-2 background-bright-sun-300 rounded-full">
            <img className="h-8 w-8" src={'/Category/${category.name}.jpg'} alt={category.title }/>
        </div>
        <div className="text-mine-shaft-100 text-xl font-semibold">{category.title}</div>
         <div className="text-sm text-center text-mine-shaft-300">{category.description}</div>
        <div className="text-bright-sun-300 text-lg">{category.jobs}</div>
    </div>
          </Carousel.Slide>)
      }
    </Carousel>

        
 </div>
}
export default JobCategory;