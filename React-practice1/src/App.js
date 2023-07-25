import Aboutme from "./components/AboutMe";
import Button from "./components/Button";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Aboutme />
      <Button title="Instagram" link="https://www.instagram.com/anamlfr/" />
      <Button
        title="Spotify"
        link="https://open.spotify.com/user/p4nd4n4?si=wcn8r7vqRvWm7dJfaQkdjg&nd=1"
      />
      <Button title="Twitter" link="https://twitter.com/anamlfr" />

      <Footer />
    </div>
  );
}
