"use client";

import MyNavbar from "@/components/navbar/MyNavbar";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { poppins } from "./fonsts";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [suhu, setSuhu] = useState(39.33);
  return (
    <>
      <MyNavbar activeIndex={0} />
      <div className="main-content">
        <div className={"container mx-auto mt-6"}>
          <p className={`text-[25px] text-center ${poppins.className}`}>
            Monitoring
          </p>
          <div className="container mx-auto justify-center mt-5">
            <Card className="mx-auto w-[78%]">
              <CardHeader className="block">
                <p className={`text-center text-[15px] ${poppins.className}`}>
                  SUHU
                </p>
                <p className={`text-center text-[15px] ${poppins.className}`}>
                  Celcius (°C)
                </p>
              </CardHeader>
              <Divider />
              <CardBody className="flex flex-wrap flex-row justify-center gap-x-5 py-4 px-10">
                <span
                  className={`text-center grow text-[55px] ${poppins.className}`}
                >
                  {suhu}
                </span>
                <div className="flex-none flex">
                  <Image
                    src="/assets/icons/home-celcius.png"
                    alt="Thermometer"
                    height={50}
                    width={50}
                    className="my-auto"
                  />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
