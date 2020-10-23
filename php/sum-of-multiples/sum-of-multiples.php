<?php

function sumOfMultiples(int $target, array $multiples): int
{
    $nums = (array) [];
    for ($i=0; $i<$target; $i++) {
        foreach ($multiples as $num) {
            if ($num > 0 && $i % $num === 0 && !in_array($i, $nums)) {
                array_push($nums, $i);
            }
        }
    }
    return array_sum($nums);
}