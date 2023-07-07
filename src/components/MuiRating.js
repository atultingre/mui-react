import React, { useState } from "react";
import { Paper, Rating, Stack } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const MuiRating = () => {
  const [value, setValue] = useState(null);
  const [dValue, setDValue] = useState(3);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleDChange = (e) => {
    setDValue(e.target.value);
  };
  console.log({ value });
  return (
    <Stack spacing={4}>
      <Paper sx={{ padding: "2rem", mb: "1.5rem" }}>
        <h1>Mui Rating</h1>
        <Stack>
          <Rating
            value={value}
            onChange={handleChange}
            precision={0.5}
            size="small"
          />
          <Rating
            value={value}
            onChange={handleChange}
            precision={0.5}
            size="medium"
          />
          <Rating
            value={value}
            onChange={handleChange}
            precision={0.5}
            size="large"
          />
        </Stack>

        <Stack>
          <Rating
            value={value}
            onChange={handleChange}
            precision={0.5}
            size="medium"
            icon={<FavoriteIcon fonstSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          />
          <Rating
            value={value}
            onChange={handleChange}
            precision={0.5}
            size="medium"
            icon={<FavoriteIcon fonstSize="inherit" color="secondary" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          />
          <Rating
            value={value}
            onChange={handleChange}
            precision={0.5}
            size="medium"
            icon={<FavoriteIcon fonstSize="inherit" color="error" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          />
          <Rating
            value={value}
            onChange={handleChange}
            precision={0.5}
            size="medium"
            icon={<FavoriteIcon fonstSize="inherit" color="warning" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          />
          <Rating
            value={value}
            onChange={handleChange}
            precision={0.5}
            size="medium"
            icon={<FavoriteIcon fonstSize="inherit" color="success" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          />
          <Rating
            value={value}
            onChange={handleChange}
            precision={0.5}
            size="medium"
            icon={<FavoriteIcon fonstSize="inherit" color="info" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          />
        </Stack>

        <Stack>
          <Rating
            value={dValue}
            onChange={handleDChange}
            precision={0.5}
            size="large"
            icon={<FavoriteIcon fonstSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" readOnly />}
          />
          <Rating
            value={dValue}
            onChange={handleDChange}
            precision={0.5}
            size="large"
            icon={<FavoriteIcon fonstSize="inherit" color="secondary" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" readOnly />}
            color="secondary"
          />
          <Rating
            value={dValue}
            onChange={handleDChange}
            precision={0.5}
            size="large"
            icon={<FavoriteIcon fonstSize="inherit" color="warning" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" readOnly />}
            color="error"
          />
          <Rating
            value={dValue}
            onChange={handleDChange}
            precision={0.5}
            size="large"
            icon={<FavoriteIcon fonstSize="inherit" color="error" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" readOnly />}
          />
          <Rating
            value={dValue}
            onChange={handleDChange}
            precision={0.5}
            size="large"
            icon={<FavoriteIcon fonstSize="inherit" color="success" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" readOnly />}
          />
          <Rating
            value={dValue}
            onChange={handleDChange}
            precision={0.5}
            size="large"
            icon={<FavoriteIcon fonstSize="inherit" color="info" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" readOnly />}
          />
        </Stack>

        <Stack>
          <Rating
            value={dValue}
            onChange={handleDChange}
            precision={0.5}
            size="large"
            icon={<FavoriteIcon fonstSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            highlightSelectedOnly
          />
          <Rating
            value={dValue}
            onChange={handleDChange}
            precision={0.5}
            size="large"
            icon={<FavoriteIcon fonstSize="inherit" color="secondary" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            highlightSelectedOnly
          />
          <Rating
            value={dValue}
            onChange={handleDChange}
            precision={0.5}
            size="large"
            icon={<FavoriteIcon fonstSize="inherit" color="warning" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            highlightSelectedOnly
          />
          <Rating
            value={dValue}
            onChange={handleDChange}
            precision={0.5}
            size="large"
            icon={<FavoriteIcon fonstSize="inherit" color="error" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            highlightSelectedOnly
          />
          <Rating
            value={dValue}
            onChange={handleDChange}
            precision={0.5}
            size="large"
            icon={<FavoriteIcon fonstSize="inherit" color="success" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            highlightSelectedOnly
          />
          <Rating
            value={dValue}
            onChange={handleDChange}
            precision={0.5}
            size="large"
            icon={<FavoriteIcon fonstSize="inherit" color="info" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            highlightSelectedOnly
          />
        </Stack>
      </Paper>
    </Stack>
  );
};

export default MuiRating;
