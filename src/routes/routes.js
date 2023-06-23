import Schedule from "../components/dashboard/Schedule";
import {
  HiOutlineCalendar,
  HiOutlineUserGroup,
  HiOutlineOfficeBuilding,
  HiOutlineTruck,
  HiOutlineStar,
} from "react-icons/hi";
import { HiArrowLeftOnRectangle } from "react-icons/hi2";
import RegisteredUsers from "../components/dashboard/RegisteredUsers";
import EntryGate from "../components/dashboard/EntryGate";
import CarStickerForm from "../components/dashboard/CarStickerForm";
import EntryForm from "../components/dashboard/EntryForm";
import Users from "../components/dashboard/Users";

export const DashboardRoutes = [
  {
    name: "Schedule",
    path: "schedule",
    element: <Schedule />,
    icon: <HiOutlineCalendar size={30} />,
  },
  {
    name: "Registered Users",
    path: "registered-users",
    element: <RegisteredUsers />,
    icon: <HiOutlineUserGroup size={30} />,
  },
  {
    name: "Users",
    path: "users",
    element: <Users />,
    icon: <HiOutlineUserGroup size={30} />,
  },
  {
    name: "Entry Gate",
    path: "entry-gate",
    element: <EntryGate />,
    icon: <HiOutlineOfficeBuilding size={30} />,
  },
  {
    name: "Car Sticker",
    path: "car-sticker-form",
    element: <CarStickerForm />,
    icon: <HiOutlineStar size={30} />,
    hasMargin: true,
  },
  {
    name: "Delivery",
    path: "entry-form",
    element: <EntryForm />,
    icon: <HiOutlineTruck size={30} />,
  },
  {
    name: "Logout",
    path: "#",
    isFilled: true,
    element: null,
    icon: <HiArrowLeftOnRectangle size={30} />,
    gap: true,
  },
];
