import Nav from "./nav"


export default function Header() {

    const styles = {
        header: {
            backgroundColor: '#36323279',
            padding: '1rem',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center'
        }
    }

    return (
        <header style={styles.header}>

            <h1>Header</h1>
            <Nav />
            
        </header>
    )
};