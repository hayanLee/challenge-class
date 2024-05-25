export const SELECT_MEMO = 'SELECT_MEMO';
export const ADD_NEW_MEMO = 'ADD_NEW_MEMO';
export const CHANGE_MEMO = 'CHANGE_MEMO';
export const DELETE_MEMO = 'DELETE_MEMO';

export const selectedMemo = (memo) => ({
    type: SELECT_MEMO,
    payload: memo,
});
export const addNewMemo = (newMemo) => ({
    type: ADD_NEW_MEMO,
    payload: newMemo,
});
export const changeMemo = (changedMemo) => ({
    type: ADD_NEW_MEMO,
    payload: changedMemo,
});
export const deleteMemo = (deletedMemo) => ({
    type: ADD_NEW_MEMO,
    payload: deletedMemo,
});
