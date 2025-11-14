import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const TodoPagination = ({ totalPage, currentPage, onPageChange }) => {
  //generatePage
  const generatePage = () => {
    const pages = [];

    if (totalPage <= 4) {
      for (let i = 1; i <= totalPage; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage < 3) {
        pages.push(1, 2, 3, "...", totalPage);
      } else if (currentPage >= totalPage - 1) {
        pages.push(1, "...", totalPage - 2, totalPage - 1, totalPage);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPage
        );
      }
    }

    return pages;
  };

  const showPage = generatePage();

  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage == 1}
      >
        <ChevronLeft />
      </Button>

      <ul className="flex items-center">
        {showPage.map((page, index) => {
          return page === "..." ? (
            <li>
              <span key={`dots-${index}`} className="px-1 md:px-2 lg:px-4 py-2">
                ...
              </span>
            </li>
          ) : (
            <li key={page}>
              <Button
                size="icon"
                onClick={() => onPageChange(page)}
                className={`m-1 md:px-2 lg:px-4 py-2 border rounded-lg ${
                  currentPage === page
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {page}
              </Button>
            </li>
          );
        })}
      </ul>

      <Button
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPage}
      >
        <ChevronRight />
      </Button>
    </div>
  );
};

export default TodoPagination;
