import React, {useState, useEffect} from "react";
import styles from "./Paginator.module.css";
import cn from "classnames"//нужно установить npm i classnames чтобы можно было объединять классы и использовать cn

const Paginator = ({totalItemsCount, pageSize, portionSize=15, currentPage, onPageChanged, ...props}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);//округляет в большую сторону до целого значения
                                                         //получаем количество страниц по pageSize=4 юзеров
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {//создаём массив всех получившихся страниц с юзерами [1,2,3,...pagesCount],
    pages.push(i);                       //его мы будем мапить, чтобы отобразить все страницы на экране
  }

  let portionCount = Math.ceil(pagesCount / portionSize);//получаем порции страниц по portionSize=15 страниц
  let [portionNumber, setPortionNumber] = useState(1);//локальный стать с номером порции, по дефолту отображаем первую порцию
  let leftPortionPageNumber = (portionNumber-1) * portionSize + 1;//для кнопки PREV, если portionNumber=2 получаем 16
  let rightPortionPageNumber = portionNumber * portionSize;       //для кнопки NEXT, если portionNumber=2 получаем 30

  useEffect( () => {  //помогает вернуться на порцию страниц, где была текущая страница с выбранным юзером
    setPortionNumber(Math.ceil(currentPage/portionSize))}, [currentPage]);//эфект перезаписывает portionNumber
                      //если это не прописать, то нас будет автоматически возвращать на первую порцию, т.к. по дефолту portionNumber=1
  return (
    <div className={styles.paginator}>
      {portionNumber >1 &&  //когда мы на первой порции кнопку не видно, т.к. portionNumber >1: false (portionNumber=1)
      <button onClick={ () => {setPortionNumber(portionNumber-1)} }>PREV</button>}{/*при нажатии перезаписываем номер порции на предидущий*/}
        {pages //фильтруем страницы для порции в зависимости от portionNumber[{1-15},{16-30},{31-45},...{(pagesCount-14)-pagesCount})
          .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)//по дефолту р от 1 до 15, т.к portionNumber изначально равен 1
          .map((p) => {
            return (
              <span 
                key={p}               //обязательно задаём ключ когда пользуемся методом map
                className = { cn ({   //помогает нам объединять классы
                  [styles.selectedPage] : currentPage === p} ,//внутренний класс, применяется внутри основного класса
                  styles.pageNumber) }//основной класс
                onClick={(e) => {onPageChanged(p)}}>{/*нажимая на номер страницы мы перезаписываем номер страницы в нашем сторе*/}
                {p}                                 {/*и запрашиваем юзеров из сервера которые соответствуют выбранной странице*/}
              </span>
            )
          })
        }
      {portionCount > portionNumber && //кнопка исчезает на последней порции, т.к на ней portionNumber = portionCount
        <button onClick={() => {setPortionNumber(portionNumber+1)}}>NEXT</button>}
    </div>  //при нажатии перезаписываем номер порции на следующий
  );
};

export default Paginator;