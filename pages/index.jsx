import Header from '../components/Header'
import Products from '../components/Products'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Header/>
      <p>Welcome to this store! Start browsing our products below :)</p>
      <Products/>
    </div>
  )
}
