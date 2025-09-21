import React from "react";
// import { NotificationsSidebar } from "../../components/layout/NotificationsSidebar";
// import { Header } from "../../components/layout/Header";
import { OrderListSection } from "./OrderListSection";
//import {HeaderSection} from "../../screen/sections/HeaderSection/HeaderSection";
//import {NavigationSection} from "../../screen/NavigationSection/NavigationSection"


export const OrdersListLight = () => {
  return (
    <div className="flex h-screen w-full bg-white dark:bg-gray-900 overflow-y-auto">
    {/* < NavigationSection/> */}
      <div className="flex flex-col flex-1 min-w-0">
        {/* <HeaderSection/> */}
        <OrderListSection />
      </div>
    </div>
  );
};
