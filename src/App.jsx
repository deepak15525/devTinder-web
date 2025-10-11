/** @format */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Body";
import Login from "./Login";
import Feed from "./Feed";
import Profile from "./Feed";
import Connection from "./Connection";
function App() {
	return (
		<>
			<BrowserRouter basename="/">
				<Routes>
					<Route path="/" element={<Body></Body>}>
						<Route path="/login" element={<Login></Login>}></Route>
						<Route path="/profile" element={<Profile></Profile>}></Route>
						<Route path="/feed" element={<Feed></Feed>}></Route>
						<Route
							path="/connections"
							element={<Connection></Connection>}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
