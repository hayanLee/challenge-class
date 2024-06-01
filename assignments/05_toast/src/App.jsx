import ToastsContainer from './components/Toast/ToastsContainer';
import ToastController from './components/ToastController';

const styles = {
    container: 'h-screen w-screen flex flex-col justify-center items-center',
};
function App() {
    return (
        <div className={styles.container}>
            <ToastController />
            <ToastsContainer />
        </div>
    );
}

export default App;
