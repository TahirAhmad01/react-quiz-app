import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideoList";
import Video from "./video";

export default function Videos() {
	const [page, setPage] = useState(1);
	const { loading, error, videos, hasMore } = useVideoList(page);

	return (
		<div>
			{videos.length > 0 && (
				<InfiniteScroll
					dataLength={videos.length}
					hasMore={hasMore}
					loader={<div> loading.... </div>}
					next={() => setPage(page + 8)}
				>
					{videos.map((video) =>
						video.noq > 0 ? (
							<Link
								to={`/quiz/${video.youtubeID}`}
								key={video.youtubeID}
							>
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
								key={video.youtubeID}
							/>
						)
					)}
				</InfiniteScroll>
			)}
			{!loading && !error && videos.length === 0 && (
				<div className="center">
					<p className="error">No data found!</p>
				</div>
			)}
			{error && (
				<div className="center">
					<p className="error">There was an error!</p>
				</div>
			)}
			{loading && (
				<div className="ds_center">
					<div className="loader"></div>
				</div>
			)}
		</div>
	);
}
