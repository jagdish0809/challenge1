import React from "react";
import Home from "../assests/home.svg";
import Notification from "../assests/notification.svg";
import Shop from "../assests/heart-4.svg";
import Conversation from "../assests/message.svg";
import Wallet from "../assests/message-1.svg";
import Subscription from "../assests/favorite.svg";
import Profile from "../assests/profile.svg";
import Setting from "../assests/setting.svg";
import { Link } from "react-router-dom";

const links = [
  { name: "Home", icon: Home },
  {
    name: "Notification",
    icon: Notification,
  },
  { name: "Shop", icon: Shop },
  {
    name: "Conversation",
    href: "/dashboard/conversation",
    icon: Conversation,
  },
  { name: "Wallet", icon: Wallet },
  {
    name: "Subscription",
    icon: Subscription,
  },
  { name: "My Profile", icon: Profile },
  { name: "Settings", icon: Setting },
];

const Navlinks = () => {
  return (
    <div className="w-full flex flex-col space-y-4">
      {links.map((link, index) => {
        return (
          <Link
            key={link.name}
            to={"/home"}
            className={
              index === 0
                ? "pl-8 flex items-center h-[32px] border-l-4 border-[#88c2bb] text-[#101010] font-semibold"
                : "pl-8 flex items-center h-[32px] border-l-4 border-white hover:border-[#88c2bb] text-[#8D8D8D] font-semibold"
            }
          >
            <img src={link.icon} alt={link.name} className="mr-4" />
            <p>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Navlinks;
