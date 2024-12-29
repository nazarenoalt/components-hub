const SidebarItem = ({name, component}) => {
  return (
    <div role="button" className="text-white border-b pt-4 hover:bg-blue-600 transition-all">
      <span>{name}</span>
    </div>
  )
}

export default SidebarItem