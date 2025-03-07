import SideNavigation from "../_components/SideNavigation";

export const metadata = {
  tiitle: "Update Profile",
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full gap-12">
      <SideNavigation />
      <div className="h-full py-1">{children}</div>
    </div>
  );
};

export default Layout;
