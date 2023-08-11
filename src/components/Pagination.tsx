import React from "react";

type Props = {
  postsPerPage: number;
  totalPosts: number;
  paginate: Function;
  currentPage: number;
};

export const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPage,
}: Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container">
      <ul className="flex justify-center">
        {pageNumbers.map((number) => {
          const isActive = number === currentPage ? "bg-cyan-500" : "";

          return (
            <li key={number} className=" ">
              <button
                onClick={() => {
                  paginate(number);
                }}
                className={`${isActive} rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-cyan transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-cyan-600 focus:text-cyan-600 focus:outline-none focus:ring-0  active:text-cyan-700 active:font-bold dark:hover:bg-neutral-700`}
              >
                {number}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
