import style from '../components/Header.module.css';
import ignitelogo from '../assets/ignite-logo.svg';

export function Header() {
    return (
        <header className={style.header}>
            <img src={ignitelogo} alt="Logotipo do ignite" />
        </header>
    );
}