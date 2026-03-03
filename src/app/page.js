import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const nomes = ["angelo", "maria", "joao", "ana"];

export default function Home() {

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
    },
    content: {
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      padding: '1rem',
    }
  }

  return (
    <div>
      <Header />

      <div style={styles.container}>

        <Sidebar />
        <div style={styles.content} className="max-w-400 h-[calc(100dvh-115px)]">
          <h1>Home Page</h1>
          <ul>
            <h2>Lista de nomes:</h2>
            {nomes.map((nome) => (
              <li key={nome}>{nome}</li>
            ))}
          </ul>
        </div>

      </div>

      <Footer />
    </div>
  )
}