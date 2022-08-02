import React, {useState} from "react";
import styles from "./Paginator.module.css";

const Paginator = ({totalItemsCount, pageSize, portionSize=10, currentPage, onPageChanged, ...props}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber-1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;


  return (
    <div>
      {portionNumber >1 &&
      <button onClich={setPortionNumber(portionNumber-1)}>PREV</button>}
        {pages
          .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
          .map((p) => {
            return (
              <span className={props.currentPage === p && styles.selectedPage}//{ cn ({ [styles.selectedPage]:currentPage === p}, styles.pageNumber) }
              onClick={(e) => {onPageChanged(p)}}>
                {p} 
              </span>
            )
          })
        }
      {portionCount > portionNumber && 
        <button onClick={setPortionNumber(portionNumber+1)}>NEXT</button>}
    </div>
  );
};

export default Paginator;