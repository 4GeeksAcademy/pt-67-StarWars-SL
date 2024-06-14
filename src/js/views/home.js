import React, { useContext, useEffect }from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";


export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(()=> {
		 actions.getCharacters()
	}, [])

	return(

	<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
		<div className="carousel-inner">
			<div className="card" style="width: 18rem;">
				<img src="..." className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">Card title</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<a href="#" className="btn btn-primary">Go somewhere</a>
				</div>
			</div>
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

	// <div className="text-center mt-5">
	// 	<h1>Hello Rigo!</h1>
	// 	<p>
	// 		<img src={rigoImage} />
	// 	</p>
	// 	<a href="#" className="btn btn-success">
	// 		If you see this green button, bootstrap is working
	// 	</a>
	// </div>
)};

