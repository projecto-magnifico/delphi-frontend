import React from 'react';
import PT from 'prop-types';


class ThreadArticles extends React.Component {
    render () {
        const {articles} = this.props;
        return (
            <div>
                <table className="table">
                    <tbody>
                        {articles.data.map((article, i) => {
                            return <tr key={i}>
                                <th>{i+1}</th>
                                <td>
                                    <a href={article.url}>
                                        <p><strong>{article.title}</strong></p>
                                        <p>{article.description}</p>
                                    </a>
                                </td>
                                <td>{article.age} days old</td>
                                <td>Dismiss / Delete</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

    static propTypes = {
        articles : PT.array.isRequired
    }
}

export default ThreadArticles;