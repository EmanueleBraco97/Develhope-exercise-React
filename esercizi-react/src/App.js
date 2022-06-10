import React from "react";
import { Container } from "./Container";
import './index.css'

export class App extends React.Component {
  render() {
    return (
      <Container title = 'Component Composition with Tailwind'>
        <hr></hr>
        <h1>Children1</h1>
        <h2>Children2</h2>
      </Container>
    );
  }
}
