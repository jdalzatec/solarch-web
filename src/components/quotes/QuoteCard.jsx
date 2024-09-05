import FlexColumn from "../layout/FlexColumn.jsx";
import { Card, Chip, Typography } from "@mui/material";
import { isoFormatFromString } from "../../utils/timeUtils.js";
import FlexRow from "../layout/FlexRow.jsx";
import { humanize } from "../../utils/stringUtils.js";
import { getTotalEfficiency } from "../../utils/quoteUtils.js";
import { useNavigate } from "react-router-dom";
import { green, red, yellow } from "@mui/material/colors";
import { toNumerical } from "../../utils/numberUtils.js";

const TYPE_OF_BUILDING_COLOR = {
  commercial: yellow[100],
  residential: red[100],
  industrial: green[100],
};

const QuoteCard = ({ quote }) => {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/quotes/${quote.id}`)}
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
          <Chip label={`Facades: ${quote.info.facades.length}`} />
          <Chip label={`Roofs: ${quote.info.roofs.length}`} />
          <Chip
            label={`Efficiency: ${toNumerical(getTotalEfficiency(quote))} KWh/Year`}
          />
        </FlexRow>
      </FlexColumn>
    </Card>
  );
};

export default QuoteCard;
