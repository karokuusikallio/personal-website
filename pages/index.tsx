import Image from "next/image";
import Link from "next/link";
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
        <div className="aboutColumns box">
          <div>
            <p className={poppins300.className}>
              Nice to meet you. I&apos;m Karo, <b>a web developer</b>. I love
              everything related to Javascript. I make use of <b>three</b> key
              strengths areas as a developer:
            </p>
            <br />
            <h4>1. Strong Knowledge in Javascript</h4>
            <p>
              I&apos;ve been coding with Javascript for years and I am
              proficient with the popular frameworks for frontend and backend
              such as React and Express. I am familiar with the best practices
              and pitfalls related to the language. I am motivated to write
              clean and maintainable code that uses the modern features of
              Javascript. Check out some examples on the projects-page.
            </p>
            <br />
            <h4>2. UX Design Experience</h4>
            <p>
              I&apos;ve worked earlier also as a designer and I have a lot of
              knowledge about usability, accessibility and testing practices
              based on projects with large enterprises in Finland and abroad.
              This experience is valuable also when working as a developer and
              communicating with designers, customers and end-users.
            </p>
            <br />
            <h4>3. Business Background</h4>
            <p>
              I have a business degree and marketing experience that helps me to
              connect my development work to the business logic that the feature
              or service developed serves. I&apos;m also proficient with working
              with several stakeholders and expressing my views and suggestions
              with a clear and concise way. I&apos;m a team player and socially
              capable of working with different kinds of people.
            </p>
            <br />
            <br />
            <p>
              Check out my skillset in detail down below. On my free time I
              dance salsa, play guitar and watch a ton of movies.
            </p>
            <br /> <br />
          </div>
          <Image
            alt="profile-picture"
            src="/profile-picture.jpg"
            className="profilePicture image"
            height={300}
            width={300}
            priority={true}
          />
          <br />
        </div>
        <div className="pieChartDiv">
          <h2>My skillset</h2>
          <div className="pieChart aboutColumns box">
            <Pie data={data} />
            <br />
            <p>
              My projects as a consultant have been in the fields of
              international development, retail, energy and pulp and paper
              industry. These projects range from enterprise intranets and CRM
              systems to marketing tools for mobile and web.
            </p>
          </div>
          <br /> <br />
        </div>
      </main>
    </>
  );
}
