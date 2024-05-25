"use client";
import { useState } from "react";
import Image from "next/image";
import Main from "../Components/Main";
import images from "../../public/images/images.jpeg";
import imagess from "../../public/images/image2.jpeg";
import imagesss from "../../public/images/image3.jpeg";

export default function Page() {
  const [selectedImage, setSelectedImage] = useState(images);

  return (
    <div className="min-h-screen bg-white">
      <Main />
      <div className="flex flex-col items-center justify-center p-10">
        <h1 className="text-center mt-10 mb-10 text-3xl font-bold">Traffic Interception Demo</h1>
        <div className="flex gap-4 mb-10">
          <button className="shag-btn" onClick={() => setSelectedImage(images)}>Step 1</button>
          <button className="shag-btn" onClick={() => setSelectedImage(imagess)}>Step 2</button>
          <button className="shag-btn" onClick={() => setSelectedImage(imagesss)}>Step 3</button>
        </div>
        <div className="image-container">
          <Image
            className="rounded-lg"
            src={selectedImage}
            alt="cyber"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}
