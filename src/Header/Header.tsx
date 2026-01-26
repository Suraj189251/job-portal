import { IconAnchor, IconAsset, IconSettings } from '@tabler/icons-react';
import { IconBell } from '@tabler/icons-react';
import { Avatar, Indicator } from '@mantine/core';
import NavLinks from './NavLinks';
import { useLocation } from 'react-router';
const Header=()=>{
    const location=useLocation();
    return location.pathname!="/signup"?<div className="w-full background-mine-shaft-950 px-6 text-white h-20 flex justify-between items-center  font-[poppins']">
        <div className="flex gap-1 itema-center text-bright-sun-400">
            <IconAnchor className="h-8 w-8" stroke={3}/>
            <div className="text-3xl font-semibold">JobHook</div>
        </div>

        {NavLinks()}
        
        <div className="flex gap-3 items-center">
            
            <div className="flex items-center gap-2">
              <div>Marshal</div>
              <Avatar src="avatar.png" alt="it's me" />
            </div>
            <div className=" background-mine-shaft-900 p-1.5 rounded-full">
            <IconSettings stroke={1.5}/>
        </div>
        <div className=" background-mine-shaft-900 p-1.5 rounded-full">
            <Indicator color="brightSun.4" offset={6} size={9} processing>
            <IconBell stroke={1.5}/>
            </Indicator>
            </div>
        </div>
    </div>:<></>
}
export default Header;