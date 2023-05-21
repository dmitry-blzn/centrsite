import React from "react";
import { 
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { Main } from "./pages/main/Main";
import { Events } from "./pages/events/Events";
import { AboutPages } from "./pages/aboutCenter/AboutPages";
import { News } from "./pages/news/News";

import './App.scss' //файл обнуления предустановленных стилей

function App() {
  return (
    <div className="App">
      <BrowserRouter>
		<Routes>
      <Route path="/PatriotCenter" element={<Main/>}/>
			<Route path="/" element={<Main/>}/>
			<Route path="/events" element={<Events/>}/>
			<Route path="/about" element={<AboutPages/>}/>
			<Route path="/news" element={<News/>}/>
		</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
