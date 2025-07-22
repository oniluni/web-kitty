import type { InputProps } from "./types";

export const Input: React.FC<InputProps> = ({ ...props }) => {
	return (
		<div>
			<input
				type="text"
				placeholder="Input something here..."
				className="outline-none customInput text-center caret-transparent"
				maxLength={18}
				{...props}
			/>
		</div>
	);
};
