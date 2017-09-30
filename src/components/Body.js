import React, { Component } from 'react';

import Header from './Header';

export class Body extends Component {
  render() {
    return (
        <main>
          <Header />
          <article>
            
            <h2>This is the first Article!</h2>

            <aside>

              <figure>
                <img src="" alt=""/>
              </figure>

            </aside>
          </article>

          <img src="" alt=""/>

          <article>
            <aside>

              <img src="" alt=""/>

            </aside>
          </article>

          <article>
            <aside>

              <img src="" alt=""/>

            </aside>
          </article>

          <article>
            <aside>

              <img src="" alt=""/>

            </aside>
          </article>
        </main>
    );
  }
}
