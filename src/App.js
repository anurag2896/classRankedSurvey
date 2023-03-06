import "./App.css";
import SurveyPage from "./Pages/SurveyPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/surveys" element={<SurveyPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
