const Layout = async ({ children }: { children: React.ReactNode }) => {
  return <div className={' flex-1 overflow-auto p-4 h-[0px]'}>{children}</div>;
};
export default Layout;
