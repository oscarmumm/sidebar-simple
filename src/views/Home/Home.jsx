import { NewSidebar } from "../../components/NewSidebar/NewSidebar"
import { Sidebar } from "../../components/Sidebar/Sidebar"

export const Home = () => {
    return (
        <div className="flex h-dvh">
            <NewSidebar />
            {/* <Sidebar /> */}
            <div className="flex-grow bg-slate-200 p-3">
                <h2>Home</h2>
            </div>
        </div>
    )
}
