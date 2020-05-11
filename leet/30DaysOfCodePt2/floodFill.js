// ** Day 11 of 30 Days of Code Challenge Part ii -- May Edition! 
// ** --> { Flood Fill ! }

// T A S K!!!
// An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535)

// Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

// To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

// At the end, return the modified image.

// ~ H I N T S!
// Write a recursive function that paints the pixel if it's the correct color, then recurses on neighboring pixels.

// TLDR; 
// change starting pixel to a different color
// click a bucket tool and flood fill that space (from starting point to any surrounding pixels)

// * first attempt: use DFS/recursion 
const floodFill = (image, sr, sc, newColor) => {
  // quick edge case check --> if newColor = starting point of the click, no need to do work!
  if(image[sr][sc] === newColor) {
    return image;
  }

  // to change every pixel to the new color we want
  fill(image, sr, sc, image[sr][sc], newColor);
  
  return image;

}

// recursive function here
// sr and sc = i and k
// take the color we are clicking in initially and the new color we want to fill
const fill = (image, i, k, color, newColor) => {
  // base case -> are we still inside the boundary of our image?
  // part ii -> if pixel we are evaluating has the same color as the starting pixel, then we need to change it, if not return
  if( i < 0 || i >= image.length || k < 0 || k >= image[i].length || image[i][k] !== color) {
    return;
  }

  // change color of current pixel
  image[i][k] = newColor;

  // continue to traverse and DFS for all the pixels around
  // move down one from starting point
  fill(image, i + 1, k, color, newColor);
  // move up one
  fill(image, i - 1, k, color, newColor);
  // move right
  fill(image, i, k + 1, color, newColor);
  // move left
  fill(image, i, k - 1, color, newColor);

}


// * test cases !!
console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2)); // -> [[2,2,2],[2,2,0],[2,0,1]]