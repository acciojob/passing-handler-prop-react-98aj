import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  return (
    <button className={btnBlue} onClick={() => selectNextBackground({background: background})}>
      Blue
    </button>
<button className={btnOrange} onClick={() => selectNextBackground({background: background})}>
      Orange
    </button>
<button className={btnGreen} onClick={() => selectNextBackground({background: background})}>
      Green
    </button>
  )
}
export default ColourSelector;
