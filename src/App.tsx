import { MoviestarView } from "./components/MoviestarView";
import { movieStars } from "./movieStars";

function App() {
  return (
    <>
    <main className="container mx-auto py-20">
      <h1 className="uppercase text-center text-5xl font-bold text-fuchsia-800 mb-16">Moviestars</h1>
      <MoviestarView moviestars={movieStars} />
    </main>
    </>
  );
}

export default App;
