import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5">
      <div className="col-span-3 flex items-start justify-center flex-col gap-6">
        <h1 className="text-red-500 text-xl font-semibold">
          THIS PORTFOLIO IS NOT UNDER MAINTAINANCE SINCE SEPTEMBER 2023, PLEASE
          CHECKOUT THE UPDATED ONE{" "}
          <Link
            href={"https://pradhumngautam.vercel.app"}
            className="text-blue-600"
          >
            HERE
          </Link>
        </h1>

        <div className="text-2xl md:text-4xl font-bold ">
          👋🏻 Hey, I&apos;m <text className="text-emerald-600">Pradhumn!</text>
        </div>

        <div className="text-xl md:text-3xl font-bold text-neutral-200">
          Building seamless web solutions
        </div>

        <div className="text-base md:text-lg text-neutral-300">
          I&apos;m Pradhumn Gautam a Full Stack Developer from India. Passionate
          about Software Development, Cloud Engineering, Backend Systems &
          Open-Source Softwares.
        </div>

        <div className="text-base md:text-lg text-neutral-300">
          I&apos;m currently an undergraduate, pursuing Computer Science majors
          with Specialization in Artificial Intelligence and Machine Learning
          from New Delhi, India.
        </div>
      </div>

      <div className="col-span-2 my-6 items-center justify-center flex">
        <Image
          src={"/photo.jpeg"}
          alt={"photo"}
          height={400}
          width={400}
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
