import { getDatabase, ref, set } from "firebase/database";
import _ from "lodash";
import React, { useEffect, useReducer, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAuth } from "../../context/authcontext";
import useQuestions from "../../hooks/useQuestion";
import Answers from "../answers";
import MiniPlayer from "../miniplayer";
import ProgressBar from "../prograssbar";

const initialState = null;

const reducer = (state, action) => {
	switch (action.type) {
		case "questions":
			action.value.forEach((question) => {
				question.options.forEach((option) => {
					option.checked = false;
				});
			});
			return action.value;
		case "answer":
			const questions = _.cloneDeep(state);
			questions[action.questionID].options[action.optionIndex].checked =
				action.value;

			return questions;
		default:
			return state;
	}
};

export default function Quiz() {
	const { id } = useParams();
	const { loading, error, questions } = useQuestions(id);
	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [qna, dispatch] = useReducer(reducer, initialState);
	const { currentUser } = useAuth();
	const history = useHistory();

	useEffect(() => {
		dispatch({
			type: "questions",
			value: questions,
		});
	}, [questions]);

	function handleAnswerChange(e, index) {
		dispatch({
			type: "answer",
			questionID: currentQuestion,
			optionIndex: index,
			value: e.target.checked,
		});
	}

	// handle when user clicks the next button to get the next question
	function nextQuestion() {
		if (currentQuestion + 1 < questions.length) {
			setCurrentQuestion((prevCurrent) => prevCurrent + 1);
		}
	}

	// handle when user clicks the prev button to get back to the previous question
	function prevQuestion() {
		if (currentQuestion >= 1 && currentQuestion <= questions.length) {
			setCurrentQuestion((prevCurrent) => prevCurrent - 1);
		}
	}

	// submit quiz
	async function submit() {
		const { uid } = currentUser;

		const db = getDatabase();
		const resultRef = ref(db, `result/${uid}`);

		await set(resultRef, {
			[id]: qna,
		});

		history.push({
			pathname: `/result/${id}`,
			state: {
				qna,
			},
		});
	}

	// calculate percentage of progress
	const percentage =
		questions.length > 0
			? ((currentQuestion + 1) / questions.length) * 100
			: 0;

	return (
		<>
			{loading && (
				<div className="ds_center">
					<div className="loader"></div>
				</div>
			)}
			{error && (
				<div className="center">
					<p className="error">There was an error!</p>
				</div>
			)}
			{!loading && !error && qna && qna.length > 0 && (
				<>
					<h1>{qna[currentQuestion].title}</h1>
					<h4>Question can have multiple answers</h4>
					<Answers
						input
						options={qna[currentQuestion].options}
						handleChange={handleAnswerChange}
					/>
					<ProgressBar
						next={nextQuestion}
						prev={prevQuestion}
						submit={submit}
						progress={percentage}
					/>
					<MiniPlayer />
				</>
			)}
		</>
	);
}
