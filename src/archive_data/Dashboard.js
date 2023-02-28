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
    title: "Dashboard",
    link: "/user-dashboard",
    icon: <UserOutlined />,
  },

  {
    title: "Create Car",
    link: "/create-car",
    icon: <RiPlaneFill />,
  },
  {
    title: "Car Log",
    link: "/car-log",
    icon: <HistoryOutlined />,
  },
  {
    title: "Bookmark",
    link: "/car-list",
    icon: <HistoryOutlined />,
  },
];
