<?php

function format($string)
{
    return strtolower(preg_replace('/[\W]/', '', $string));
}

function findSquare($total)
{
    $a = sqrt($total);
    if (intval($a)==$a) {
        return [$a, $a];
    } else {
        $b=floor($a);
        $a=$b+1;
        return $a*$b < $total? findSquare($total+1) : [$a, $b];
    }
}

function crypto_square(string $input): string
{
    $formatted = format($input);
    $length = strlen($formatted);
    [$columns, $rows] = findSquare($length);
    $output = array_fill(0, $columns, '');
    $counter = 0;
    $index = 0;
    while ($counter < ($columns * $rows)) {
        if ($index >= $columns) {
            $index = 0;
        }
        $output[$index] .= $counter > $length-1 ? " ": $formatted[$counter];
        $counter++;
        $index++;
    }
    return implode(' ', $output);
}