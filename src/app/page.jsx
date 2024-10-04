"use client"

import Image from "next/image";
import react, {useState, useEffect} from "react";

export default function Home() {

  const [flipCount, setFlipCount] = useState(0)
  const [headCount, setHeadCount] = useState(0)
  const [tailCount, setTailCount] = useState(0)
  const [coin, setCoin] = useState("coin-flip.png")

  const coinSide = ["head.png", "tail.png"]

  function flipCoin(){
    const flipCoin = coinSide[Math.floor(Math.random() * coinSide.length)];

    setCoin(flipCoin)
  }

  useEffect(() => {
    if(coin === "head.png"){
      setHeadCount(headCount + 1)
    }
    else if(coin == "tail.png"){
      setTailCount(tailCount + 1)
    }
  }, [flipCount])

  return (
    <div className="flex flex-col min-h-screen min-w-full justify-center items-center bg-slate-900">
      <div className=" border-4 rounded-3xl p-16">
        <h1 className="text-3xl font-bold my-8 text-white">Let's flip a coin</h1>

        <Image
          src={`/${coin}`}
          width={300}
          height={300}
          alt={`Coin ${coin}`}
          priority
        />

        <button className="btn btn-accent text-white my-10 text-2xl" onClick={() => (flipCoin(), setFlipCount(flipCount + 1))}>Flip Me!</button>

        <p className="text-xl font-semibold text-white">Out of {flipCount} flips, there have been {headCount} heads and {tailCount} tails.</p>
      </div>

    </div>
  );
}
