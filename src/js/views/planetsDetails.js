import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetsInfo = props => {

    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {

        actions.getPlanetsInfo(params.uid)

    }, [])

    return (

        
        <div className="jumbotron mx-5 my-5">


            <div className="card mb-3 border border-1  rounded-start  border border-warning-subtle" style={{ width: "1260px", height: "555px", background: "black", color: "#FFEB1F" }}>

                <div className="d-flex ">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/4.jpg`} className="img-fluid rounded-start object-fit-cover" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">

                            <div className="d-flex">
                                <ul>

                                    <li className="p-3" ><h6> "climate":
                                        {store?.planetsfavorite?.climate}</h6>
                                    </li>

                                    <li className="p-3"><h6>"created":
                                        {store?.planetsfavorite?.created}</h6>
                                    </li>

                                    <li className="p-3"><h6> "diameter":
                                        {store?.planetsfavorite?.diameter}</h6>
                                    </li>

                                    <li className="p-3"><h6>   "edited":
                                        {store?.planetsfavorite?.edited}</h6>
                                    </li>

                                    <li className="p-3"><h6>   "films":
                                        {store?.planetsfavorite?.films}</h6>
                                    </li>

                                    <li className="p-3"><h6>"gravity":
                                        {store?.planetsfavorite?.gravity}</h6>
                                    </li>

                                    <li className="p-3"><h6> "name":
                                        {store?.planetsfavorite?.name}</h6>
                                    </li>

                                    <li className="p-2"><h6>   "orbital_period":
                                        {store?.planetsfavorite?.orbital_period}</h6>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="p-3"><h6>    "population":
                                        {store?.planetsfavorite?.population}</h6>
                                    </li>

                                    <li className="p-3"><h6>  "residents":
                                        {store?.planetsfavorite?.residents}</h6>
                                    </li>

                                    <li className="p-3"><h6>  "rotation_period":
                                        {store?.planetsfavorite?.rotation_period}</h6>
                                    </li>

                                    <li className="p-3"><h6> "surface_water":
                                        {store?.planetsfavorite?.surface_water}</h6>
                                    </li>

                                    <li className="p-3"><h6>  "terrain":
                                        {store?.planetsfavorite?.terrain}</h6>
                                    </li>

                                    <li className="p-3"><h6> "url":
                                        {store?.planetsfavorite?.url}</h6>
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

