import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { changeMemo } from '../../redux/actions';

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
    const dispatch = useDispatch();
    const ref = useRef(null);

    const selectedMemoId = useSelector((state) => state.memo.selectedMemo);
    const selectedMemo = useSelector((state) =>
        state.memo.memoList.find((memo) => memo.id === selectedMemoId)
    );

    const handleChange = (content) => {
        dispatch(changeMemo(selectedMemoId, content ? content : '새로운 메모'));
    };
    useEffect(() => {
        ref.current.focus();
    }, []);

    return (
        <StWrapper>
            <StTimeStamp>
                {selectedMemo.date}, {selectedMemo.time}
            </StTimeStamp>
            <StTextArea
                ref={ref}
                value={selectedMemo.content === '새로운 메모' ? '' : selectedMemo.content}
                onChange={(e) => handleChange(e.target.value)}
            />
        </StWrapper>
    );
}
