import React from 'react';

class Auth extends React.Component {

	async authenticate(data) {
		try {
			const response = await fetch('http://dev.saifthegreen.com/restaurant/admin/user_login', {
				method: 'POST', // or 'PUT'
				body: JSON.stringify(data), // data can be `string` or {object}!
				headers: new Headers({
					Accept: 'application/json',
					'Content-Type': 'application/json'
				})
			});
			const result = await response.json();

			if (response.status !== 200) {
				throw Error(result.message);
			}

			return result;
		} catch (error) {
			console.error(error);
		}
	}
}
export default Auth;