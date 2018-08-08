import request from "axios"

export const calculate = (initial, monthly, interest, interval) => {
	return request
		.post("/calculate/", {
			initial,
			monthly,
			interest,
		    interval	
		})
}
