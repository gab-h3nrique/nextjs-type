import styles from '../../styles/Home.module.css';
import Perfil from '../../components/Perfil';

export default function Home() {
    return (
        <div className={styles.container}>
            <Perfil name='Testando' age={99}/>
        </div>
    )
}