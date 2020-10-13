<?php

function isArmstrongNumber($number) {
  $strarray = str_split($number);
  $length = strlen($number);
  $armstrongTotal = array_reduce($strarray, function($acc, $num) use ($length) {
    return $acc + $num ** $length;
  }, 0);
  return $armstrongTotal === $number;
}