import React from "react";
import "./Card.css"

function Card(props) {
    return (
        <>
            <a id="card" href="#">
                <img class="card-image" src="https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/7/74/BLG_Bin_2024_Split_1.png/revision/latest/scale-to-width-down/220?cb=20240121154757" />
                <article class="card-article">
                    <div class="article-details">
                        <h3 class="card-title"> Engenharia de Software</h3>
                        <p class="card-category"> Bacharelado | Presencial</p>
                        <p class="post-description"> O trabalho desenvolvido pelo Engenheiro de Software tem como foco a melhoria da produtividade de diferentes áreas do mercado de trabalho, do ensino, assim como do lazer. </p>
                        <button class="inscricao-button">FAZER INSCRIÇÃO</button>
                    </div>
                </article>
            </a>
        </>
    )
}

export default Card;