import ToastWrapper from './components/Toast/ToastWrapper';
import ToastController from './components/ToastController';

const styles = {
    container: 'h-screen w-screen flex flex-col justify-center items-center',
};
function App() {
    return (
        <div className={styles.container}>
            <ToastController />
            <ToastWrapper />
        </div>
    );
}

export default App;
