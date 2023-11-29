import styles from '../../../page.module.css'

export function ProfessorItem(item) {
    return <div className={styles.item}>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.email}>{item.email}</div>
        </div>
}