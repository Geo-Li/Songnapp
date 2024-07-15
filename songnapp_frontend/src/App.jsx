import { useState } from "react";
import Header from "./components/Header";
import AlbumContainer from "./components/Album/AlbumContainer";
import ReviewContainer from "./components/Review/ReviewContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div
        className="bg-white
                  text-black min-h-screen font-inter"
      >
        <div className="max-w-6xl w-10/12 mx-auto">
          <Header />
          <AlbumContainer />
          <ReviewContainer />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
