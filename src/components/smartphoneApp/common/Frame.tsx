import styles from '@/styles/components/smartphoneApp/common/frame.module.css'

export type FrameProps = {
    children?: React.ReactNode
}

export function Frame(props: FrameProps) {
    return (
        <div className={styles.frame}>{props.children}</div>
    )
}