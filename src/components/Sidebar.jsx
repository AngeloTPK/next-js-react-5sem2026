import Nav from "./nav"

export default function Sidebar() {

    const styles = {
        sidebar: {
            backgroundColor: '#3632322a',
            padding: '1rem',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '15%',
            gap: "1rem"
        }
    }

        return(
            <aside style = { styles.sidebar } >
                <h2>Sidebar</h2>
                <Nav />
            </aside >
        )

}