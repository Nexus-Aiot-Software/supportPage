import react, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { MenuItem } from "@mui/material";
import QuizIcon from "@mui/icons-material/Quiz";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import emailjs from "emailjs-com";

const defaultTheme = createTheme();

export default function SignInSide() {
  const [app, setApp] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    var templateParams = {
      app: app,
      title: title,
      description: description,
      email: email,
    };

    emailjs
      .send(
        "service_zkc63jk",
        "template_jej2zoa",
        templateParams,
        "NWMmxXpQA-8505kth"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Support request submitted successfully!");
          setApp("");
          setTitle("");
          setDescription("");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to submit support request.");
        }
      );
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url("/bg.webp")',
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover", // Cover the entire component
            backgroundPosition: "center", // Center the image
            backgroundRepeat: "no-repeat", // Prevent the image from repeating
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <QuizIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Nexus AIOT Software Support
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                select
                label="Select App"
                name="app"
                value={app}
                onChange={(e) => setApp(e.target.value)}
                fullWidth
                required
                margin="normal"
              >
                <MenuItem value="">Select an app</MenuItem>
                <MenuItem value="I-Collect">I-Collect</MenuItem>
                <MenuItem value="I-Collect_Contractor">
                  I-Collect-Contractor
                </MenuItem>
                <MenuItem value="VLJejak">VLJejak</MenuItem>
                <MenuItem value="VLJejak_Contractor">
                  VLJejak-Contractor
                </MenuItem>
              </TextField>
              <TextField
                label="Title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                fullWidth
                required
                margin="normal"
              />
              <TextField
                label="Description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                required
                margin="normal"
                multiline
                rows={4}
              />
              <TextField
                label="Email"
                name="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                fullWidth
                required
                type="email"
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 2 }}
              >
                Submit
              </Button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
