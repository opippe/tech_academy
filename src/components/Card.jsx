import React from "react";
import "./Card.css"

function Card(props) {
    return (
        <>
            <a id="card" href="#">
                <img className="card-image" src={props.image} />
                <article className="card-article">
                    <div className="article-details">
                        <h3 className="card-title">{props.title}</h3>
                        <p className="card-category">{props.category}</p>
                        <p className="post-description">{props.description}</p>
                        <button className="inscricao-button">FAZER INSCRIÇÃO</button>
                    </div>
                </article>
            </a>
        </>
    )
}

export default Card;