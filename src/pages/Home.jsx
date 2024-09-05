import Layout from "../components/layout/Layout.jsx";
import { useCallback, useEffect, useState } from "react";
import { QUOTES } from "../dummy/quotes.js";
import FlexRow from "../components/layout/FlexRow.jsx";
import useGlobalAppStore from "../stores/globalAppStore.js";
import QuoteCard from "../components/quotes/QuoteCard.jsx";

const Home = () => {
  const setLoading = useGlobalAppStore((state) => state.setLoading);
  const [quotes, setQuotes] = useState([]);

  const fetchQuotes = useCallback(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return QUOTES;
  }, []);

  useEffect(() => {
    setLoading(true);
    fetchQuotes().then((result) => {
      setQuotes(result);
      setLoading(false);
    });
  }, [setLoading, fetchQuotes]);

  const links = [{ text: "New Quote", link: "/quotes/new", action: "primary" }];

  return (
    <Layout title="Projects" links={links}>
      <FlexRow
        sx={{
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {quotes.map((quote, index) => (
          <QuoteCard key={index} quote={quote} />
        ))}
      </FlexRow>
    </Layout>
  );
};

export default Home;
