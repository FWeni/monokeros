import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/tabs/homePage";
import BidPage from "../pages/tabs/bidPage";
import BuyCatalogPage from "../pages/tabs/buyCatalogPage";
import  SellPage from "../pages/tabs/sellPage";


// function Routers(){
//     return(
//         <Routes>
//             <Route index element={<Navigate to="/" />} />
//             <Route path="/" element={<HomePage />} />
//             <Route path="/onAuction" element={<BidPage />} />
//             <Route path="/onMarket" element={<BuyCatalogPage />} />
//             <Route path="/vault" element={<SellPage />} />
//         </Routes>
//     );
// };
// export default Routers;

export const Home = () => {
    <Routes>
        <Route index element={<Navigate to="/" />} />
        <Route path="/" element={<HomePage />} />
    </Routes>

}
export const Bids = () => {
    <Routes>
       <Route path="/onAuction" element={<BidPage />} />
    </Routes>
}
export const ForSale = () => {
    <Routes>
        <Route path="/onMarket" element={<BuyCatalogPage />} />
    </Routes>

}
export const YourVault = () => {
    <Routes>
        <Route path="/vault" element={<SellPage />} />
    </Routes>

}