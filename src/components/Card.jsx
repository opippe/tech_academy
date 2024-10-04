import React from "react";
import "./Card.css"

function Card(props) {
    return (
        <>
            <a id="card" href="#">
                <img class="card-image" src={props.image} />
                <article class="card-article">
                    <div class="article-details">
                        <h3 class="card-title">{props.title}</h3>
                        <p class="card-category">{props.category}</p>
                        <p class="post-description">{props.description}</p>
                        <button class="inscricao-button">FAZER INSCRIÇÃO</button>
                    </div>
                </article>
            </a>
        </>
    )
}

export default Card;