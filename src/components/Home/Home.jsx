import Functionality from "../Functionlity/Functionality";
import Products from "../Products/Products";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="flex">
                <div className="w-[20%] bg-white">
                    <Functionality />
                </div>
                <div className="w-[80%]">
                    <Products />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;