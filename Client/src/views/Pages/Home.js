import React, { useEffect, useState } from 'react'
import Axios from '../../utils/axios';
import Header from '../Layouts/Header';
import Loading from '../Loading';
import Container from '../Layouts/Container';
import ShortArticle from './News/Components/ShortArticle';
import Pagination from '../Layouts/Pagination';

export default (props) => {

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [counting, setCounting] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const lastPage = page;
    const getNews = async() => await Axios.get(`/news/getNews/${page}`)
    .then((res) => setNews(res.data));
    const getPagination = async() => await Axios.get('/news/getCountedNews')
    .then((res) => setCounting(res.data), setLoading(false));
    if(page !== lastPage) getNews();
    getPagination();
    getNews();
  }, [page]);

  return (
    <React.Fragment>
      <Header title="Homepage"></Header>
      <Loading waiting={loading}>
        <Container singleCol={true}>
          { news.map((article, index) => <ShortArticle key={index} article={article} />) }
          { news.length < 1 ? (<p>Nothing new on this page.</p>) : null}
          <Pagination current={page - 1} counting={counting} whenClicked={setPage} />
        </Container>
      </Loading>
    </React.Fragment>      
  )
}