import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Company from "./components/Company";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background selection:bg-secondary-container selection:text-secondary">
      <Header />
      <main className="pt-20">
        <Hero />
        <Services />
        <Company />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

