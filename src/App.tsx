import React, { useEffect, useState, Fragment } from "react";
import fetchData from "./service";

function App() {
  let [poem, setPoem] = useState(Array);

  useEffect(() => setPoem(fetchData()), [setPoem]);

  return (
    <div className="dark">
      <header>
        <nav role="presentation">
          {/* <Breadcrumbs aria-label="breadcrumb" maxItems={2}>
            <Link underline="hover" color="inherit" href="/">
              Poetry
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/getting-started/installation/"
            >
              Urdu
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/getting-started/installation/"
            >
              Faraz
            </Link>
            <Typography color="text.primary">Suna Hai</Typography>
          </Breadcrumbs> */}
        </nav>
      </header>
      <main>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <select>
            <option>urdu</option>
            <option>punjabi</option>
            <option>pashto</option>
          </select>
          <select>
            <option>ghazal</option>
            <option>nazam</option>
            <option>kafi</option>
          </select>
          <select>
            <option>faraz</option>
            <option>faiz</option>
            <option>unknown</option>
          </select>
        </div>
        <div className="flex justify-center bg-white dark:bg-gray-800 print:text-green-500">
          <article
            style={{}}
            className="flex flex-col text-2xl mt-10 leading-loose md:text-4xl lg:text-5xl xs:mr-2 xl:text-6xl"
          >
            {poem.map((row, ix) => {
              // 0 indexed so our 2 line stanza ends at 1,3,5,7 etc.

              if (ix % 2 !== 0) {
                console.log(`odd i.e. ${ix % 2}`);
                return (
                  <div key={`row${ix}`}>
                    <span
                      aria-label="stanza"
                      key={ix}
                      dir="rtl"
                      className="block font-display text-black dark:text-white mt-6 mb-16 md:mt-10 md:mb-28 lg:mt-14 lg:mb-40"
                    >
                      <>{row}</>
                    </span>
                  </div>
                );
              } else {
                return (
                  <div key={`row${ix}`}>
                    <span
                      aria-label="stanza"
                      key={ix}
                      dir="rtl"
                      className="block font-display text-black dark:text-white xl:mb-4 xl:mt-10"
                    >
                      <>{row}</>
                    </span>
                  </div>
                );
              }
            })}
          </article>
        </div>
      </main>
    </div>
  );
}

export default App;
