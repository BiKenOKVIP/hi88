// import { useEffect, useState } from "react";
import Banner from "~/components/Banner";
import MainMenu from "~/components/MainMenu";
import Header from "~/components/Header";
import Navigate from "~/components/Navigate";
import Notify from "~/components/Notify";
import Section from "~/components/Section";
import Footer from "~/components/Footer";

function Home() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/hot-nhat")
  //     .then((res) => res.json())
  //     .then((data) => setData(data));
  // }, []);

  // console.log(data);
  return (
    <div className="w-full">
      <Header />
      <Banner />
      <Notify />
      <Section />
      <Navigate />

      <Footer />
      <MainMenu />
    </div>
  );
}

export default Home;
