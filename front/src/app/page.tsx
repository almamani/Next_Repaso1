import Image from "next/image";
import imgHome from "../../src/assets/img_home.png";

const Home = () => {
  return (
    <main>
      <div className="relative w-full h-[65vh] mb-8">
        <Image
          src={imgHome}
          alt="Imagen de fonde del Home"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="-z-10"
        />
        <div
          className="absolute top-0 left-0 p-5 text-left"
          style={{ margin: "40px" }}
        >
          <p className="text-2xl  text-pink-basic font-bold">40% Discount</p>
          <h1 className="text-6xl text-black-light font-bold leading-tight mb-10">
            Boat Rockerz 510
            <br />
            Wireless Headphones
          </h1>
          <p className="text-[30px] text-gray-basic text-center">
            From{" "}
            <span className="text-[30px] text-ocean-basic font-semibold text-center">
              $120.36
            </span>
          </p>
          <p className="text-[30px] text-gray-basic font-bold mt-8 text-center">
            Coming Soon...
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
