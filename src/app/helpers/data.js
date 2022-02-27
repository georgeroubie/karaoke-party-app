const getItems = () => {
	const data = localStorage.getItem('data');
	if (data) {
		try {
			const result = JSON.parse(data);
			return result;
		} catch (ex) {
			return [];
		}
	}
	return [];
};

const saveItems = (items) => {
	localStorage.setItem('data', JSON.stringify(items));
};

const saveItem = (id, name, song) => {
	const savedItems = getItems();
	if (savedItems.find((item) => item.id === id)) {
		saveItems(
			savedItems.map((item) => {
				if (item.id === id) {
					return {
						id,
						name,
						song,
					};
				}
				return item;
			})
		);
	} else {
		saveItems([
			...savedItems,
			{
				id: Date.now(),
				name,
				song,
			},
		]);
	}
};

const deleteItem = (id) => {
	const items = getItems();
	saveItems(items.filter((item) => item.id !== id));
};

export { saveItem, getItems, deleteItem };
