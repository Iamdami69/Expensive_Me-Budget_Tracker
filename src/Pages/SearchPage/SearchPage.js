import { useState } from "react";
import { PageWarpper } from "../../Components/PageWarpper/PageWarpper";
import styles from "./SearchPage.module.css";

export function SearchPage() {
  const [query, setQuery] = useState(null);
  const search = ({ target }) => {
    setQuery(target.value);
  };
  return (
    <PageWarpper event={search} hasBrand={false} hasInput={true}>
      <h1>Making Query Params {query}</h1>
    </PageWarpper>
  );
}
