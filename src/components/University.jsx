import React from 'react';

const University = ({info}) => {
    return (
        <div className='bg-orange-200 text-lg'>
                <h2 className='p-5 rounded'>{info.university}</h2>
        </div>
    );
};

export default University;