import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewMemo, deleteMemo } from '../../redux/actions';
import MemoList from '../MemoList/MemoList';
import { StButton, StMemoHeader, StWrapper } from './MemosWrapper.styled';

export default function MemosWrapper() {
    const dispatch = useDispatch();
    const memos = useSelector((state) => state.memo.memoList);
    const selectedMemoId = useSelector((state) => state.memo.selectedMemo);

    const handleAddMemo = () => dispatch(addNewMemo());
    const handleDeleteMemo = () => {
        if (memos.length === 1) return alert('하나 이상의 메모는 남겨두어야 합니다');
        if (selectedMemoId) {
            dispatch(deleteMemo(selectedMemoId));
        }
    };
    return (
        <StWrapper>
            <StMemoHeader>
                <StButton onClick={handleAddMemo}>새 메모 작성하기</StButton>
                <StButton onClick={handleDeleteMemo}>삭제</StButton>
            </StMemoHeader>
            <MemoList />
        </StWrapper>
    );
}
