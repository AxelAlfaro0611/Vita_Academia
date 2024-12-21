import Header1 from "../components/Header1"
import Header2 from "../components/Header2"
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import SocialMedia from "../components/SocialMedia";

import { Outlet } from "react-router-dom";

export default function Layout() {
    return <div>
        <header>
            <Header1/>
            <Header2/>
        </header>
        <main>
            <Outlet/>
            <WhatsAppButton/>
            <SocialMedia/>
        </main>
        <Footer/>
    </div>
}