import Image from "next/image";
import nextPic from "@/assets/next-pic.webp";

const AlbumPage = () => {
  return (
    <div>
        <h1>Using Image component:</h1>
      <Image
        src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*gJsRQOE4nxGNbAcLZmAH8w.jpeg"
        alt="next logo"
        width={500}
        height={500}
      ></Image>
      <h1>From assets: </h1>
      <Image
        src={nextPic}
        alt="next logo"
        width={500}
        height={500}
      ></Image>

        <h1>Using img tag</h1>
      <img
        src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*gJsRQOE4nxGNbAcLZmAH8w.jpeg"
        alt="next logo"
        width='500px'
        height='500px'
      ></img>
    </div>
  );
};

export default AlbumPage;
