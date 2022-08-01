import { Routes, Route, Link, useLocation, Outlet } from "react-router-dom";
import DetailKost from "./pages/homeListing/DetailKost";
import Home from "./pages/homeListing/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { motion } from "framer-motion";
import TransaksiBerhasil from "./pages/transaction/TransaksiBerhasil";
import ChatKost from "./pages/homeListing/ChatKost";
import KostSaya from "./pages/listKost/KostSaya";
import KontrolKost from "./pages/listKost/KontrolKost";

const PageLayout = ({ children }) => children;

const AuthRouter = () => {
    return (
        <Routes>
            <Route element={<AnimationLayout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/det/:id" element={<DetailKost />} />
                <Route path="/transaction/success" element={<TransaksiBerhasil />} />
                <Route path="/chat" element={<ChatKost />} />
                <Route path="/mykost" element={<KostSaya />} />
                <Route path="/mykost/control" element={<KontrolKost />} />
            </Route>

        </Routes>

    )
}

const pageVariants = {
    initial: {
        opacity: 0,
        x: -100,
    },
    in: {
        opacity: 1,
        x: 0,
    },
    out: {
        opacity: 0,
        x: 100,
    }
};

const pageTransition = {
    type: "spring",
    ease: "easeInOut",
    duration: 0.3
};

const AnimationLayout = () => {
    const { pathname } = useLocation()
    return (
        <PageLayout>
            <motion.div
                key={pathname}
                initial="initial"
                animate="in"
                variants={pageVariants}
                transition={pageTransition}
            >
                <Outlet />
            </motion.div>
        </PageLayout>
    )
}

const NavigationRouter = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/u/*" element={<AuthRouter />} />
        </Routes>
    )
}

export default NavigationRouter
