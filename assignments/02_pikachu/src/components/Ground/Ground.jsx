import React, { useEffect, useRef, useState } from 'react';
import './Ground.css';

export default function Ground() {
    const [position, setPosition] = useState({
        top: 0,
        left: 0,
        isRight: true,
        isJumping: false,
    });
    const pikachuRef = useRef(null);
    const step = 90;

    useEffect(() => {
        function handleKeyDown(e) {
            let newTop = position.top;
            let newLeft = position.left;
            let newIsRight = position.isRight;
            let newIsJumping = position.isJumping;
            const target = pikachuRef.current;

            switch (e.code) {
                case 'ArrowUp':
                    newTop = Math.max(0, newTop - step);
                    break;
                case 'ArrowDown':
                    newTop = Math.min(810, newTop + step);
                    break;
                case 'ArrowLeft':
                    newLeft = Math.max(0, newLeft - step);
                    if (position.isRight) {
                        target.style.transform = 'scale(-1, 1)';
                        target.style.transition = '0.2s';
                        newIsRight = false;
                    }
                    break;
                case 'ArrowRight':
                    newLeft = Math.min(810, newLeft + step);
                    if (!position.isRight) {
                        target.style.transform = 'scale(1, 1)';
                        target.style.transition = '0.2s';
                        newIsRight = true;
                    }
                    break;
                case 'Space':
                    if (!position.isJumping) {
                        newIsJumping = true;
                        let initPosition = position.top; // 처음 top
                        newTop = Math.max(0, position.top - 15); // 점프 후 top
                        setTimeout(() => {
                            setPosition((prev) => ({
                                ...prev,
                                top: initPosition,
                                isJumping: false,
                            }));
                        }, 200);
                    }
                    break;
                default:
                    return;
            }

            setPosition({
                top: newTop,
                left: newLeft,
                isRight: newIsRight,
                isJumping: newIsJumping,
            });
            target.style.top = `${newTop}px`;
            target.style.left = `${newLeft}px`;
        }

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [position]);

    return (
        <div className='ground'>
            <div
                className='pikachu'
                ref={pikachuRef}
                style={{ top: position.top, left: position.left }}
            ></div>
        </div>
    );
}
