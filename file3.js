import express from "express";

// Create an instance of express
const app = express();

// Define the port number
const PORT = 3000;

// Define a simple get method to display group names using HTML elements
// same URL => http://localhost:3000/crud
app.get("/crud", (req, res) => {
  res.send("Reading");
});

app.post("/crud", (req, res) => {
  res.send("Creating");
});

app.put("/crud", (req, res) => {
  res.send("Updating");
});

app.delete("/crud", (req, res) => {
  res.send("Deleting");
});

/*
Link: https://expressjs.com/en/guide/routing.html#app-route

app.route().get().post().delete()
*/
app
  .route("/route")
  .get((req, res) => {
    res.send('Practising .get() HTTP method for "Read/Retrieve"');
  })
  .post((req, res) => {
    res.send('Practising .post() HTTP method for "Create"');
  })
  .put((req, res) => {
    res.send('Practising .put() HTTP method for "Update"');
  })
  .delete((req, res) => {
    res.send('Practising .delete() HTTP method for "Delete"');
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
