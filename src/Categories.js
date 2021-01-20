import React from "react";

const Categories = ({ categories, filterFunc }) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            onClick={() => filterFunc(category)}
            type="button"
            className="filter-btn">
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
