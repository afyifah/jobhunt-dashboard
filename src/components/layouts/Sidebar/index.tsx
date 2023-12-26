import { Button } from "@/components/ui/button";
import React, { FC } from "react";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { FaUsersViewfinder } from "react-icons/fa6";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { RiListIndefinite } from "react-icons/ri";
import { GrSchedule } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <div className="pb-12 min-h-screen">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2 ">
          <h2 className="mb-4 px-3  text-2xl font-semibold">Dashboard</h2>
          <div className="space-y-3 "></div>
          <Button
            variant={"ghost"}
            className="w-full justify-start text-lg rounded-none mb-3 hover:text-primary"
          >
            <AiOutlineHome className="mr-2 text-2xl" />
            Home
          </Button>
          <Button
            variant={"ghost"}
            className="w-full justify-start text-lg rounded-none mb-3 hover:text-primary"
          >
            <AiOutlineMessage className="mr-2 text-2xl " />
            Messages
          </Button>
          <Button
            variant={"ghost"}
            className="w-full justify-start text-lg rounded-none  mb-3 hover:text-primary"
          >
            <TbBuildingSkyscraper className="mr-2 text-2xl " />
            Company Profile
          </Button>
          <Button
            variant={"ghost"}
            className="w-full justify-start text-lg rounded-none  mb-3 hover:text-primary"
          >
            <FaUsersViewfinder className="mr-2 text-2xl " />
            All Applicants
          </Button>
          <Button
            variant={"ghost"}
            className="w-full justify-start text-lg rounded-none mb-3 hover:text-primary"
          >
            <RiListIndefinite className="mr-2 text-2xl " />
            Job Listing
          </Button>
          <Button
            variant={"ghost"}
            className="w-full justify-start text-lg rounded-none mb-3  hover:text-primary"
          >
            <GrSchedule className="mr-2 text-2xl " />
            My Schedule
          </Button>
        </div>
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-2xl font-semibold">Setting</h2>
            <Button
              variant={"ghost"}
              className="w-full mb-2 justify-start text-lg rounded-none  hover:text-primary"
            >
              <IoSettingsOutline className="mr-2 text-2xl" />
              Settings
            </Button>
            <Button
              variant={"ghost"}
              className=" text-red-500 w-full justify-start text-lg rounded-none hover:bg-red-100 hover:text-red-500 "
            >
              <IoLogOutOutline className="mr-2 text-2xl" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
