import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

export default function QuemSomos() {
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
          <h1>Quem Somos</h1>
        </div>

      </div>

      <Footer />
    </div>
  )
}