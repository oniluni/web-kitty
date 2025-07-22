import { Card } from "@shared/ui/Card/Card";
import { Input } from "@/pages/Homepage/ui/Input";
import React, { useRef, useState } from "react";
import "@styles/HomePage.css";
import type { CardProps } from "@/shared/ui/Card/types";
import Header from "@/shared/ui/Header/Header";

export function HomePage() {
	const [cards, setCards] = useState<CardProps[]>([]);

	const addCard = ({ title, imageUrl, link, link_title }: CardProps): void => {
		if (cards.some((card) => card.title === title || card.link === link)) {
			return;
		}
		setCards((prev) => [
			...prev,
			{
				title: title,
				imageUrl: imageUrl,
				link: link,
				link_title: link_title,
			},
		]);
	};

	const inputField = useRef<HTMLInputElement>(null);
	const titleRef = useRef<HTMLHeadingElement>(null);

	const aliases: Record<string, string> = {
		telegram: "tg",
		тг: "tg",
		телега: "tg",
		телеграм: "tg",
		tg: "tg",
		github: "git",
		гит: "git",
		гитхаб: "git",
		гх: "git",
		git: "git",
		repo: "git",
		repository: "git",
	};

	const tgHandler = () => {
		addCard({
			title: "Telegram",
			imageUrl: "./images/me.jpg",
			link: "https://t.me/ooppttiimmuuss",
			link_title: "@ooppttiimmuuss",
		});
	};

	const gitHandler = () => {
		addCard({
			title: "Github",
			imageUrl: "./images/thinker.jpg",
			link: "https://github.com/oniluni",
			link_title: "@oniluni",
		});
	};

	const rawHandlers: Record<string, () => void> = {
		something: () => alert("wow. ya not actually smartest one"),
		wiggle: () => titleRef.current?.classList.add("wiggle"),
		on: () => {
			titleRef.current?.classList.remove("text-glow-off");
			titleRef.current?.classList.add("text-glow-on", "glass-card-on");
		},
		off: () => {
			titleRef.current?.classList.remove("text-glow-on", "glass-card-on");
			titleRef.current?.classList.add("text-glow-off");
		},
		break: () => titleRef.current?.classList.remove("wiggle"),
		tg: tgHandler,
		git: gitHandler,
	};

	const commandHandlers: Record<string, () => void> = {
		...rawHandlers,
		...Object.fromEntries(
			Object.entries(aliases).map(([alias, actual]) => [
				alias,
				rawHandlers[actual],
			])
		),
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key !== "Enter") return;

		const command = inputField.current?.value.trim().toLowerCase();
		if (!command) return;

		const handler = commandHandlers[command];

		if (handler) {
			handler();
			inputField.current!.value = "";
		} else {
			// неизвестная команда;
		}
	};

	return (
		<div>
			<Header />
			<div className="flex justify-center">
				<div className="mt-24">
					<h1
						className="text-center glass-card glass-card-on text-7xl text-glow-on select-none text-transparent bg-clip-text bg-gradient-to-r user-g"
						ref={titleRef}
					>
						Hello, world!
					</h1>
					<div className="flex justify-center">
						<Input ref={inputField} onKeyDown={handleKeyDown} />
					</div>
					<div>
						{cards.map((card, index) => (
							<Card
								key={index}
								title={card.title}
								imageUrl={card.imageUrl}
								link={card.link}
								link_title={card.link_title}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
