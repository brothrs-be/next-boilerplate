import Link from "next/link";
import styles from "./Button.module.scss";

export function Button({ label, destination }) {
    return (
        <Link href={destination}>
            <button className={styles.Button}>
                {label}
            </button>
        </Link>
    )
}