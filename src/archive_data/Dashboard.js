import {
  UserOutlined,
  SearchOutlined,
  PayCircleOutlined,
  HistoryOutlined,
} from "@ant-design/icons";
import { FaCog, FaMoneyBill } from "react-icons/fa";
import { MdOutlineSupportAgent, MdAttachMoney } from "react-icons/md";
import { BiTable } from "react-icons/bi";
import { RiPlaneFill } from "react-icons/ri";

export const dashboard__link = [
  {
    title: "Search",
    link: "",
    icon: <SearchOutlined />,
  },

  {
    title: "Profile",
    link: "/profile",
    icon: <UserOutlined />,
  },

  {
    title: "Create Car",
    link: "/create-car",
    icon: <RiPlaneFill />,
  },
  {
    title: "Car list",
    link: "/car-list",
    icon: <HistoryOutlined />,
  },
];
