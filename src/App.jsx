import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Footer, Header, Home } from "./components/utils/helper";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
