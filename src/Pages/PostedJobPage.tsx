import PostedJob from "../PostedJob/PostedJob";
import PostedJobDesc from "../PostedJob/PostedJobDesc";

const PostedJobPage = () => {
     return <div className="min-h-[100vh] background-mine-shaft-950 font-['Poppins'] px-4 ">
        {/* <Divider size="xs" mx="md"/> */}
            <div className="flex gap-5 "> 
                <PostedJob/>
                <PostedJobDesc/>
            </div>  
    </div>
}  
export default PostedJobPage;