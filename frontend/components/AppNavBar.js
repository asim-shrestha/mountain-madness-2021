import React from "react";
import {Navbar} from 'react-bootstrap';
import { useRouter } from 'next/router'

export const height = '34px';
const AppNavBar = () => {
  const router = useRouter();
  return (
    <>
      <Navbar id="appnavbar" style={{height: height,position:"fixed",width:"100%"}}>
        <h1 onClick={() => router.push("/")}>⭐The Meme Machine</h1>
        <div className="navitems">
          <button onClick={() => router.push("/recent")}>recent</button>
          <button onClick={() => router.push("/top")}>top memes</button>
          <button onClick={() => router.push("/create")}>create</button>
        </div>
        <form>
          <input type="text" placeholder="Search"/>
          <a href="https://github.com/asim-shrestha/mountain-madness-2021" >
            <img src="github.png" style={{"height": '30px', "margin-left": "2px"}}/>
          </a>
        </form>
      </Navbar>
    </>
  );
};

export default AppNavBar;
