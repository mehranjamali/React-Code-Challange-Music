import { lazy, Suspense } from "react";
// import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./home"));
const Navbar = lazy(() => import("../layouts/navbar"));
// const MusicPage = lazy(() => import("./music"));
// const NotFoundPage = lazy(() => import("./404"));

export default function Pages() {
   return (
      // <Suspense>
      //    <Routes>
      //       <Route index element={<MusicListPage />} />
      //       <Route path="/music/:musicId" element={<MusicPage />} />
      //       <Route path="*" element={<NotFoundPage />} />
      //    </Routes>
      // </Suspense>
      <Suspense>
         <div className="w-full max-w-lg ">
            {/* i put my layouts in here */}
            <Navbar />
            <Home />
         </div>
      </Suspense>
   );
}
