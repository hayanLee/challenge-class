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
    const STEP = 90;

    useEffect(() => {
        function handleKeyDown(e) {
            handleMovement(e);
        }
        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [position]);

    const handleMovement = (e) => {
        let newTop = position.top;
        let newLeft = position.left;
        let newIsRight = position.isRight;
        let newIsJumping = position.isJumping;
        const target = pikachuRef.current;

        switch (e.code) {
            case 'ArrowUp':
                newTop = Math.max(0, newTop - STEP);
                break;
            case 'ArrowDown':
                newTop = Math.min(810, newTop + STEP);
                break;
            case 'ArrowLeft':
                newLeft = Math.max(0, newLeft - STEP);
                if (position.isRight) {
                    flipPikachu(false);
                    newIsRight = false;
                }
                break;
            case 'ArrowRight':
                newLeft = Math.min(810, newLeft + STEP);
                if (!position.isRight) {
                    flipPikachu(true);
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
        movePikachu(target, newTop, newLeft);
    };

    const movePikachu = (target, newTop, newLeft) => {
        target.style.top = `${newTop}px`;
        target.style.left = `${newLeft}px`;
    };

    const flipPikachu = (isRight) => {
        const target = pikachuRef.current;
        target.style.transform = isRight ? 'scale(1, 1)' : 'scale(-1, 1)';
        target.style.transition = '0.2s';
    };

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
