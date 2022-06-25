import styles from '../../styles/App.module.css';


export default function lojas() {
    return (
               <main>
                <div className={styles.borda}>
                    <div className={styles.bordaInterna}>
                        <div className={styles.notification}></div>
                            <div className={styles.display}>
                                <div className={styles.content}>
                                    <div className={styles.card}>
                                        <div className={styles.lojas}></div>
                                        <div className={styles.lojas}></div>
                                        <div className={styles.lojas}></div>
                                        <div className={styles.lojas}></div>
                                        <div className={styles.lojas}></div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
               </main>

    )
}

