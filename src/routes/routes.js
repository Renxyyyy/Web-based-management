import Schedule from "../components/dashboard/Schedule";
import {
  HiOutlineCalendar,
  HiOutlineUserGroup,
  HiOutlineOfficeBuilding,
} from "react-icons/hi";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import RegisteredUsers from "../components/dashboard/RegisteredUsers";
import EntryGate from "../components/dashboard/EntryGate";

export const DashboardRoutes = [
  {
    name: "Schedule",
    path: "dashboard/schedule",
    element: <Schedule />,
    icon: <HiOutlineCalendar size={30} />,
  },
  {
    name: "Registered Users",
    path: "dashboard/registered-users",
    element: <RegisteredUsers />,
    icon: <HiOutlineUserGroup size={30} />,
  },
  {
    name: "Entry Gate",
    path: "dashboard/entry-gate",
    element: <EntryGate />,
    icon: <HiOutlineOfficeBuilding size={30} />,
  },
  {
    name: "Logout",
    path: "#",
    element: null,
    icon: <HiArrowLeftOnRectangle size={30} />,
    gap: true,
  },
];
