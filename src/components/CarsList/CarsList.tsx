import React, { useCallback, useMemo, useState } from "react";
import { Pagination } from "../common";
import { useFetch } from "../../hooks";
import { getCarsData } from "../../api/cars";
import { CarItem } from "../CarItem/CarItem";
import { Car } from "../../interfaces/cars";
import { useStyles } from "./CarsList.styles";
import { CarsListSkeleton } from "./CarsListSkeleton";

const itemPerPage = 10;
export const CarsList: React.FC = () => {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const [
    {
      isFetching,
      data: { offers },
    },
    fetchData,
  ] = useFetch(getCarsData);

  const handlePaginationChange = useCallback(
    (_, page) => {
      setCurrentPage(page);
    },
    [setCurrentPage]
  );
  const totalPageCount = useMemo(
    () => (offers?.length ? Math.ceil(offers.length / itemPerPage) : 0),
    [offers]
  );
  useMemo(() => {
    fetchData();
  }, [fetchData]);

  const pageContent = useMemo(() => {
    const firstItem = (currentPage - 1) * itemPerPage;
    console.log(firstItem, firstItem + itemPerPage);
    return offers?.length
      ? offers.slice(firstItem, firstItem + itemPerPage)
      : [];
  }, [offers, currentPage]);
  return (
    <section className={classes.wrapper}>
      {isFetching ? (
        <CarsListSkeleton />
      ) : (
        <ul className={classes.list}>
          {pageContent &&
            pageContent.map(({ id, carGroupInfo, prices }: Car) => (
              <li key={id}>
                <CarItem id={id} carGroupInfo={carGroupInfo} prices={prices} />
              </li>
            ))}
        </ul>
      )}
      <Pagination
        page={currentPage}
        disabled={isFetching}
        count={totalPageCount}
        color="primary"
        onChange={handlePaginationChange}
      />
    </section>
  );
};
