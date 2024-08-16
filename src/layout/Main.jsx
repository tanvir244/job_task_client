import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div className="bg-[#e5e5e5]">
            <Outlet />
        </div>
    );
};

export default Main;