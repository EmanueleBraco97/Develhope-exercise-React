import React from "react";
import { TodoList } from "./TodoList";

export class App extends React.Component {
    render() {
        return (
          <div> 
             {/*Implemento Logica*/}
            <TodoList
               render={(arrayItems, removeLi) => (
                <ul>
                  {arrayItems.map((item) => {
                      return (
                          <li key={item}>
                              <button onClick={removeLi.bind(this, item)}>Remove</button>
                          </li>
                      );
                  })}
                </ul>
              )}>
            </TodoList>
          </div>
        );
      }
    }
