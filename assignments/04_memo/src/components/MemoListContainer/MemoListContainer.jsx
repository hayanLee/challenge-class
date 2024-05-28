import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewMemo, deleteMemo } from '../../redux/actions';
import MemoList from '../MemoList/MemoList';
import { StButton, StMemoHeader, StWrapper } from './MemoListContainer.styled';

export default function MemoListContainer() {
    const dispatch = useDispatch();
    const selectedMemoId = useSelector((state) => state.memo.selectedMemo);

    const handleAddMemo = () => dispatch(addNewMemo());
    const handleDeleteMemo = () => {
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
