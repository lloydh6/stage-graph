function generateGraph(canvas, points, options) {
  if (canvas) {
    // Make the canvas visually fill the positioned parent
    canvas.style.width = '100%';
    canvas.style.height = '100%';

    // Set the internal size of the canvas to match the values above
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Create a canvas context
    const canvasContext = canvas.getContext('2d');

    // Get the max value of the array so the percentage can be calculated
    const maxValue = Math.max(...points);

    // Create the gradient for the even segments
    const evenGradient = canvasContext.createLinearGradient(0, 0, 0, 170);
    evenGradient.addColorStop(0, '#f39c12');
    evenGradient.addColorStop(1, '#e67e22');

    // Create the gradient for the odd segments
    const oddGradient = canvasContext.createLinearGradient(0, 0, 0, 170);
    oddGradient.addColorStop(0, '#d35400');
    oddGradient.addColorStop(1, '#e74c3c');

    // Get the width of each
    const segmentWidth = canvas.width / points.length;

    // Loop through each of the values in the array
    points.forEach((score, i) => {
      // Get the current score as a percentage
      const percentage = (score / maxValue) * 100;

      // Get the previous score as a percentage,
      // if this is the first score then set it to the current value
      const previousPercentage = (i === 0 ? percentage : points[i - 1] / maxValue) * 100;

      // Get the height of the segment based on the percentage of the value
      const scoreHeightPercentage = (canvas.height / 100) * percentage;

      // Calculate the top right position of segment
      // Divide by 2 to take half off as this is taken off the bottom of the segment
      const top = (canvas.height - scoreHeightPercentage) / 2;

      // Calculate the bottom right position of the segment
      // The top value is also added to this point do account for the top subtraction
      const bottom = (canvas.height / 100) * percentage + top;

      // Calculate the previous score height percentage
      // Set to the current score height percentage if this is the first value in the array

      // eslint-disable-next-line
      const previousScoreHeightPercentage =
        (canvas.height / 100) * (i === 0 ? percentage : previousPercentage);

      // Calculate the previous top right position of the last segment
      // Divide by 2 to take half off as this is taken off the bottom of the segment
      const previousTop = (canvas.height - previousScoreHeightPercentage) / 2;

      // Calculate the previous bottom right position of the last segment
      // The previous top value is also added to this point do account for the top subtraction
      const previousBottom =
        (canvas.height / 100) * (i === 0 ? percentage : previousPercentage) + previousTop;

      // Select either the odd or even gradient based on the index
      canvasContext.fillStyle = i % 2 === 0 ? evenGradient : oddGradient;

      // Start the path of a canvas context
      canvasContext.beginPath();

      // Move to the top left point of the segment
      // This is the width of all the previous sections
      // 1 is subtracted as this makes the segments look connected to one another
      canvasContext.moveTo(segmentWidth * i - 1, previousTop);

      // Draw a line from the starting point above to this starting point
      // and add it's own segment width
      // Finish the line at top point based off it's percentage
      canvasContext.lineTo(segmentWidth + segmentWidth * i, top);

      // Draw a line from the top right point to the bottom right point
      canvasContext.lineTo(segmentWidth + segmentWidth * i, bottom);

      // Draw a line from the bottom right point back to the start of the segment
      // which is the previous bottom right point
      canvasContext.lineTo(segmentWidth * i - 1, previousBottom);

      // Return home to the initial starting point
      canvasContext.closePath();

      // Fill the segment with the set fill style
      canvasContext.fill();
    });
  }
}

export default generateGraph;