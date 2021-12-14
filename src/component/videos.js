import { Link } from "react-router-dom";
import classes from "../styles/videos.module.css";
import Video from "./video";

export default function Videos() {
  return (
    <div className={classes.videos}>
      <Link to="/quiz">
        <Video />
      </Link>
    </div>
  );
}
