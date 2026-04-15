interface SidebarProps {
    isOpen: boolean;
}

export default function Sidebar({ isOpen }: SidebarProps) {
    return (
        <aside 
            className={`fixed top-0 left-0 h-full w-[250px] bg-[#222] text-white p-6 z-[1000] shadow-2xl transition-transform duration-300 ease-in-out ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            <div className="mb-8 pb-3 border-b border-[#444]">
                <h2 className="text-xl font-bold">Menu</h2>
            </div>
            <ul className="flex flex-col gap-4">
                <li className="cursor-pointer hover:text-sky-400 transition-colors py-2 border-b border-[#333]">Home</li>
                <li className="cursor-pointer hover:text-sky-400 transition-colors py-2 border-b border-[#333]">About</li>
                <li className="cursor-pointer hover:text-sky-400 transition-colors py-2 border-[#333]">Contact</li>
            </ul>
        </aside>
    )
}