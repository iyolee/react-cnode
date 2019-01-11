export const HttpUtil = {
	getData(url) {
		return fetch(url, {
			method: type,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
				// 'x-access-token': data.token
			},
			// cache: 'force-cache'
			// mode: 'no-cors',
		}).then(response => response.json())
	}
}
