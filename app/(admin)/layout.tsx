const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen items-center justify-center px-72">
      {children}
    </div>
  );
};

export default AdminLayout;
