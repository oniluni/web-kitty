import Header from "@shared/ui/Header/Header";
import { MeetCard } from "./ui/MeetCard";
import { useRef, useState } from "react";
import type { MeetCardProps } from "./ui/types";

export function MeetPage() {
	const cardRef = useRef<HTMLDivElement>(null);
	const [isHidden, setIsHidden] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	const cards: MeetCardProps[] = [
		{
			title: "Github",
			imageUrl: "./images/thinker.jpg",
			link: "https://github.com/oniluni",
			link_title: "@oniluni",
		},
		{
			title: "LinkedIn",
			imageUrl: "./images/thinker.jpg",
			link: "https://linkedin.com/in/oniluni",
			link_title: "@oniluni",
		},
		{
			title: "Twitter",
			imageUrl: "./images/thinker.jpg",
			link: "https://twitter.com/oniluni",
			link_title: "@oniluni",
		},
	];

	const currentCard = cards[currentIndex];

	const handleDecision = (isAccept: boolean) => {
		if (cardRef.current) {
			cardRef.current.classList.add(
				"transition",
				"duration-500",
				"opacity-0",
				isAccept ? "-translate-x-full" : "translate-x-full"
			);

			setTimeout(() => {
				cardRef.current?.classList.add(
					isAccept ? "-translate-x-full" : "translate-x-full"
				);
				setTimeout(() => {
					cardRef.current?.classList.remove(
						"opacity-0",
						isAccept ? "-translate-x-full" : "translate-x-full"
					);
					setIsHidden(false);
					setCurrentIndex((prev) => prev + 1);
				}, 0); // время на сброс стилей перед показом следующей карточки
			}, 500);
		}
	};

	return (
		<div>
			<Header />
			<div className="flex justify-center flex-col items-center text-center border-2 rounded-[20px] p-4 min-h-[300px]">
				{!isHidden && currentCard && (
					<MeetCard
						ref={cardRef}
						title={currentCard.title}
						imageUrl={currentCard.imageUrl}
						link={currentCard.link}
						link_title={currentCard.link_title}
					/>
				)}

				<div className="flex gap-2 mt-8">
					<button
						className="px-4 py-2 bg-green-500 cursor-pointer text-white rounded hover:bg-green-600 transition"
						onClick={() => handleDecision(true)}
					>
						accept
					</button>
					<button
						className="px-4 py-2 cursor-pointer bg-red-500 text-white rounded hover:bg-red-600 transition"
						onClick={() => handleDecision(false)}
					>
						decline
					</button>
				</div>
			</div>
		</div>
	);
}
