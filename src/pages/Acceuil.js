import React from 'react';
import Navacceuil from '../components/navfoots/nav/Navacceuil';
import Navmenu from '../components/navfoots/nav/Navmenu';
import Primarybody from '../components/body/Primarybody';
import Secondarybody from '../components/body/Secondarybody'
import Footer from '../components/navfoots/nav/footer/Footer';
const Acceuil = () => {
    return (
        <div>
            <div className="bg-shark-bg">
                <Navacceuil />
                <Navmenu />
                <Primarybody />
                <Secondarybody />
                <Footer />
            </div>
        </div>
    );
};

export default Acceuil;