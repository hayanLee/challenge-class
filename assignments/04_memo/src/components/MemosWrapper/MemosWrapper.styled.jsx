import styled from 'styled-components';
export const StWrapper = styled.div`
    min-height: 0;
`;

export const StMemoHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid var(--border-color);
    background-color: var(--bg-color);
    border-right: 1px solid var(--border-color);
`;

export const StButton = styled.button`
    font-size: 13px;
    font-weight: 500;
    color: var(--gray);
    padding: 4px 8px;
    background-color: var(--bg-color);
    border: none;
    cursor: pointer;
    &:hover {
        color: var(--accent-color);
    }
    transition: all 120ms ease 0s;
`;
