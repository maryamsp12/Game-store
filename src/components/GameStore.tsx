import { useGameStore } from "./useGameStore";
import { gameItem, gameList } from "./Data";
import { SearchPanel } from "./Components/SearchPanel";
import "./styles.css";

export const GameStore = () => {
  const { data, searchTerm, handleStateChange } = useGameStore();

  return (
    <div /* className="body" */>
      <header className="grid">
        <h1 className="title">{data && data.title}</h1>
        <div className="saperation"></div>
        <p className="description">{data && data.description}</p>
        <SearchPanel
          searchTerm={searchTerm}
          handleStateChange={handleStateChange}
        />
      </header>
      <main>
        {data &&
          data.lists.map((group: gameList, index: number) => (
            <article className="container" key={index}>
              <h2 className="categoryTitle">{group.title}</h2>
              <section className=" grid categoryBox">
                {group.items
                  .filter((item: gameItem) => {
                    if (searchTerm === "") {
                      return item;
                    } else if (
                      item.title
                        .toLocaleLowerCase()
                        .includes(searchTerm.toLowerCase())
                    ) {
                      return item;
                    }
                  })
                  .map((item: gameItem, index: number) => (
                    <figure className="itemBox" key={index}>
                      <img src={item.image} alt="" className="img" />
                      <figcaption className="itemTitle">
                        {item.title}
                      </figcaption>
                    </figure>
                  ))}
              </section>
            </article>
          ))}
      </main>
    </div>
  );
};
