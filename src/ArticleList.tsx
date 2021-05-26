import * as React from 'react';
import { connect, } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addArticle } from "./reducer";

export interface IArticleListProps {
	articles: IArticle[];
};

function ArticleList(props: IArticleListProps) {
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
				{props.articles?.map((article: IArticle) => 
					<Article title={article.title}></Article>
				)}
			</ul>

            <button onClick={onClick}>Add Orangen</button>
		</>
	);
}

export interface IArticle {
	title: string;
};

function Article(props: IArticle) {
	return (
		<li>
			{props.title}
		</li>
	);
}

// Redux

const mapStateToProps = (state: IStoreState) => {
  return { articles: state.articles };
};

// Interfaces

export interface IStoreState {
	articles: IArticle[];
};

export default connect(
  mapStateToProps
)(ArticleList);


