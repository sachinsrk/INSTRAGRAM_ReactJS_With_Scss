import React from "react";
import "../css/cards.scss";
import Stories from "./Stories";
import comment from "../data/comment";
import Card from "./Card";

function Cards() {
  const { commentsOne, commentsTwo, commentsThree } = comment;
  function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min
}

  return (
    <div className="cards">
      <Stories />
      <Card
        accountName="this is it"
        storyBorder={true}
        image={`https://picsum.photos/id/${ getRandomInt(1000,1100)}/367/367`}
        comments={commentsOne}
        likedByText="This like"
        likedByNumber={20}
        hours={16}
      />
         <Card
        accountName="this is it"
        storyBorder={true}
        image={`https://picsum.photos/id/${ getRandomInt(1000,1100)}/367/367`}
        comments={commentsTwo}
        likedByText="This like"
        likedByNumber={20}
        hours={10}
      />
         <Card
        accountName="this is it"
        storyBorder={true}
        image={`https://picsum.photos/id/${ getRandomInt(1000,1100)}/367/367`}
        comments={commentsThree}
        likedByText="This like"
        likedByNumber={20}
        hours={1}
      />
    </div>
  );
}

export default Cards;
