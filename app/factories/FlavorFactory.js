"use strict";

app.factory("FlavorFactory", function($q, $http){

	let getFlavors = () => {
		let items = [];
		return $q((resolve, reject) => {
			$http.get('./data/flavors.json')
			.then((itemObject) => {
				let itemCollection = itemObject.data;
				console.log("itemCollection", itemCollection);
				resolve(itemCollection.flavors);
			})
			.catch((error) => {
				reject(error);
			});
		});
	};

	return {getFlavors};
});