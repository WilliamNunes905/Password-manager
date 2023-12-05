import styles from './header.module.css';

function Header() {
    return (
        <div className={ styles.header }>
            <h1>Gerenciador de senhas</h1>
        </div>
    );
}

export default Header;