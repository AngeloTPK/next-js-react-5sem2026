import Link from 'next/link'

export default function Nav() {

    const styles = {
        nav: {
            display: "flex",
            gap: "1rem"
        }
    }

    return (
        <nav style={styles.nav}>

            <Link href="/">Home</Link>
            <Link href="/quem-somos">Quem Somos</Link>
            <Link href="/contatos">Contatos</Link>

        </nav >
    )
}