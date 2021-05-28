import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addArticle } from "../redux/articleSlice";
import {IArticle, IStoreState} from "../redux/types";

export default function ArticleList() {
	const articles = useSelector((state: IStoreState) => state.articles);
	const dispatch = useDispatch();

	function onClick() {
		const article: IArticle = { title: 'Orangen' };

		dispatch(
			addArticle(article)
		);
	}

    return (
		<>
			Artikelliste
			<ul>
				{articles?.map((article: IArticle) => (
					<li>{article.title}</li>
				))}
			</ul>

            <button onClick={onClick}>Add Orangen</button>
		</>
	);
}


