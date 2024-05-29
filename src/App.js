import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeComponent from "./Routes/HomeComponent";
import PlacesComponent from "./Routes/PlacesComponent";
import SinglePlace from "./Components/Trips/Single Place/SinglePlace";
import SingleTrip from "./Components/Trips/Single Trip/SingleTrip";
import Signup from "./Components/Sign/Signup";
import Signin from "./Components/Sign/Signin";
import AdminLogin from "./Admin/AdminLogin";
import AddPlaces from "./Admin/AddPlaces";
import AddTrips from "./Admin/AddTrips";
import Table from "./Admin/Table";
// import Loading from "./Components/Loading/Loading";
function App() {
  return (
    <div className="App">
      {/* <Loading/> */}
      {/* <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/places" element={<PlacesComponent />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/places/:singleplace" element={<SinglePlace />} />
        <Route path="/places/:singleplace/:singletripid" element={<SingleTrip />} />
      </Routes> */}

      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/addplace" element={<AddPlaces />} />
        <Route path="/addtrip" element={<AddTrips />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;
