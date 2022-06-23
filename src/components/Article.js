import React from "react";

function minutesToRead(minutes) {
    const emoji = minutes < 30? "☕️": "🍱";
    const multiplier = Math.ceil(minutes <30 ? minutes/5 + minutes%5 : minutes/10 + minutes%10);
    console.log(multiplier)
    return emoji.repeat(multiplier);
}

function Article({
    title,
    date,
    minutes,
    preview
}) {
    return (
        <article>
            <h3>{title}</h3>
            <small>{(date?date:"January 1, 1970")  + " • " + minutesToRead(minutes) + minutes + " min read" }</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;