import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y29kZSUyMGdyZWVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"/>
            <div className={styles.profile}>
                <Avatar src="https://github.com/antonialucianapires.png" />
                <strong>Antonia Luciana Pires</strong>
                <span>Web Developer && Backend</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size="20" />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}