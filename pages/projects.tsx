import Image from "next/image";
import { poppins300 } from "./_app";
import { poppins400 } from "./_app";

export default function Projects() {
  return (
    <>
      <main>
        <h2>Projects</h2>
        <div className="project">
          <h2>Cover Arts</h2>
          <div className="descriptionDiv">
            <div>
              <p className={poppins300.className}>
                Cover Arts is an app for those old school music fans that
                appreciate album cover art. You can search your favorite albums
                from Spotify, view the album cover art in large size and save
                them into collections. You can also use the discover-feature to
                find new music based on the cover art. You&apos;ll need a
                Spotify account to try it out.
              </p>
              <br />
              <br />
              <p className={poppins400.className}>
                Frontend: Typescript React, Next.js, Tailwind CSS, NextAuth.js
              </p>
              <br />
              <p className={poppins400.className}>
                Backend: Next.js API Routes, PostgreSQL, AWS
              </p>
              <br />
              <p className={poppins400.className}>External Apis: Spotify API</p>
              <br />
              <p className={poppins400.className}>
                Design Tools: Figma, Affinity Designer & Photo
              </p>
            </div>
            <br />
            <br />
            <Image
              alt="cover-arts-screenshot"
              src="/cover-arts-screenshot.jpg"
              className="image projectImage"
              height={190}
              width={384}
              priority={true}
              unoptimized={true}
            />
          </div>
          <br />
          <br />
          <a
            href="https://coverarts.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Link to the App
          </a>
          <a
            href="https://github.com/karokuusikallio/cover-arts"
            target="_blank"
            rel="noreferrer"
          >
            Link to the Github Repo
          </a>
        </div>
        <div className="project">
          <h2>Meet Buddy</h2>
          <div className="descriptionDiv">
            <div>
              <p className={poppins300.className}>
                Buddy is a loyal companion that you can tell about your day. You
                can share the ups and downs confidentially and Buddy will try
                his best to give you a supportive answer. Buddy is a chatbot
                created with Google Dialogflow. It is trained to react to
                users&apos; mood and respond accordingly. Dialogflow is mainly
                designed to commercial purposes but here I use it just to make
                your day a little bit better!
              </p>
              <br />
              <br />
              <p className={poppins400.className}>
                Frontend: Typescript React, Next.js, SASS
              </p>
              <br />
              <p className={poppins400.className}>
                Backend: Node.js, Express, PostgreSQL, AWS
              </p>
              <br />
              <p className={poppins400.className}>
                External Apis: Google Dialogflow CX API
              </p>
              <br />
              <p className={poppins400.className}>
                Design Tools: Figma, Affinity Designer & Photo
              </p>
            </div>
            <br /> <br />
            <Image
              alt="buddy-screenshot"
              src="/buddy-screenshot.jpg"
              className="image projectImage"
              height={190}
              width={384}
              priority={true}
              unoptimized={true}
            />
          </div>
          <br />
          <br />
          <a
            href="https://meetbuddy.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            Link to the App
          </a>
          <a
            href="https://github.com/karokuusikallio/emph-chatbot-backend"
            target="_blank"
            rel="noreferrer"
          >
            Link to the Github Repo (Backend)
          </a>
          <a
            href="https://github.com/karokuusikallio/emph-chatbot-frontend"
            target="_blank"
            rel="noreferrer"
          >
            Link to the Github Repo (Frontend)
          </a>
        </div>
        <br />
        <br />
      </main>
    </>
  );
}
