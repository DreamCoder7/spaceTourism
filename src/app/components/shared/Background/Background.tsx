import Image from "next/image";

import { BackgroundProps } from "@/app/types";

function BackgroundImage(props: BackgroundProps) {
  const { imgAlt, imgSrc, children } = props;

  return (
    <div>
      <Image
        src={imgSrc}
        alt={imgAlt}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      {children}
    </div>
  );
}

export default BackgroundImage;
