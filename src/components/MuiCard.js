import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

const MuiCard = () => {
  return (
    <Box width="100">
      <Paper>
        <Typography variant="h2" padding="10px">
          Mui Card
        </Typography>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
          <Box sx={{ padding: "20px" }} width="300px">
            <Card sx={{ textAlign: "left", mt: "10px" }}>
              <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random"
                alt="unsplash image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  React
                </Typography>
                <Typography gutterBottom variant="body" color="text.secondary">
                  React is a javascript library for building user interfaces.
                  React can be used as a base in the development of single page
                  or mobile application.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn more</Button>
              </CardActions>
            </Card>
          </Box>
          <Box
            flexWrap="wrap"
            flexDirection="row"
            sx={{ padding: "20px" }}
            width="300px">
            <Card sx={{ textAlign: "left", mt: "10px" }}>
              <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random"
                alt="unsplash image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  React
                </Typography>
                <Typography gutterBottom variant="body" color="text.secondary">
                  React is a javascript library for building user interfaces.
                  React can be used as a base in the development of single page
                  or mobile application.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn more</Button>
              </CardActions>
            </Card>
          </Box>
          <Box
            flexWrap="wrap"
            flexDirection="row"
            sx={{ padding: "20px" }}
            width="300px">
            <Card sx={{ textAlign: "left", mt: "10px" }}>
              <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random"
                alt="unsplash image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  React
                </Typography>
                <Typography gutterBottom variant="body" color="text.secondary">
                  React is a javascript library for building user interfaces.
                  React can be used as a base in the development of single page
                  or mobile application.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn more</Button>
              </CardActions>
            </Card>
          </Box>
          <Box
            flexWrap="wrap"
            flexDirection="row"
            sx={{ padding: "20px" }}
            width="300px">
            <Card sx={{ textAlign: "left", mt: "10px" }}>
              <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random"
                alt="unsplash image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  React
                </Typography>
                <Typography gutterBottom variant="body" color="text.secondary">
                  React is a javascript library for building user interfaces.
                  React can be used as a base in the development of single page
                  or mobile application.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn more</Button>
              </CardActions>
            </Card>
          </Box>
          <Box
            flexWrap="wrap"
            flexDirection="row"
            sx={{ padding: "20px" }}
            width="300px">
            <Card sx={{ textAlign: "left", mt: "10px" }}>
              <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random"
                alt="unsplash image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  React
                </Typography>
                <Typography gutterBottom variant="body" color="text.secondary">
                  React is a javascript library for building user interfaces.
                  React can be used as a base in the development of single page
                  or mobile application.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn more</Button>
              </CardActions>
            </Card>
          </Box>
          <Box
            flexWrap="wrap"
            flexDirection="row"
            sx={{ padding: "20px" }}
            width="300px">
            <Card sx={{ textAlign: "left", mt: "10px" }}>
              <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random"
                alt="unsplash image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  React
                </Typography>
                <Typography gutterBottom variant="body" color="text.secondary">
                  React is a javascript library for building user interfaces.
                  React can be used as a base in the development of single page
                  or mobile application.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn more</Button>
              </CardActions>
            </Card>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default MuiCard;
