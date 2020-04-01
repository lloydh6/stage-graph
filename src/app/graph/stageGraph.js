import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import generateGraph from './generateGraph';

import './stageGraph.css';

function StageGraph({ id, points, columnNames }) {

  useEffect(() => {
    // Set timeout so the width and height calculation can occur
    // after the component has rendered
    // setTimeout(() => {
      // Get the canvas from the DOM
      const canvas = document.querySelector(`#${id}`);

      // Generate the graph
      generateGraph(canvas, points);
    // });

  }, [points, id]);

  return (
    <>
      <div className="graphWrapper">
        <canvas id={id} />
        <div className="graphOverlay">
          {points.map(score => {
            return (
              <div key={score} className="graphColumn">
                {score}
              </div>
            );
          })}
        </div>
      </div>
      <div className="columns">
        {columnNames.map(name => {
          return (
            <div key={name} className="graphColumn">
              {name}
            </div>
          );
        })}
      </div>
    </>
  );
}

StageGraph.propTypes = {
  id: PropTypes.string,
  points: PropTypes.arrayOf(PropTypes.number),
  columnNames: PropTypes.arrayOf(PropTypes.string),
};

StageGraph.defaultProps = {
  id: 'stageGraph',
  points: [],
  columnNames: [],
};

export default StageGraph;
