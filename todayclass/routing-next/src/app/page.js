"use client"
import { Fragment } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Menu } from "./Menu";

export default function App() {
  return (
    <Fragment>
      <Header />
      <Menu />
      <Footer ></Footer>
    </Fragment>
  )
}
