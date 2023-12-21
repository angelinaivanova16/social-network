import classes from "./users.module.css";

const Paginator = ({ totalUsersCount, pageSize, changePage, currentPage }) => {
  // let pageCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= 20; i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((el) => {
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
    </div>
  );
};

export default Paginator;
