import * as React from 'react';
import { RefObject } from 'react';
import { bindActionCreators } from 'redux';
import { connect, } from 'react-redux';
import store from './store';

// Components

export interface IArticleListProps {
	articles: IArticle[];
	addArticle: (title: IArticle) => void;
};

function ArticleList(props: IArticleListProps) {
	function onClick() {
		const article: IArticle = { title: 'Orangen' };

		props.addArticle(article);
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

function mapDispatchToProps(dispatch: any) {
  return {
    addArticle: (article: IArticle) => {
    	const action = { type: "ADD_ARTICLE", payload: article };
    	dispatch(action);
    }
  };
}

// Interfaces

export interface IStoreState {
	articles: IArticle[];
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleList);


