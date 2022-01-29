import React from 'react';

export const SelectedTag = () => {
    return (
      <div className="absolute z-10 p-2 rounded-md top-3 left-3 bg-brand">
        <p className="mb-0 text-xs font-semibold tracking-wider text-white uppercase">
          Selected
        </p>
      </div>
    );
};
