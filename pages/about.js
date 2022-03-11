import Link from "next/link";
import Header from "../components/Header";
import s from "../styles/About.module.css";

const About = () => {
  return (
    <div style={s}>
      <Header />
      <section>
        <p>This is the About page</p>
        <p>
          This project was developed with
          <div className={s.links}>
            {" "}
            <Link href="https://nextjs.org">
              <a target="_blank">Next js</a>
            </Link>
            {" and "}
            <Link href="https://pt-br.reactjs.org/docs/context.html">
              <a target="_blank">React Context API</a>
            </Link>
            .
          </div>
        </p>
      </section>
    </div>
  );
};

export default About;
