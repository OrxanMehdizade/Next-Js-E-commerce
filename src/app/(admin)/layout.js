import SideMenuComponent from "@/components/SideMenuComponent";

const SideMenuLayout = ({ children }) => {
  return (
    <div className="flex">
      <SideMenuComponent />
      {children}
    </div>
  );
};

export default SideMenuLayout;
