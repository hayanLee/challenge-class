import React, { useEffect, useRef } from 'react';
import addArrowKeyListener from '../MovingPikachu/movingPikachu';
import './Ground.css';

export default function Ground() {
    const pikachuRef = useRef(null);

    useEffect(() => {
        addArrowKeyListener(pikachuRef.current);
    }, []);

    return (
        <div className='ground'>
            <div className='pikachu' ref={pikachuRef}></div>
        </div>
    );
}
