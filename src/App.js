import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePages";
import NewsPage from "./pages/NewsPage";
import ProfilePage from "./pages/ProfilePage";
import { Suspense, useEffect } from "react";
import { fetchNewsApi } from "./reducer/newsSliсe";
import { useDispatch } from "react-redux";



function App() {
 const dispatch = useDispatch();

  useEffect(() => { 
    dispatch(fetchNewsApi())
  },[dispatch])

  return (
    <>
    <Suspense fallback={<Navigation/>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
    </Suspense>
      

    </>
    
  );
}

export default App;
