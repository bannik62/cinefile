import React from 'react';
import '../../assets/css/Styles.css';
import rick from '../../assets/images/rick.jpg';
import data from '../../assets/json/fakedata.json'
import Cardthumb from '../card/Cardthumb';
const Primarybody = () => {
    return (

            <div className="primarybody relative border border-black pt-10 h-72 flex flex-row flex-wrap justify-around bg-shark-900 overflow-y-scroll">
            <h1 className='text-shark-text text-center text-xl lg:text-3xl absolute mt-1  top-1 '>En ce moment</h1>
                {data.map(({ uuid, titre }) => <Cardthumb key={uuid} image={rick} description={titre} />)}
            </div>
        
    );
};

export default Primarybody;