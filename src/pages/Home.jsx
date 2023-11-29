import { Link } from "react-router-dom";
import Button from "../components/buttons/Button";

const Home = () => {
  return (
    <>
      <header className="header">
        <img src="../../public/header-img.png" alt="header image" />
      </header>
      <main className="main">
        <section className="container section-hero">
          <h1 className="heading-primary">Welcome to my simple Blog</h1>
          <Link to="/blog">
            <Button contentText={"Go to articles"} />
          </Link>
        </section>
      </main>
    </>
  );
};

export default Home;
