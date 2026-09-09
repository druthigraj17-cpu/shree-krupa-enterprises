import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import DirectorMessage from './pages/DirectorMessage.jsx';
import Services from './pages/Services.jsx';
import Products from './pages/Products.jsx';
import Projects from './pages/Projects.jsx';
import Clients from './pages/Clients.jsx';
import Contact from './pages/Contact.jsx';
import Privacy from './pages/Privacy.jsx';
import AparWiresCables from './pages/AparWiresCables.jsx';
import LuminousInvertersBatteries from './pages/LuminousInvertersBatteries.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="director-message" element={<DirectorMessage />} />
        <Route path="services" element={<Services />} />
        <Route path="products" element={<Products />} />
        <Route path="products/apar-wires-cables" element={<AparWiresCables />} />
        <Route path="products/luminous-inverters-batteries" element={<LuminousInvertersBatteries />} />
        <Route path="projects" element={<Projects />} />
        <Route path="clients" element={<Clients />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
