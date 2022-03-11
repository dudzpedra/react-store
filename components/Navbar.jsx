import Link from "next/link"
import s from '../styles/Navbar.module.css'
import { useStore } from "./Store"

const Navbar = () => {
    const state = useStore()
    console.log(state)

    return (
        <nav className={s.navbar}>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <Link href='/about'>
                <a>About</a>
            </Link>
            <Link href='/checkout'>
                <a>Checkout ({state.length})</a>
            </Link>
        </nav>
    )
}

export default Navbar