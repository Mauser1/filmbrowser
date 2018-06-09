import React from 'react';
import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
      @import url(https://fonts.googleapis.com/css?family=Raleway:400,700);
      body {
        margin: 0;
        padding: 0;
        font-family: Raleway, Arial;
        font-weight: 400;
        font-size: 1.2em;
        line-height: 1.4;
        color: white;
        letter-spacing: 0.02em;
        background: rgb(44, 44, 44);
      }

      a {
        color: inherit;
      }

      .navbar {
        background-color: #333;
        overflow: hidden;
        width: 100%;
      }

      .navbar a {
        color: #f2f2f2;
        text-decoration: none;
        text-align: center;
      }

      /* search box */

      .search {
        align-items: center;
        width: 100%;
        display: flex;
        justify-content: center;
        pointer-events: none;
        font-style: bold;
        color: white;
      }

      .search input {
        font-weight: 300;
        font-size: 14px;
        height: 37px;
        width: 200px;
        background: transparent;
        background: white;
        color: black;
        border: 0;
        outline: none;
        padding: 0 10px;
        pointer-events: all;
        transition: width 0.7s ease 0.125s;
        margin: 20px;
      }

      .search input:focus {
        width: 400px;
      }

      .ul {
        list-style-type: none;
      }

      .search input::placeholder {
        color: black;
      }
      #logo h1,
      h2,
      h3 {
        text-align: center;
        background: #333;
        margin: 0 auto;
        padding-top: 20px;
        padding-bottom: 20px;
      }
      #logo a {
        text-decoration: none;
      }
    `}
    </style>
    <span id="logo">
      <a href="/">
        <h1>Film Browser</h1>
      </a>
    </span>
  </div>
);
