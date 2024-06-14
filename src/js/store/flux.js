const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters:[],
		},

		actions: {
			getCharacters : async() => {
				const res = await fetch(`https://www.swapi.tech/api/people/`)
				const data = await res.json()
				setStore({characters: data.resuts})
			}
		}
		
	};
};

export default getState;
