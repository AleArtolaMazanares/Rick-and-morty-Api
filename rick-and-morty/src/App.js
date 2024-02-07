import RickAndMortiProvider from "./components/context/RickAndMortiProvider";
import RouteComponent from "./components/routeComponent";


function App() {
  return (
    <div>
      <RickAndMortiProvider>
        <RouteComponent/>
      </RickAndMortiProvider>
    </div>
  );
}

export default App;
