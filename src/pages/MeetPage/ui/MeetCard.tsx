import type { MeetCardProps } from "./types";

export const MeetCard: React.FC<MeetCardProps> = ({
	title,
	link,
	link_title,
	imageUrl,
	ref,
	...props
}: MeetCardProps) => {
	return (
		<div
			className="px-4 py-16 mt-12 select-none "
			ref={ref}
			{...props}
		>
			<img
				src={
					imageUrl ||
					"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stray_kitten_Rambo002.jpg/1200px-Stray_kitten_Rambo002.jpg"
				}
				draggable="false"
				width={180}
				className="rounded-[20px] mb-4"
			/>
			<h2 className="text-lg font-bold mb-2">{title || "Title"}</h2>
			<a
				href={link || "#"}
				target="_blank"
				rel="noopener noreferrer"
				className="text-blue-500 text-sm font-medium hover:underline"
			>
				{link_title || "Link"}
			</a>
		</div>
	);
};
