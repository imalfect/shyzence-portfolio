import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import EventEmitter from "eventemitter3";
import TopBar from "./components/AppBar.jsx";
import Hero from "./components/Hero.jsx";
import {Container} from "@mui/material";
import BetterDivider from "./components/BetterDivider.jsx";
import MyWorkLabel from "./components/MyWorkLabel.jsx";
import ContactMeLabel from "./components/ContactMeLabel.jsx";
import ContactOptions from "./components/ContactOptions.jsx";
import {collections} from "./collections.js";
import Category from "./components/Category.jsx";
export const emitter = new EventEmitter();
function App() {
  return (
      <>
          <TopBar/>
          <Container>
              <div style={{ margin: '0 auto', width: 'fit-content' }}>
                  <Hero />
                  <MyWorkLabel />
                  <BetterDivider />
                  {collections.map((collection) => (
                      <Category
                          key={collection.name}
                          images={collection.images}
                          description={collection.description}
                          name={collection.name}/>
                  ))}
                  <ContactMeLabel />
                  <BetterDivider />
                  <ContactOptions/>
              </div>
          </Container>

      </>
  )
}
export default App
