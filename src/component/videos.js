import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import classes from "../styles/videos.module.css";
import Video from "./video";

export default function Videos() {
	const [page, setPage] = useState(1);
	const { loading, error, videos, hasMore } = useVideoList(page);

	return (
		<>
			{videos.length > 0 && (
				<InfiniteScroll
					dataLength={videos.length}
					hasMore={hasMore}
					next={() => setPage(page + 8)}
				>
					<div className={classes.videos}>
						{videos.map((video) =>
							video.noq > 0 ? (
								<Link to="/quiz" key={video.youtubeID}>
									<Video
										title={video.title}
										id={video.youtubeID}
										noq={video.noq}
									/>
								</Link>
							) : (
								<Video
									title={video.title}
									id={video.youtubeID}
									noq={video.noq}
								/>
							)
						)}
					</div>
				</InfiniteScroll>
			)}

			{!loading && videos === 0 && (
				<div className="error">No Data found</div>
			)}

			{error && <span className="error">There was an error!</span>}

			{loading && (
				<div className="ds_center">
					<div className="loader"></div>
				</div>
			)}
		</>
	);
}
