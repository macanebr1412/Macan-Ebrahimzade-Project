import H1 from "@/components/ui/H1";
import Image from "next/image";
import macanImage from "@/assets/myPic.jpg";
import P from "@/components/ui/P";
import nextJSCode from "@/assets/NextJSCode.avif";

export const metadata = {
  title: "About",
};
function Page() {
  return (
    <div className="md:w-3/4 m-auto">
      <H1>
        About{" "}
        <abbr className="no-underline" title="Macan Ebrahimzade">
          ME
        </abbr>{" "}
        and this demo project
      </H1>

      <div className="flex flex-col gap-4 w-full md:flex-row mb-20 ">
        <div className="relative w-full md:w-1/3 aspect-video md:aspect-square">
          <Image
            src={macanImage}
            alt="Macan Ebrahimzade"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-2/3">
          <P className="leading-10 md:leading-6 lg:leading-8 xl:leading-10 lg:p-8">
            I&apos;m Makan Ebrahimzade, a passionate front-end developer
            specialized in React full-stack. With meticulous attention to detail
            and innovative thinking, I design user-friendly and effective
            interfaces. My journey in web development has been fueled by my love
            for bringing innovative ideas to life, ensuring that each project is
            both visually appealing and technically sound.
          </P>
        </div>
      </div>

      <div className="flex flex-col-reverse gap-4 w-full md:flex-row ">
        <div className="w-full md:w-2/3">
          <P className="leading-10 md:leading-6 lg:leading-8 xl:leading-10 lg:p-8">
            This website has been created at the request of &apos;Just for
            Fun&apos; company as part of my interview process for the position
            of a mid-level frontend developer. It has been developed using
            Next.js and features styling with Tailwind CSS and Shadcn. The site
            offers both dark and light modes to enhance user experience.
            Additionally, I have implemented GitHub best practices throughout
            the development process.
          </P>
        </div>
        <div className="relative w-full md:w-1/3 aspect-video md:aspect-square ">
          <Image
            src={nextJSCode}
            alt="Deloper Code"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Page;
