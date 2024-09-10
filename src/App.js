import logo from "./logo.svg";
import "./App.css";
import Users from "../src/components/users.jsx";
import Posts from "../src/components/posts.jsx";
import Todos from "../src/components/todos.jsx";
import React, { Suspense } from "react";
import Parent from "./components/parent.jsx";
import InlineConditionalExpression from "./components/InlineConditionalExpression.jsx";
import EventHandling from "./components/EventHandling.jsx";
import Styles from "./components/Styles.jsx";
import ControlledUnControl from "./components/ControlledUnControl.jsx";
import ApiRequest from "./components/ApiRequest.jsx";
import Debouncing from "./components/Debouncing.jsx";
import Albums from "./components/Albums.jsx";
import Parent2 from "./components/parent2.jsx";
import Hook from "./components/Hook.jsx";
import Helper from "./components/Helper.jsx";
import LiftingStateUp from "./components/liftingStateUp.jsx";
import MEmo from "./components/MEmo.jsx";
import TestParent from "./components/TestParent.jsx";
import Toggle from "./components/Toggle.jsx";
import Theme from "./components/Theme.jsx";
import CountriesDropdown from "./interview/countriesDropdown.js";
import Radio from "./interview/Radio.js";
import Pagination from "./interview/pagination.js";
import Carousel from "./interview/Carousel.js";
import Image from "./interview/Image.js";
import Excel from "./interview/Excel.js";
import Exercise1 from "./reactUseEffect/1.js";
import Exercise2 from "./reactUseEffect/2.js";
import Exercise3 from "./reactUseEffect/3.js";
import Exercise4 from "./reactUseEffect/4.js";
import Exercise5 from "./reactUseEffect/5.js";
import Exercise51 from "./reactUseEffect/6.js";
import Search from "./interview/Serach.js";
import ContextP from "./interview/ContextP.js";
// import LazyLoading from "./components/lazyLoading.jsx";
const LazyLoading = React.lazy(() => import("./components/lazyLoading.jsx"));
function App() {
  return (
    // <Suspense fallback={<div>Loading.... waitt</div>}>
    <div className="App">
      {/* <Users />
      <Posts />
      <Todos /> */}
      {/* <LazyLoading /> */}
      {/* <Parent /> */}
      {/* <InlineConditionalExpression /> */}
      {/* <EventHandling /> */}
      {/* <Styles /> */}
      {/* <ControlledUnControl /> */}
      {/* <ApiRequest /> */}
      {/* <Debouncing /> */}
      {/* <Albums /> */}
      {/* <Parent2 /> */}
      {/* <Hook /> */}
      {/* <Helper /> */}
      {/* <LiftingStateUp /> */}
      {/* <MEmo /> */}
      {/* <TestParent /> */}
      {/* <Helper /> */}
      {/* <Users /> */}
      {/* <Toggle /> */}
      {/* <Theme /> */}
      {/* <CountriesDropdown /> */}
      <Radio />
      {/* <Pagination /> */}
      {/* <Carousel /> */}
      {/* <Image /> */}
      {/* <Excel /> */}




      {/* <Exercise1/> */}
      {/* <Exercise2/> */}
      {/* <Exercise4/> */}
      {/* <Exercise5/> */}
      {/* <Exercise51/> */}

      {/* <Search/> */}
  <ContextP/>
    </div>
    // </Suspense>
  );
}

export default App;
