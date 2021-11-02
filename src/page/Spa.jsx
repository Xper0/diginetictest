import React, {useState} from 'react';
import "./Spa.scss";
import FilterNav from "../components/FilterNav/FilterNav";
import Card from "../components/Card/Card";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Spa = () => {

    const [card, setCard] = useState([...Array(9)])


    return (
        <div className="Spa">
            <div className="Header">
                <div className="Header-logo">
                    <h3 className="Header-logo__desc">Шапка сайта</h3>
                </div>
            </div>
            <div className="Content">
                <div className="Content-search">
                   <div className="Content-search__field">
                       <SearchIcon className="Content-search__icon" width={17} height={17} style={{marginLeft: "10px"}} />
                       <input className="Content-search__input" type="text"/>
                       <ClearIcon width={10} height={10} />
                       <button className="Content-search__btnFind">Найти</button>
                   </div>
                    <button className="Content-search__btnClose">Закрыть</button>
                </div>
                <div className="Content-searchResult">

                    <div className="Content-searchInfo">
                        <h1 className="Content-searchInfo__title">Результаты по запросу</h1>
                        <span className="Content-searchInfo__desc">{`Показаны результаты для “Запрос пользозвателя”. Вы искали “Зопрос пользователя”.`}</span>
                    </div>
                    <div style={{display: "flex", marginTop: "30px"}}>
                        {[...Array(5)].map((block,index) => <div
                            className="Content-searchFind"
                            key={index}
                        >
                            <div className="Content-searchFind__img"></div>
                            <div className="Content-searchFind__category">
                                <h3 className="Content-searchFind__title">Название категории</h3>
                                <span className="Content-searchFind__desc">134 товара</span>
                            </div>
                        </div>)}
                    </div>

                </div>


                <div className="Content-product">
                    <div className="Content-product__filter">
                        <FilterNav />
                    </div>

                    <div className="Content-product__sort">
                        <div className="Content-product__content">
                            <div style={{display: "flex"}}>
                                <span style={{marginRight: "10px", fontSize: "14px"}}>Сортировать по: </span>
                                <ul style={{display: "flex"}}>
                                    <li className="Content-product__item" >
                                        Популярности
                                    </li>
                                    <li className="Content-product__item">
                                        Сначала дешевые
                                    </li>
                                    <li className="Content-product__item">
                                        Сначала дорогие
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <span style={{marginRight: "10px", fontSize: "14px"}}>Показывать до </span>
                                <select
                                    style={{
                                        width: "50px",
                                        height: "33.33px",
                                        border: "1px solid #DEDEDE",
                                        borderRadius: "3px",
                                        outline: "none",
                                        padding: "7px 3px"
                                    }}
                                >
                                    <option>24</option>
                                    <option>32</option>
                                </select>
                            </div>
                        </div>

                        <div className="Content-qualification ">
                            {[...Array(4)].map((item, index) =>
                                <div key={index} className="Content-qualification__mark">
                                    <p>Уточнение</p>
                                </div>
                            )}

                        </div>

                        <div className="Content-product__card">
                        {card.map((item, index) => <Card key={index} dataCard={item} />)}
                        </div>
                        <Stack spacing={2}>
                            <Pagination count={13} page={3}  siblingCount={0} />
                        </Stack>
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default Spa;