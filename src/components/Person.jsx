import React from 'react';

const Person = ({info}) => {
    return (
        <div className='bg-orange-200 p-6 rounded-md'>
            <img className='rounded-full mb-3' src={info.image} alt="" />
            <p className='text-xl'>{info.name}</p>
            <p className=''>{info.university} <span>, {info.country}</span></p>
            
            
        </div>
    );
};

export default Person;