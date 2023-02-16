import React from 'react';
import Navacceuil from '../components/navfoots/nav/Navacceuil';
import Navmenu from '../components/navfoots/nav/Navmenu';
import Bodyacceuil from '../components/body/Bodyacceuil';

const Acceuil = () => {
    return (
        <div>
            <div className="bg-shark-bg">
                <Navacceuil />
                <Navmenu />
                <Bodyacceuil />
                <h1>acceuil</h1>
            </div>
        </div>
    );
};

export default Acceuil;