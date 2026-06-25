import React from "react";

const AdminEdits = ({
  title,
  description,
  value,
  placeholder = "Not set",
  buttonText,
  icon,
  onEdit,
}) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-6">

      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-800">
            {title}
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            {description}
          </p>
        </div>

        {icon}
      </div>

      {/* Content */}
      <div className="mt-5 flex items-center justify-between bg-slate-50 border border-slate-200 rounded-lg p-4">

        <div>
          <p className="text-sm text-slate-500">Current</p>
          <p className="text-lg font-medium text-slate-800">
            {value || placeholder}
          </p>
        </div>

        <button
          onClick={onEdit}
          className="bg-slate-900 text-white px-4 py-2 rounded-md text-sm hover:bg-slate-800 flex items-center gap-2"
        >
          {buttonText}
        </button>
      </div>

    </div>
  );
};

export default AdminEdits;