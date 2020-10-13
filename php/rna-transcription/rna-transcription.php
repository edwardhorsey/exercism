<?php

function toRna($strand) {
  $nucleotides = (object) [
    'G' => 'C',
    'C' => 'G',
    'T' => 'A',
    'A' => 'U'
  ];
  return array_reduce(str_split($strand), function($acc, $dna) use ($nucleotides) {
    return $acc . $nucleotides->$dna;
  }, '');
};