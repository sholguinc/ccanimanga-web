import styles from "src/styles/PageLoading.module.scss"

const LoadingPage = () => {
    return (
        <div className={styles.container}>
            <p className={styles.load}></p>
        </div>
    );
};

export default LoadingPage;