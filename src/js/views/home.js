import React, { useContext, useEffect }from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(()=> {
		 actions.getCharacters()
	}, [])


	return(
		<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
			<div className="carousel-inner d-flex justify-content-center w-100">
				{store.characters.map((item, index ) => {
					return (
							<div className={`card carousel-item ${index ===0 && "active"}`} data-bs-interval="2000" style={{width: "18rem"}}>
								<img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} className="card-img-top" alt="..."/>
								<div className="card-body">
									<h5 className="card-title">{item.name}</h5>
									<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<Link to={`/characthers/${item.uid}`} className="btn btn-primary">Go somewhere</Link>
								</div>
							</div>
					)
				})}
			</div>
			<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>

)};

