<?php

function distance(string $strandA, string $strandB) : int
{   
    if (strlen($strandA) !== strlen($strandB)) {
        throw new InvalidArgumentException('DNA strands must be of equal length.');
    } elseif ($strandA === $strandB) {
        return 0;
    } else {
        $diff = 0;
        for ($i=0; $i<strlen($strandA); $i++) {
            if ($strandA[$i] !== $strandB[$i]) {
                $diff++;
            }
        }
        return $diff;
    }
}
