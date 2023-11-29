import styles from '../../../page.module.css'

export function SolicitacaoItem(item) {
    return <div className={styles.item}>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.description}>{item.description}</div>
            <div className={styles.comment}>{item.comment}</div>
        </div>
}