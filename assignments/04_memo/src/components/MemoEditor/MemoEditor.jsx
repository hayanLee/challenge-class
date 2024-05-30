import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeMemo } from '../../redux/actions';
import { StTextArea, StTimeStamp, StWrapper } from './MemoEditor.styled';

export default function MemoEditor() {
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
    }, [selectedMemoId]);

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
