import { useState } from "react";
import classes from "./../../users/users.module.css"

const Paginator = ({ totalItemsCount, pageSize, changePage, currentPage, portionSize = 10 }) => {
  let pageCount = Math.ceil(totalItemsCount / pageSize); // сколько всего у меня страниц (pageSize у меня жестко установлен на 5 пользователей на 1 страничке).
  let pages = []; // массив с номерами страниц
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pageCount / portionSize); // сколько порций по 10 страниц получится
  let [portionNumber, setPortionNumber] = useState(1); // useState возвращает массив с 2 эл-ми: 1 - значение по умолчанию; 2 - callback функция, которая будет менять это значение. У меня тут номер порции.
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1; // левая граница порции страниц (получаю левую границу: номер порции минус 1 и умножаю это на размер порции (5) и плюс 1).
  let rightPortionPageNumber = portionNumber * portionSize; // правая граница порции страниц

  return (
    <div>
      {portionNumber > 1 && // если порция 2 и больше, то показываю кнопку назад, чтоб вернуться на предыдущую порцию.
        <button className={classes.PaginatorBtn} onClick={() => {
					setPortionNumber(portionNumber - 1)
			}}>Prev</button>
      }

      {pages
      .filter(el => leftPortionPageNumber <= el && el <= rightPortionPageNumber) // рисуем только те страницы, которые больше или равны левой границе и меньше или равны правой границе.
      .map((el) => {
        return (
          <span
            onClick={() => {
              changePage(el);
            }}
            key={el}
            className={currentPage === el ? classes.selectedPage : classes.page}
          >{`${el} `}</span>
        );
      })}

      {portionCount > portionNumber && // если есть порции впереди, то показываю кнопку вперед, чтоб перейти на след. порцию.
        <button className={classes.PaginatorBtn} onClick={() => {
					setPortionNumber(portionNumber + 1)
			}}>Next</button>
      }

    </div>
  );
};

export default Paginator;
