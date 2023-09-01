import Banner from "~/components/Banner";
import Header from "~/components/Header";
import Notify from "~/components/Notify";
import Section from "~/components/Section";

function Home() {
  return (
    <div className="w-full">
      <Header />
      <Banner />
      <Notify />
      <Section />
    </div>
  );
}

export default Home;
