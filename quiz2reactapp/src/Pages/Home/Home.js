import React, { useState } from "react";
import "./Home.css";
import { Categories } from "../../Data";
import { TextField, MenuItem, Button } from "@mui/material";

const Home = ({name, setName}) => {

    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    console.log(category, difficulty)

  return (
    <div className="content">
      <div className="setting">
        <span style={{ fontSize: 30 }}>Quiz Settings</span>

        <div className="settings_select">
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e)=> setName(e.target.value)}
          />
          <TextField
            select
            label="Select Category"
            variant="outlined"
            value={category}
            onChange={(e)=> setCategory(e.target.value)}
            style={{ marginBottom: 30 }}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Select Difficulity"
            variant="outlined"
            value={difficulty}
            onChange={(e)=> setDifficulty(e.target.value)}
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button variant="contained" color="primary" size="large">
            Start Quiz 
          </Button>
        </div>
      </div>

      <img src="./quiz.svg" className="banner" alt="quiz img" />
    </div>
  );
};

export default Home;
