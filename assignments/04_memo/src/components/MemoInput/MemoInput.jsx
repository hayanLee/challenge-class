import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const StWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const StTimeStamp = styled.span`
    color: var(--gray);
    font-size: 10px;
    margin: 0 auto 24px;
`;
const StTextArea = styled.textarea`
    all: unset;
    flex-grow: 1;
    font-size: 15px;
    line-height: 1.16;
`;

export default function MemoInput() {
    const ref = useRef(null);
    useEffect(() => {
        ref.current.focus();
    }, []);
    return (
        <StWrapper>
            <StTimeStamp>2024년 5월 25일, 오후 1:51</StTimeStamp>
            <StTextArea ref={ref}></StTextArea>
        </StWrapper>
    );
}
