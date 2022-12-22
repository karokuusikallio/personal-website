import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image from "next/image";

export default function CV() {
  const massageImage = (
    <Image
      src="/massage-svgrepo-com.svg"
      alt="massage-image"
      height={60}
      width={60}
      className="cvImage"
    />
  );

  const avanadeLogo = (
    <Image
      src="/avanade-logo-vector.svg"
      alt="avanade-logo"
      height={40}
      width={40}
      className="cvImageAvanade"
    />
  );

  const kenyanFlag = (
    <Image
      src="/kenya-flag-round.svg"
      alt="kenyan-flag"
      height={60}
      width={60}
      className="cvImage"
    />
  );

  const sibesonkeLogo = (
    <Image
      src="/sibesonke-logo.png"
      alt="sibesonke-logo"
      height={12}
      width={60}
      className="cvImageSibesonke"
    />
  );

  const hhLogo = (
    <Image
      src="/hh.svg"
      alt="haaga-helia-logo"
      height={40}
      width={40}
      className="cvImageHH"
    />
  );

  return (
    <>
      <main>
        <h2>CV</h2>
        <VerticalTimeline lineColor={"lightGrey"}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#048A81", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #048A81" }}
            date="2021-2022"
            iconStyle={{ background: "#048A81", color: "#fff" }}
            icon={massageImage}
          >
            <h3 className="vertical-timeline-element-title">
              Trained Massage Therapist
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Hieroja Helsinki - Helsinki, Finland
            </h4>
            <p>
              I wanted to take a break from IT and learn about the human body
              and wellbeing. After graduating from a massage school I worked 6
              months as a massage entrepreneur in Helsinki area. These skills
              will be useful throughout my life despite making a decision not to
              make it a career.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#048A81", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #048A81" }}
            date="2018-2020"
            iconStyle={{
              background: "#F0EEF1",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            icon={avanadeLogo}
          >
            <h3 className="vertical-timeline-element-title">
              UX Designer / Web Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Avanade Finland Oy - Helsinki, Finland
            </h4>
            <p>
              Avanade is a global consulting firm focusing on Microsoft
              products. I did projects with some of the largest companies in
              Finland. Projects ranged from building an intranet for a large
              retailer to designing an developing an enterprise CRM system to
              one of the leading energy companies in Finland. My main work areas
              were UX/UI design, service design, front-end development with
              Typescript, React and Sass.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#048A81", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #048A81" }}
            date="2018"
            iconStyle={{ background: "#048A81", color: "#fff" }}
            icon={kenyanFlag}
          >
            <h3 className="vertical-timeline-element-title">
              UX Designer / Web Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Nairobi Garage Ltd - Nairobi, Kenya
            </h4>
            <p>
              I spend a summer in Kenya working with a local startup-hub. I
              worked on improving the usability of their website created
              different marketing materials and helped to develop integrations
              with in-house companies&apos; services and the hub&apos;s website.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#048A81", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #048A81" }}
            date="2017-2018"
            iconStyle={{
              background: "#F0EEF1",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            icon={sibesonkeLogo}
          >
            <h3 className="vertical-timeline-element-title">UX Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Sibesonke Oy - Espoo, Finland
            </h4>
            <p>
              Sibesonke makes marketing tools for agribusiness for African
              market. I worked as a designer on a large project with World Food
              Programme for creating an mobile app for their field workers in
              Tanzania. The app was later on introduced to several other African
              countries. I also designer their mobile app for agricultural
              businesses and did user research on-site in Tanzania and Kenya.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#048A81", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #048A81" }}
            date="2014-2017"
            iconStyle={{
              background: "#F0EEF1",
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            icon={hhLogo}
          >
            <h3 className="vertical-timeline-element-title">
              International Business
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Haaga-Helia UAS - Helsinki, Finland
            </h4>
            <p>
              I graduated with a business degree with a focus on service design
              and web marketing. I did my internship and thesis for a Finnish IT
              start-up.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        <br />
        <br />
      </main>
    </>
  );
}
