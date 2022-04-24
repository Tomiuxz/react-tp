import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar/NavbarComp.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContextProvider from "./components/Context/CartContext";
import Cart from "./components/Cart/Cart.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nosotros } from "./components/Nosotros";
import { Contacto } from "./components/Contacto";
import { PageNotFound } from "./components/PageNotFound";
import { Blog } from "./components/Blog";
import { UIContextProvider } from "./components/Context/UIContext";

function App() {
	return (
		<div className="App">
			<UIContextProvider>
				<CartContextProvider>
					<BrowserRouter>
						<Navbar />
						<Routes>
							<Route path="/" element={<ItemListContainer />} />
							<Route path="/categoria/:cat" element={<ItemListContainer />} />
							<Route path="/detail/:itemId" element={<ItemDetailContainer />} />
							<Route path="/nosotros" element={<Nosotros />} />
							<Route path="/contacto" element={<Contacto />} />
							<Route path="/blog" element={<Blog />} />
							<Route path="/cart" element={<Cart />} />

							<Route path="*" element={<PageNotFound />} />
						</Routes>
					</BrowserRouter>
				</CartContextProvider>
			</UIContextProvider>
		</div>
	);
}

export default App;
