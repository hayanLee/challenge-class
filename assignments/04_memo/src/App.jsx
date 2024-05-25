import { Provider } from 'react-redux';
import styled from 'styled-components';
import MemoInput from './components/MemoInput/MemoInput';
import MemoListContainer from './components/MemoListContainer';
import store from './redux/store';

const StWrapContainer = styled.div`
    display: grid;
    grid-template-columns: 240px auto;
    width: 100%;
    height: 500px;
    margin: 0 auto;
    max-width: 1024px;
    background-color: var(--bg-color);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px;
    border: 1px solid var(--border-color);
    border-radius: 10px;
    overflow: hidden;
`;

function App() {
    return (
        <StWrapContainer>
            <Provider store={store}>
                <MemoListContainer />
                <MemoInput />
            </Provider>
        </StWrapContainer>
    );
}

export default App;
