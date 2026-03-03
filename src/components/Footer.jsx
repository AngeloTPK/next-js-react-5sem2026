export default function Footer() {

    const styles = {
        footer: {
            backgroundColor: '#3632327a',
            padding: '1rem',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
        }
    }
    
    return (
        <footer style={styles.footer}>
            <h1>Footer</h1>
            <p>&copy @ Angelo Gabriel; 2026</p>
        </footer>
    )
}