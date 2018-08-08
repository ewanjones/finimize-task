import request from "axios"

export const calculate = (initial, monthly, interest) => {
	return request
		.post("/calculate/", {
			initial,
			monthly,
			interest
		})
}
