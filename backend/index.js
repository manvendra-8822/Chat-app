const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try{
    const r=await axios.put(
        "https://api.chatengine.io/users/",
      { username:username, secret:username,first_name:username},
      { headers: { "Private-Key": "6eb3575b-a798-4ca8-99da-36676c3496f2" } }
    );
    return res.status(r.status).json(r.data);
  }catch(e){
    return res.status(e.response.status).json(e.response.data);
  }

  return res.json({ username: username, secret: "sha256..." });
});


app.post("/login", async (req, res) => {
    const { username, secret } = req.body;
  
    // Fetch this user from Chat Engine in this project!
    // Docs at rest.chatengine.io
    try {
      const r = await axios.get("https://api.chatengine.io/users/me/", {
        headers: {
          "Project-ID":"ec8421b2-9503-4d15-9698-662006c8deb7",
          "User-Name": username,
          "User-Secret": secret,
        },
      });
      return res.status(r.status).json(r.data);
    } catch (e) {
      return res.status(e.response.status).json(e.response.data);
    }
  });

const port=3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});