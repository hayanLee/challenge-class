import { ADD_NEW_MEMO, CHANGE_MEMO, DELETE_MEMO, SELECT_MEMO } from '../actions';

export const DateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};
export const TimeOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
};

const initalState = {
    selectedMemo: 1, // 현재 클릭된 메모
    memoList: [
        {
            id: 1,
            date: new Date().toLocaleDateString('ko-KR', DateOptions),
            time: new Date().toLocaleTimeString('ko-KR', TimeOptions),
            content: '새로운 메모',
        },
    ],
};

function memoReducer(prevState = initalState, action) {
    switch (action.type) {
        case SELECT_MEMO:
            return { ...prevState, selectedMemo: action.payload };
        case ADD_NEW_MEMO:
            return { ...prevState, memoList: [...prevState.memoList, action.payload] };
        case CHANGE_MEMO:
            return {
                ...prevState,
                memoList: prevState.memoList.map((memo) =>
                    memo.id === action.payload.id
                        ? { ...memo, content: action.payload.content }
                        : memo
                ),
            };
        case DELETE_MEMO:
            const updatedMemoList = prevState.memoList.filter(
                (memo) => memo.id !== action.payload
            );
            return {
                ...prevState,
                memoList: updatedMemoList,
                selectedMemo: updatedMemoList.length > 0 ? updatedMemoList[0].id : null,
            };
        default:
            return prevState;
    }
}
export default memoReducer;
