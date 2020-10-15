<?php

function findNum($input) {
  $numDict = [
    " _     _  _     _  _  _  _  _ ",
    "| |  | _| _||_||_ |_   ||_||_|",
    "|_|  ||_  _|  | _||_|  ||_| _|",
    "                              "
  ];
  for ($i=0;$i<=27;$i+=3) {
    if (
      substr($numDict[0], $i, 3) === $input[0]
      && substr($numDict[1], $i, 3) === $input[1]
      && substr($numDict[2], $i, 3) === $input[2]
      && substr($numDict[3], $i, 3) === $input[3]
      ) {
        return strval($i/3);
      }
    }
  return '?';
}

function recognize($input) {
  $rowLength = strlen($input[0]);
  $numRows = count($input);
  if ($numRows < 4 || $rowLength % 3 !== 0) {
    throw new InvalidArgumentException('.');
  }
  $output = '';
  for ($x=0; $x<$numRows;$x+=4) {
    if ($x>0) $output .= ",";
    $currentLine = array_slice($input, $x, 4);
    for ($i=0;$i<$rowLength;$i+=3) {
      $slicedNum = array_map(function($string) use($i) {return substr($string, $i, 3);}, $currentLine);
      $output .= findNum($slicedNum);
    }
  }
  return $output;
}