import React from "react";

//подключение роутинга для управлением навигацией в приложении
import { 
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

// подключение к приложению всех существующих страниц
import { Main } from "./pages/main/Main";
import { Events } from "./pages/events/Events";
import { AboutPages } from "./pages/aboutCenter/AboutPages";
import { News } from "./pages/news/News";

import './App.scss' //файл обнуления предустановленных стилей

//Функция отрисовки всего приложения, страницы загружаются в зависимости от установленного endpoint-a ссылки (/, /events, /about, /news)
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/PatriotCenter">
        <Routes>
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
