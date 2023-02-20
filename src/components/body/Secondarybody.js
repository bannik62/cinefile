import React from 'react';
import '../../assets/css/Styles.css';
import rick from '../../assets/images/rick.jpg';
import data from '../../assets/json/fakedata.json'
import Cardthumb from '../card/Cardthumb';
const Secondarybody = () => {
    return (

        <div>
            <div className="secondarybody relative antiscrollbar border border-black pt-6 h-72 flex flex-row flex-wrap justify-around bg-shark-gris overflow-y-scroll">
            <h2 className='text-center absolute text-shark-text top-0'></h2>
                {data.map(({ uuid, titre }) => <Cardthumb key={uuid} image={rick} description={titre} />)}

            </div>
        </div>
    );
};

export default Secondarybody;