import Image from "next/image";
import { poppins300 } from "./_app";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

export default function Home() {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: [
      "Typescript React",
      "Node.js & Rest APIs",
      "Relational Databases",
      "UI & Visual Design",
      "End-to-end Testing",
      "Git",
    ],
    datasets: [
      {
        label: "%",
        data: [35, 25, 10, 20, 5, 5],
        backgroundColor: [
          "#048A81",
          "#A799B7",
          "#E0CA3C",
          "#93B7BE",
          "#2D3047",
          "#B0413E",
        ],
        borderColor: [
          "#03635D",
          "#9888AA",
          "#D4BC21",
          "#80AAB3",
          "#202232",
          "#973835",
        ],
        borderWidth: 5,
      },
    ],
  };

  return (
    <>
      <main className="about">
        <h2>About</h2>
        <div className="aboutColumns">
          <p className={poppins300.className}>
            Nice to meet you. I&apos;m Karo, <b>a web developer</b>. I&apos;m
            excited about everything related to Javascript. I use to work before
            as a UX designer but I wanted to learn to code. I studied and
            created my own little projects on my free time until I was ready to
            jump into a project that I was already working in as a designer. It
            was a React project for one of the largest retailers in Finland. I
            was so excited about being able to bring my designs alive into
            actual code. I still love designing but now I consider myself as a
            developer and I don&apos;t regret it.
            <br />
            <br />I took a couple years off IT industry and tried something
            totally different but now I&apos;m back and ready to take on
            challenges as a fully fledged developer. Check out my skillset down
            below. On my free time I dance salsa, play guitar and watch a ton of
            movies.
          </p>
          <br /> <br />
          <Image
            alt="profile-picture"
            src="/profile-picture.jpg"
            className="profilePicture image"
            height={300}
            width={300}
            priority={true}
          />
        </div>
        <br />
        <div className="pieChartDiv">
          <h2>My skillset</h2>
          <br /> <br />
          <div className="pieChart">
            <Pie data={data} />
          </div>
          <br /> <br />
        </div>
      </main>
    </>
  );
}
