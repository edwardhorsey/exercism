<?php

function __gcd($a, $b) { 
  if ($a == 0 || $b == 0) {
    return 0; 
  }
  if ($a == $b) {
    return $a; // base case
  }
  if ($a > $b) {
    return __gcd($a - $b, $b); 
  }
  return __gcd($a, $b - $a); 
} 

function coprime($a, $b) { 
  if (__gcd($a, $b) == 1) {
    return TRUE;
  } else {
    return FALSE;
  }
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
  if (!coprime($a, 26)) {
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
  if (!coprime($a, 26)) {
    throw new Exception('.');
  }
  $alphabet = range('a', 'z');
  $output = '';
  foreach(str_split(format($string)) as $letter){
    if (is_numeric($letter) || $letter === " ") {
      $output .= $letter;
    } else {
      $indexOfLetter = array_search($letter, $alphabet);
      $answer = (findModMultiInverse($a, 26) * ($indexOfLetter - $b)) % 26;
      if ($answer < 0) {
        $answer += 26;
      }
      $output .= $alphabet[$answer];
    }
  }
  return $output;
}