import Nav from "./nav"
import Login from "./Login"

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
        <header className="bg-white dark:bg-gray-800 flex items-center justify-between gap-x-4 p-3">

            <h1>Header</h1>
            <Nav />
            <Login />
            
            
        </header>
    )
};