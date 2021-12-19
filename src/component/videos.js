import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import classes from "../styles/videos.module.css";
import Video from "./video";

export default function Videos() {
	const { loading, error, videos } = useVideoList(0);

	return (
		<div className={classes.videos}>
			{videos.length > 0 &&
				videos.map((video) => (
					<Link to="/quiz" key={video.youtubeID}>
						<Video
							title={video.title}
							id={video.youtubeID}
							noq={video.noq}
						/>
					</Link>
				))}

			{!loading && videos === 0 && (
				<div className="error">No Data found</div>
			)}

			{error && <div className="error">There was an error!</div>}

			{loading && <div>loading......</div>}
		</div>
	);
}
