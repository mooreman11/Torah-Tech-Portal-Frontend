import React from "react";
import { Button } from "@mui/material";
function Forms() {
  return (
    <div>
      <form
        method="post"
        enctype="multipart/form-data"
        action="http://localhost:8000/api/upload-forms"
      >
        <Button variant="contained" component="label">
          Health Forms
          <input type="file" name="health form" hidden />
        </Button>
        <Button variant="contained" component="label">
          Masa Forms
          <input type="file" name="masa form" hidden />
        </Button>
        <Button variant="contained" component="label">
          Insurance Forms
          <input type="file" name="insurance form" hidden />
        </Button>
        <Button type="submit" variant="outlined">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Forms;
