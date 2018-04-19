import React from 'react';

class Menus extends React.Component {
	async allMenus() {
		const response = await fetch('http://dev.saifthegreen.com/restaurant/admin/get_all_menus');
		const result = await response.json();

		if (response.status !== 200) {
			throw Error(result.message);
		}

		return result;
	}

	async menuInfoById(menu_id) {
		const response = await fetch('http://dev.saifthegreen.com/restaurant/admin/get_menu/' + menu_id);
		const result = await response.json();

		if (response.status !== 200) {
			throw Error(result.message);
		}

		return result;
	}
}
export default Menus;