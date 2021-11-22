import Book from "./components/Book";
import ComponentExtension from "./components/ComponentExtension";
import FirstComponent from "./components/FirstComponent";
import NOTJSX from "./components/NOTJSX";
import books from "./data/books";

const App = () => {
  return (
    <main>
      <FirstComponent />
      <ComponentExtension />
      <NOTJSX />

      <Book
        author={books[0].author}
        title={books[0].title}
        description={books[0].description}
      />

      <Book
        author={books[0].author}
        title={books[0].title}
        description={books[0].description}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ad
        aspernatur consectetur fuga omnis quisquam possimus commodi! Voluptatum
        earum, sequi voluptate in, aspernatur omnis consectetur exercitationem
        cupiditate harum inventore esse totam libero, porro laudantium!
      </Book>
    </main>
  );
};

export default App;
