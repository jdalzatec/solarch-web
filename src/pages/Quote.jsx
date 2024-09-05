import Layout from "../components/layout/Layout.jsx";
import { useParams } from "react-router-dom";
import { QUOTES } from "../dummy/quotes.js";
import { useCallback, useEffect, useState } from "react";
import useGlobalAppStore from "../stores/globalAppStore.js";
import QuoteData from "../components/quotes/QuoteData.jsx";
import { Box } from "@mui/material";
import QuoteSimulation from "../components/quotes/QuoteSimulation.jsx";

const Quote = () => {
  const { quoteId } = useParams();
  const setLoading = useGlobalAppStore((state) => state.setLoading);

  const links = [{ text: "Back", link: "/", action: "secondary" }];
  const [quote, setQuote] = useState(null);

  const fetchQuote = useCallback(async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return QUOTES.find((quote) => quote.id === quoteId);
  }, [quoteId]);

  useEffect(() => {
    setLoading(true);
    fetchQuote().then((quote) => {
      setQuote(quote);
      setLoading(false);
    });
  }, [setLoading, fetchQuote]);

  return (
    <Layout title="Project" links={links}>
      {quote && (
        <Box>
          <QuoteData data={quote.info} />
          <QuoteSimulation quote={quote} />
        </Box>
      )}
    </Layout>
  );
};

export default Quote;
