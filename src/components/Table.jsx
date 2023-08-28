import React from "react";

const Table = () => {
  return (
    <div className="table w-full text-slate-400 text-sm rounded-md overflow-hidden">
      <div className="table-header-group bg-slate-50">
        <div className="table-row font-medium ">
          <div className="table-cell text-left p-4">Song</div>
          <div className="table-cell text-left p-4">Artist</div>
          <div className="table-cell text-left p-4">Year</div>
        </div>
      </div>
      <div className="table-row-group">
        <div className="table-row bg-white hover:bg-gray-100 transition-colors">
          <div className="table-cell p-4 ">The Sliding Mr. Bones</div>
          <div className="table-cell p-4 ">Malcolm Lockyer</div>
          <div className="table-cell p-4 ">1961</div>
        </div>
        <div className="table-row bg-white hover:bg-gray-100 transition-colors">
          <div className="table-cell p-4 ">Witchy Woman</div>
          <div className="table-cell p-4 ">The Eagles</div>
          <div className="table-cell p-4 ">1972</div>
        </div>
        <div className="table-row bg-white hover:bg-gray-100 transition-colors">
          <div className="table-cell p-4 ">Shining Star</div>
          <div className="table-cell p-4 ">Earth, Wind, and Fire</div>
          <div className="table-cell p-4 ">1975</div>
        </div>
      </div>
    </div>
  );
};

export default Table;
