<?php

function gcd($a, $b) { 
  if ($a == 0 || $b == 0) {
    return 0; 
  }
  if ($a == $b) {
    return $a; // base case
  }
  return $a > $b ? gcd($a - $b, $b) : gcd($a, $b - $a); 
}
  
function findModMultiInverse($a, $b) {
  $n = 2;
  while ($n * $a % $b !== 1) {
    $n++;
  }
  return $n;
}
  
function format($string) {
  return strtolower(preg_replace('/[\W]/', '', $string));
}

function encode($string, $a, $b) {
  if (gcd($a, 26) !== 1) {
    throw new Exception('.');
  }
  $alphabet = range('a', 'z');
  $output = '';
  foreach(str_split(format($string)) as $key=>$letter){
    if ($key > 0 && $key % 5 === 0) {
      $output .= ' ';
    }
    if (is_numeric($letter)) {
      $output .= $letter;
    } else {
      $indexOfLetter = array_search($letter, $alphabet);
      $answer = ($a*$indexOfLetter + $b) % 26;
      $output .= $alphabet[$answer];
    }
  }
return $output;
}

function decode($string, $a, $b) {
  if (gcd($a, 26) !== 1) {
    throw new Exception('.');
  }
  $alphabet = range('a', 'z');
  return array_reduce(str_split(format($string)), function($acc, $letter) use ($alphabet, $a, $b) {
    if (is_numeric($letter)) {
      return $acc .= $letter;
    } else {
      $indexOfLetter = array_search($letter, $alphabet);
      $answer = (findModMultiInverse($a, 26) * ($indexOfLetter - $b)) % 26;
      return $acc .= $answer < 0 ? $alphabet[$answer + 26] : $alphabet[$answer];
    }
  }, '');
}