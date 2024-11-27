const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex items-center justify-center min-h-screen px-72">
            {children}
        </div>

    )
}

export default AdminLayout