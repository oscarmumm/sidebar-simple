import { Sidebar } from "../../components/Sidebar/Sidebar"

export const Home = () => {
    return (
        <div className="flex h-dvh">
            <Sidebar />
            <div className="flex-grow">
                <h2>Home</h2>
            </div>
        </div>
    )
}
