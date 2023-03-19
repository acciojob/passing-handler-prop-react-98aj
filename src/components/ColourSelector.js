import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background } = config;
  return (
    <button className={btn-blue} onClick={() => selectNextBackground({background: background})}>
      Blue
    </button>
<button className={btn-orange} onClick={() => selectNextBackground({background: background})}>
      Orange
    </button>
<button className={btn-green} onClick={() => selectNextBackground({background: background})}>
      Green
    </button>
  )
}
export default ColourSelector;
