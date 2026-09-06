import type { FC } from "react"
import styles from './Container.module.css'

export const Container: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}
