import React from 'react';
import "./TestQuestion.scss";


const Question = () => {
    return (
        <div className="TestQuestion">
            <div>
                <section>
                    <h3>1. Каким будет результат такого сравнения на языке JavaScript 1 === '1'. Почему был получен
                        такой результат?
                    </h3>
                    <p>Результат false т.к идет сравнение на индеетичность типов данных (number === string)</p>
                </section>
                <section>
                    <h3>2.
                        Каким будет результат следующей операции на языке JavaScript: [1, 2, 3] + [4, 5, 6]. Почему был
                        получен такой результат?

                    </h3>
                    <p> 1,2,34,5,6 (склеивание массивов)</p>
                </section>
                <section>
                    <h3>{`3.
                    Дано выражение:
                    var a = {b: 1};
                    var b = a;
                    b.b = 2;
                    console.log(a);
                    Что будет выведено в консоли? Почему был получен такой результат?
                `}
                    </h3>
                    <p> {`a = {b: 2} объекты являются ссылками, что приыодит к их равенству. Для глубокого копирования лучше делать JSON.stringify(JSON.parse())`}</p>
                </section>
                <section>
                    <h3>{`4. 
Написать регулярное выражение, совпадающее с числом с плавающей точкой с точностью до 3 знака после запятой.

                `}
                    </h3>
                    <p> {`^[0-9]*[.,]?[0-3]+$`}</p>
                </section>
                <section>
                    <h3>{`5. 
Написать регулярное выражение, по которому мэтчится url. Объяснить, как оно работает? `}
                    </h3>
                    <p> {`-`}</p>
                </section>
                <section>
                    <h3>{`6.
Каким будет значение переменной text после выполнения данного JavaScript кода? 
function setText(message) { 
text = message;
 }
 var text = 'Текст';
 setText('Сообщение');
Опишите, почему получился такой результат.


                `}
                    </h3>
                    <p> {`undefined так как переменная text недоступна вне функции`}</p>
                </section>
                <section>
                    <h3>{`7. 
На сайте есть ссылка, ведущая на промо страницу: <a href="http://example.com/">promo</a>. Нужно доработать html-код ссылки так, чтобы при клике на ссылку отправлялся запрос для трекинга клика  https://httpbin.org/status/200 и происходил переход на промо страницу.

                `}
                    </h3>
                    <p > {`<a href='#' onclick="GET(this)">promo</a> в js файле`}
                        <code style={{margin: "5px"}}>{`function GET(getData){
                        fetch('https://httpbin.org/status/200').then(
                            data=>location.replace(getData.href),
                            err=>console.error(err)
                        );
                        return false;
                    }`}</code></p>
                </section>
                <section>
                    <h3>{`8. 
Написать функцию для получения список всех артикулов товаров в консоли браузера на странице https://groupprice.ru/categories/jenskaya-odejda?referer_from=main_catalog

`}
                    </h3>
                    <p><code style={{margin: "5px"}}>{
                            `async function get() {
                            try {
                               let {data} = await axios.get("https://groupprice.ru/categories/jenskaya-odejda?referer_from=main_catalog")
                               console.log(data.article )
                            }
                            catch(err) {
                             alert(err)
                            }
                            
                         
                            
                    }`}</code></p>
                </section>
                <section>
                    <h3>{`9. Написать функцию для получения всех характеристики товара в консоли браузера в виде объекта в формате attributeName: value на странице https://nir-vanna.ru/product/smesitel-bravat-art-f175109c-dlya-rakoviny/
`}
                    </h3>
                    <p> {`-`}</p>
                </section>


            </div>
        </div>
    );
};

export default Question;