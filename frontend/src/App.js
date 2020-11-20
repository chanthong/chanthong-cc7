import './App.css';
import { Layout, Row } from 'antd';
import Menubar from './components/Navbar/Menubar';
import Hero from './components/Hero/Hero';
import Restdisplay from './components/Restdisplay/Restdisplay';

const { Header, Footer, Content } = Layout;
function App() {
  return (
    <>
      <Header style={{ padding: "0" }}><Menubar /></Header>
      <Layout style={{ width: "80%", margin: "0 auto" }}>
          <Hero />
          <Restdisplay
            headerTilte={"ตำแหน่ง"}
          />
          <Restdisplay
            headerTilte={"แบรนด์"}
          />

        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}

export default App;
