import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import fetchData from "./service";
import "./App.css";
import styles from "./App.module.css";

function App() {
  let [poem, setPoem] = useState(Array);

  useEffect(() => setPoem(fetchData()), [setPoem]);

  return (
    <div className="App">
      <header>
        <nav role="presentation">
          <Breadcrumbs aria-label="breadcrumb" maxItems={2}>
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
          </Breadcrumbs>
        </nav>
      </header>
      <main>
        <Paper elevation={3}>
          <article className={styles.stanzaBlock}>
            {poem.map((row, ix) => {
              if (ix % 2 !== 0) {
                // even number of row so 2 line stanza finishes and we need a new-line
                return (
                  <>
                    <span
                      className={styles.stanzaText}
                      aria-label="stanza"
                      key={ix}
                      dir="rtl"
                    >
                      <>{row}</>
                    </span>
                    <span>
                      <br></br>
                      <br></br>
                    </span>
                  </>
                );
              } else {
                return (
                  <span
                    className={styles.stanzaText}
                    aria-label="stanza"
                    key={ix}
                    dir="rtl"
                  >
                    <>{row}</>
                  </span>
                );
              }
            })}
          </article>
        </Paper>
      </main>
    </div>
  );
}

export default App;
