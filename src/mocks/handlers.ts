import { http, HttpResponse } from "msw";

export const handlers = [
	http.get("/ad/card", () => {
		return HttpResponse.json({
			title: 'НЕ РЕКЛАМА',
			link: '/ad',
			imageUrl: './images/me.jpg',
			link_title: 'ВЫИГРАЙ МИИИИИЛЛИИИИИООООНН!!!!!!!',
		});
	}),
];