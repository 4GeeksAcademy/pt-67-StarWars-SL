import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharactersInfo = props => {

    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {
        actions.getCharactersInfo(params.uid)
    }, [])

    return (

        <div className="jumbotron mx-5 my-5">

            <div className="card mb-3 border border-1  rounded-start  border border-warning-subtle" style={{ width: "1260px", height: "555px", background: "black", color: "#FFEB1F" }}>

                <div className="d-flex ">
                    <div className="col-md-4">
                        <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" className="img-fluid rounded-start object-fit-cover" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">

                            <div className="d-flex">
                                <ul>

                                    <li className="p-3" ><h6>"Birth_year"
                                       <span> : {store?.charactersdetails?.birth_year}</span></h6>
                                    </li>

                                    <li className="p-3"><h6>"Eye_color":
                                        {store?.characterdetails?.eye_color}</h6>
                                    </li>

                                    <li className="p-3"><h6>"Films":
                                        {store?.characterdetails?.films}</h6>
                                    </li>

                                    <li className="p-3"><h6> "Gender":
                                        {store?.characterdetails?.gender}</h6>
                                    </li>

                                    <li className="p-3"><h6> "Hair_color":
                                        {store?.characterdetails?.hair_color}</h6>
                                    </li>

                                    <li className="p-3"><h6>"Height":
                                        {store?.characterdetails?.height}</h6>
                                    </li>

                                    <li className="p-3"><h6>"Homeworld":
                                        {store?.characterdetails?.homeworld}</h6>
                                    </li>

                                    <li className="p-2"><h6> "Mass":
                                        {store?.characterdetails?.mass}</h6>
                                    </li>
                                </ul>
                                <ul>
                                    <li className="p-3"><h6> "Name":
                                        {store?.characterdetails?.name}</h6>
                                    </li>

                                    <li className="p-3"><h6>  "Skin_color":
                                        {store?.characterdetails?.skin_color}</h6>
                                    </li>

                                    <li className="p-3"><h6> "Created":
                                        {store?.characterdetails?.created}</h6>
                                    </li>

                                    <li className="p-3"><h6>  "Edited":
                                        {store?.characterdetails?.edited}</h6>
                                    </li>

                                    <li className="p-3"><h6> "Species":
                                        {store?.characterdetails?.species}</h6>
                                    </li>

                                    <li className="p-3"><h6>"Starships":
                                        {store?.characterdetails?.starships}</h6>
                                    </li>

                                    <li className="p-3"><h6>"Url"
                                        {store?.characterdetails?.url}</h6>
                                    </li>

                                    <li className="p-3"><h6>"Vehicles":
                                        {store?.characterdetails?.vehicles}</h6>
                                    </li>


                                </ul>
                            </div>/
                        </div>
                    </div>
                </div>
			</div>
		</div>
	)
}