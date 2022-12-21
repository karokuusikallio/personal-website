import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function CV() {
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
          >
            <h3 className="vertical-timeline-element-title">
              Trained Massage Therapist
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Hieroja Helsinki - Helsinki, Finland
            </h4>
            <p>
              I wanted to take a break for IT and learn about human body and
              wellbeing. After graduating from a massage school I worked 6
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
            iconStyle={{ background: "#048A81", color: "#fff" }}
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
              Finland. UX/UI design, service design, front-end development with
              Typescript, React and Sass.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#048A81", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #048A81" }}
            date="2018"
            iconStyle={{ background: "#048A81", color: "#fff" }}
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
              different marketing materials and
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#048A81", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #048A81" }}
            date="2017-2018"
            iconStyle={{ background: "#048A81", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">UX Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Sibesonke Oy - Espoo, Finland
            </h4>
            <p>Blaa blaa blaa</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#048A81", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #048A81" }}
            date="2014-2017"
            iconStyle={{ background: "#048A81", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              International Business
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Haaga-Helia UAS - Helsinki, Finland
            </h4>
            <p>Blaa blaa blaa</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </main>
    </>
  );
}
