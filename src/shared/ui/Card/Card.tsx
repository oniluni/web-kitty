import type { CardProps } from "./types";

export const Card: React.FC<CardProps> = ({
	title,
	link,
	link_title,
	imageUrl,
	ref,
	...props
}: CardProps) => {
	return (
		<div
			className="p-6 mt-6 border-2 rounded-[20px] select-none flex items-center"
			ref={ref}
			{...props}
		>
			<div className="flex-1">
				<h2 className="text-xl font-extrabold">{title || "Title"}</h2>
				<a
					href={link || "#"}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 font-bold hover:underline"
				>
					{link_title || "Link"}
				</a>
			</div>
			<img
				src={
					imageUrl ||
					"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stray_kitten_Rambo002.jpg/1200px-Stray_kitten_Rambo002.jpg"
				}
				draggable="false"
				width={220}
				className="ml-4 rounded-[20px]"
			/>
		</div>
	);
};
