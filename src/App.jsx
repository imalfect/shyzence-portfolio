import React from 'react';
import EventEmitter from "eventemitter3";
import TopBar from "./components/AppBar.jsx";
import Hero from "./components/Hero.jsx";
import {Container} from "@mui/material";
import BetterDivider from "./components/BetterDivider.jsx";
import FeaturedWorkLabel from "./components/FeaturedWorkLabel.jsx";
import GetInTouchLabel from "./components/GetInTouchLabel.jsx";
import ContactOptions from "./components/ContactOptions.jsx";
import {collections} from "./collections.js";
import Category from "./components/Category.jsx";
import Footer from "./components/Footer.jsx";
export const emitter = new EventEmitter();
function App() {
  return (
      <>
          <TopBar/>
          <Container>
              <div style={{ margin: '0 auto', width: 'fit-content' }}>
                  <Hero />
                  <FeaturedWorkLabel/>
                  <BetterDivider/>
                  {collections.map((collection) => (
                      <Category
                          key={collection.name}
                          images={collection.images}
                          description={collection.description}
                          boxWidth={collection.boxWidth}
                          boxHeight={collection.boxHeight}
                          name={collection.name}/>
                  ))}
                  <GetInTouchLabel/>
                  <ContactOptions/>
              </div>
          </Container>
          <Footer/>

      </>
  )
}
export default App
