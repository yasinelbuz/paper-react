import React from "react";
import { data } from "../data";
import { useState } from "react";

export default function Content() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [uzunluk, setUzunluk] = useState(0.1);

	function handleKatlaClicked() {
		setActiveIndex((prev) => prev + 1);
		setUzunluk((prev) => prev * 2);
	}

	function handleAcClicked() {
		setActiveIndex((prev) => prev - 1);
		setUzunluk((prev) => prev / 2);
	}

	function formatNumber(length) {
		console.log(length);

		if (length <= 99) return length + "mm";
		else if (length >= 100 && length <= 999) return length / 10 + "cm";
		else if (length >= 1000 && length <= 999999) return length / 1000 + "m";
		return (
			Number((length / 1000000).toFixed(0)).toLocaleString("en-US") + "km"
		);
	}

	return (
		<div className="w-[700px] rounded-md mx-auto bg-white mt-8 p-8 flex flex-col justify-center items-center">
			<h1 className="font-bold text-2xl mb-4">{activeIndex} Kat</h1>
			<img
				src={data[activeIndex].imgUrl}
				alt=""
				className="rounded-md"
				style={{ height: "300px" }}
			/>
			<p className="mt-4">
				Kağıdınız <b>{formatNumber(uzunluk)}</b> boyunda.
			</p>
			<p className="mt-2">{data[activeIndex].desc}</p>
			<div className="flex justify-center items-center mt-4 gap-2 text-white">
				<button
					className="bg-[#f53b57] px-8 py-2 select-none rounded-full font-bold disabled:bg-gray-300"
					disabled={!activeIndex}
					onClick={handleAcClicked}
				>
					Aç
				</button>
				<button
					className="bg-[#2cb736] px-8 py-2 select-none rounded-full font-bold text-white disabled:bg-gray-300"
					disabled={activeIndex === data.length - 1}
					onClick={handleKatlaClicked}
				>
					Katla
				</button>
			</div>
		</div>
	);
}
