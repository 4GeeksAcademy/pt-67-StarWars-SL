import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const vehiclesDetails = props => {

	const { store, actions } = useContext(Context);
	const params = useParams();

	useEffect(() => {

		actions.getVehiclesDetails(params.uid)
	

	}, [])

	return (

		<div className="jumbotron mx-5 my-5">


			<div className="card mb-3 border border-1  rounded-start  border border-warning-subtle" style={{ width: "1260px", height: "555px", background: "black", color: "#FFEB1F" }}>

				<div className="d-flex ">
					<div className="col-md-4">
						<img src="https://starwars-visualguide.com/assets/img/vehicles/18.jpg" className="img-fluid rounded-start object-fit-cover" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">

							<div className="d-flex">
								<ul>

									<li className="p-3" ><h6>"Cargo_capacity":
										{store?.vehiclesfavorite?.cargo_capacity}</h6>
									</li>

									<li className="p-3"><h6>  "consumables":
										{store?.vehiclesfavorite?.consumables}</h6>
									</li>

									<li className="p-3"><h6> "cost_in_credits":
										{store?.ivehiclesfavorite?.cost_in_credits}</h6>
									</li>

									<li className="p-3"><h6> "created":
										{store?.vehiclesfavorite?.created}</h6>
									</li>

									<li className="p-3"><h6>   "crew":
										{store?.vehiclesfavorite?.crew}</h6>
									</li>

									<li className="p-3"><h6>"edited":
										{store?.vehiclesfavorite?.edited}</h6>
									</li>

									<li className="p-3"><h6>   "length":
										{store?.vehiclesfavorite?.length}</h6>
									</li>

									<li className="p-2"><h6>    "manufacturer":
										{store?.vehiclesfavorite?.manufacturer}</h6>
									</li>
								</ul>
								<ul>
									<li className="p-3"><h6>  "max_atmosphering_speed":
										{store?.vehiclesfavorite?.max_atmosphering_speed}</h6>
									</li>

									<li className="p-3"><h6>   "model":
										{store?.vehiclesfavorite?.model}</h6>
									</li>

									<li className="p-3"><h6>  "name":
										{store?.vehiclesfavorite?.name}</h6>
									</li>

									<li className="p-3"><h6>  "passengers":
										{store?.vehiclesfavorite?.passengers}</h6>
									</li>

									<li className="p-3"><h6> "pilots":
										{store?.vehiclesfavorite?.pilots}</h6>
									</li>

									<li className="p-3"><h6> "films":
										{store?.vehiclesfavorite?.films}</h6>
									</li>

									<li className="p-3"><h6>  "url":
										{store?.vehiclesfavorite?.url}</h6>
									</li>

									<li className="p-3"><h6>  "vehicle_class":
										{store?.vehiclesfavorite?.vehicle_class}</h6>
									</li>


								</ul>
							</div>/
						</div>
					</div>
				</div>
			</div>

			<Link to="/">
				<span className="btn btn-warning btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>


	);
};
