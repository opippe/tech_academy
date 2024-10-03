import React from "react";
import "./Card.css"

function Card(props) {
    return (
        <>
            <a id="card" href="#">
                <img class="card-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png" />
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