import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehicleDetails = props => {

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
										{store?.vehiclesdetails?.cargo_capacity}</h6>
									</li>

									<li className="p-3"><h6>  "consumables":
										{store?.vehiclesdetails?.consumables}</h6>
									</li>

									<li className="p-3"><h6> "cost_in_credits":
										{store?.ivehiclesdetails?.cost_in_credits}</h6>
									</li>

									<li className="p-3"><h6> "created":
										{store?.vehiclesdetails?.created}</h6>
									</li>

									<li className="p-3"><h6>   "crew":
										{store?.vehiclesdetails?.crew}</h6>
									</li>

									<li className="p-3"><h6>"edited":
										{store?.vehiclesdetails?.edited}</h6>
									</li>

									<li className="p-3"><h6>   "length":
										{store?.vehiclesdetails?.length}</h6>
									</li>

									<li className="p-2"><h6>    "manufacturer":
										{store?.vehiclesdetails?.manufacturer}</h6>
									</li>
								</ul>
								<ul>
									<li className="p-3"><h6>  "max_atmosphering_speed":
										{store?.vehiclesdetails?.max_atmosphering_speed}</h6>
									</li>

									<li className="p-3"><h6>   "model":
										{store?.vehiclesdetails?.model}</h6>
									</li>

									<li className="p-3"><h6>  "name":
										{store?.vehiclesdetails?.name}</h6>
									</li>

									<li className="p-3"><h6>  "passengers":
										{store?.vehiclesdetails?.passengers}</h6>
									</li>

									<li className="p-3"><h6> "pilots":
										{store?.vehiclesdetails?.pilots}</h6>
									</li>

									<li className="p-3"><h6> "films":
										{store?.vehiclesdetails?.films}</h6>
									</li>

									<li className="p-3"><h6>  "url":
										{store?.vehiclesdetails?.url}</h6>
									</li>

									<li className="p-3"><h6>  "vehicle_class":
										{store?.vehiclesdetails?.vehicle_class}</h6>
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
