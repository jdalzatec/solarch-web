import Layout from "../components/layout/Layout.jsx";
import { useEffect, useState } from "react";
import { QUOTES } from "../dummy/quotes.js";
import { Card, Chip, Typography } from "@mui/material";
import { isoFormatFromString } from "../utils/timeUtils.js";
import FlexRow from "../components/layout/FlexRow.jsx";
import { humanize } from "../utils/stringUtils.js";
import FlexColumn from "../components/layout/FlexColumn.jsx";
import { yellow, red, green } from "@mui/material/colors";
import { getTotalEfficiency } from "../utils/quoteUtils.js";

const TYPE_OF_BUILDING_COLOR = {
  commercial: yellow[100],
  residential: red[100],
  industrial: green[100],
};

const Home = () => {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    setQuotes(QUOTES);
  }, []);

  const links = [{ text: "New Quote", link: "/new-quote", action: "primary" }];

  return (
    <Layout title="Projects" links={links}>
      <FlexRow
        sx={{
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {quotes.map((quote, index) => (
          <Card
            key={index}
            sx={{
              p: 3,
              maxWidth: { xs: "100%", lg: "48%" },
              minWidth: { xs: "100%", lg: "48%" },
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "rgba(200, 200, 200, 0.1)",
              },
            }}
          >
            <FlexColumn>
              <Typography variant="h6">
                {quote.info.city}, {quote.info.country}
              </Typography>
              <Typography>{isoFormatFromString(quote.created)}</Typography>
              <FlexRow
                sx={{
                  flexWrap: "wrap",
                }}
              >
                <Chip
                  label={humanize(quote.info.type)}
                  sx={{
                    backgroundColor: TYPE_OF_BUILDING_COLOR[quote.info.type],
                  }}
                />
                <Chip label={`Facades: ${quote.info.number_of_facades}`} />
                <Chip label={`Roofs: ${quote.info.number_of_roofs}`} />
                <Chip
                  label={`Efficiency: ${getTotalEfficiency(quote).toLocaleString()} KWh/Year`}
                />
              </FlexRow>
            </FlexColumn>
          </Card>
        ))}
      </FlexRow>
    </Layout>
  );
};

export default Home;
