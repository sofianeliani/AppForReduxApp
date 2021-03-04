import React, { useState, useEffect } from "react";

import UserService from "../../services/user.service";

import Cards from "../blocsComponent/cardsComponent/cards.component"
import Stats from "../blocsComponent/sectionComponent/statsComponent/stats.component.js"
import Title from "../blocsComponent/sectionComponent/titleSectionComponent/title.component"

const Home = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="">
        <h3>{content}</h3>
        <div class="flex bg-gray-100 min-h-screen">

        <div class="flex-grow text-gray-800"> 
          <div class="p-6 sm:p-10 space-y-6">

          <Title />

          <Cards />

          <Stats />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;