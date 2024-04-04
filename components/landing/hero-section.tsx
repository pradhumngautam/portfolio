import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5">
      <div className="col-span-3 flex items-start justify-center flex-col gap-6">
        <div className="text-2xl md:text-4xl font-bold ">
          👋🏻 Hey, I&apos;m <text className="text-indigo-600">Pradhumn!</text>
        </div>

        <div className="text-xl md:text-3xl font-bold">
          Building seamless web solutions
        </div>

        <div className="text-base md:text-lg">
          I&apos;m Pradhumn Gautam a Full Stack Developer from India. Passionate
          about Software Development, Cloud Engineering, Backend Systems &
          Open-Source Softwares.
        </div>

        <div className="text-base md:text-lg">
          I&apos;m currently an undergraduate, pursuing Computer Science majors
          with Specialization in Artificial Intelligence and Machine Learning
          from New Delhi, India.
        </div>
      </div>

      <div className="col-span-2 my-6">
        <Image
          src={"/photo.jpeg"}
          alt={"photo"}
          height={640}
          width={640}
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
