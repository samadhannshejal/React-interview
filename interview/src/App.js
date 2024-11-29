import React, { Suspense } from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RouterRoot from "./Router/RouterRoot";
import Home from "./Router/Pages/Home";
import About from "./Router/Pages/About";
import Child1 from "./Router/NestedRoutePages/Child1";
import Child2 from "./Router/NestedRoutePages/Child2";
import NestedRoot from "./Router/NestedRoot";
import PageNotFound from "./Router/404/PageNotFound";
import FetchFromLoader from "./Router/Loader/FetchFromLoader";
import { fetchData } from "./Data/Db";
import DynamicElement from "./Router/Loader/DynamicElement";
import AppRoute from "./RouterPratical/NestedNavigation/Routes/AppRoute";
import AuthRoot from "./RouterPratical/Authantication/AuthRoot";
import CursorCircle from "./MachineCoding/CursorCircle";
import InfinitScroll from "./MachineCoding/InfinitScroll";
import ScrollIndicator from "./MachineCoding/ScrollIndicator";
import Accordian from "./MachineCoding/Accordian";
import ImageSlider from "./MachineCoding/ImageSlider";
import Calculator from "./MachineCoding/Calculator";
import Tic_tac_toe from "./MachineCoding/Tic-tac-toe";
import UseFetch from "./CustomHooks/useFetch";
import UseApi from "./CustomHooks/useApi";
import UseLocalStorage from "./CustomHooks/useLocalStorage";
import UseDebounce from "./CustomHooks/useDebounce";
import Pollyfills from "./Pollyfills/Pollyfills";
import UseDebounceCallback from "./CustomHooks/useDebounceCallback";
import UseToggle from "./CustomHooks/useToggle";
import Pagination from "./MachineCoding/Pagination";
import StarRating from "./MachineCoding/StarRating";
import BreadCrumbRootLayout from "./MachineCoding/breadcrumb/BreadCrumbRootLayout";
import Loading from "./MachineCoding/Loading";
import FileExplore from "./MachineCoding/fileExplore/FileExplore";
import GenratePassword from "./MachineCoding/passwordGenrator/GenratePassword";
import Button from "./components/Button";
import Input from "./components/Input";
import Image from "./components/Image";
import GenricElement from "./components/GenricElement";
import PasswordStrangth from "./MachineCoding/passwordGenrator/components/PasswordStrangth";
import Todo from "./MachineCoding/todo/Todo";
import TodoDemo from "./MachineCoding/demo/Todo";
const Formik = React.lazy(() => import("./Validation/Formik"));
// import UseMemo from './Optimization/UseMemo';
const UseMemo = React.lazy(() => import("./Optimization/UseMemo"));
 

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RouterRoot/>}>
//       <Route index element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="nested" element={<NestedRoot />} >
//        <Route path="child1" element={<Child1/>} />
//        <Route path="child2" element={<Child2/>} />
//       </Route>
//       <Route path="*" element={<PageNotFound/>}/>
//       <Route path="fetchData" loader={fetchData} element={<FetchFromLoader/>}>
//         <Route path=":id" element={<DynamicElement/>}/>
//       </Route>
//     </Route>
//   )
// );
function App() {
  return (
    <div className="App">
      {/* <Pratice/> */}
      {/* <Pratice1/> */}
      {/* <Pratice2/> */}
      {/* <ReactMemo/> */}
      {/* <UseCallBack/> */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <UseMemo />
        </Suspense> */}
      {/* <Suspense fallback={<div>Loading....  </div>}>
        <Formik/>
        </Suspense> */}
      {/* <FetchData/> */}
      {/* <ContextProvider>
        <ContextConsumer />
        </ContextProvider> */}
      {/* <CatchCompo props={'world'}/> */}
      {/* <AuthHOC/> */}
      {/* <Debounce /> */}
      {/* <RouterProvider router={router} />{" "} */}

      {/* <AppRoute/> */}
      {/* <AuthRoot/> */}

      {/* <CursorCircle/> */}
      {/* <InfinitScroll/> */}
      {/* <ScrollIndicator/> */}
      {/* <Accordian/> */}
      {/* <ImageSlider/> */}
      <Calculator/>
      {/* <Tic_tac_toe/> */}
      {/* <Pagination/> */}
      {/* <StarRating/> */}
      {/* <BreadCrumbRootLayout/> */}
      {/* <Loading loading={true}/> */}
      {/* <FileExplore/> */}
      {/* <GenratePassword/> */}
      {/* <Todo/> */}

      {/* <Button /> */}
      {/* <Input  type="checkbox"children={"please enter"} /> */}
      {/* <Image /> */}
      {/* <GenricElement as={'p'}>Genric</GenricElement> */}

      {/* <UseFetch/> */}
      {/* <UseApi/> */}
      {/* <UseLocalStorage/> */}
      {/* <UseDebounce/> */}
      {/* <UseDebounceCallback/> */}
      {/* <UseToggle/> */}

      {/* <Pollyfills/> */}

      {/* <Todo/> */}

      {/* <TodoDemo/> */}
    </div>
  );
}

export default App;
