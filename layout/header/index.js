import styles from "./Header.module.scss";

export default function Header() {
    const { NEXT_PUBLIC_APP_TITLE } = process.env;

    return (
        <header className={styles.Header}>
            <p>{NEXT_PUBLIC_APP_TITLE}</p>
        </header>
    )
}