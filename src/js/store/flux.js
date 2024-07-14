const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			vehicles: [],
			planets: [],
			charactersfavorite: [],
			vehiclesfavorite: [],
			planetsfavorite: [],
			charactersdetails: {},
			charactersphoto: {},
			vehiclesdetails: {},
			planetsdetails: {},
		},

		actions: {
			getCharacters: async () => {
				const res = await fetch("https://www.swapi.tech/api/people/")
				const data = await res.json()
				setStore({ characters: data.results })
			},

			getVehicles: async () => {
				const res = await fetch("https://www.swapi.tech/api/vehicles/")
				const data = await res.json()
				setStore({ vehicles: data.results })
			},

			getPlanets: async () => {
				const res = await fetch("https://www.swapi.tech/api/planets/")
				const data = await res.json()
				setStore({ planets: data.results })
			},

			getCharactersDetails: async (uid) => {
				const res = await fetch(`https://www.swapi.tech/api/people/${uid}`)
				const data = await res.json()
				console.log(data)
				setStore({
					charactersdetails: data.result.properties
				})
			},


			phothoCharacters: async (uid) => {
				const res = await fetch(`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`)
				const data = await res.json()
				console.log(data)
				setStore({
					phothocharacters: data
				})
			},

			getVehiclesDetails: async (uid) => {
				const res = await fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
				const data = await res.json()
				console.log(data)
				setStore({
					vehiclesdetails: data.result.properties
				})
				console.log(data.result.properties)
			},

			getPlanetsDetails: async (uid) => {
				const res = await fetch(`https://www.swapi.tech/api/planets/${uid}`)
				const data = await res.json()
				console.log(data)
				setStore({
					planetsdetails: data.result.properties
				})
			},

			addFavoriteCharacters: async (id, name) => {
				const { charactersfavorite } = getStore()
				setStore({ charactersfavorite: [...charactersfavorite, { id, name }] })
			},


			addFavoritePlanets: async (id, name) => {
				const { planetsfavorite } = getStore()
				setStore({planetsfavorite: [...planetsfavorite, { id, name }] })
			},


			addFavoriteVehicles: async (id, name) => {
				const { vehiclesfavorite } = getStore()
				setStore({ vehiclesfavorite: [...vehiclesfavorite, { id, name }] })
			},


			deleteCharacters: (name) => {
				let store = getStore()
				const result = store.charactersfavorite.filter((favorito) => (favorito != name));
				setStore({ charactersfavorite: result })
			},


			deleteVehicles: (name) => {
				let store = getStore()
				const result = store.vehiclesfavorite.filter((favorito) => (favorito != name));
				setStore({ vehiclesfavorite: result })
			},



			deletePlanets: (name) => {
				let store = getStore()
				const result = store.planetsfavorite.filter((favorito) => (favorito != name));
				setStore({ planetsfavorite: result })
			},

		}

	};
};

export default getState;
