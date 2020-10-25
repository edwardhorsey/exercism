<?php

function pigLatin(string $word) :string
{
        preg_match('/yt|xr|a|e|i|o|(?<!q)u/', $word, $matches);
        $firstVowel = strcspn($word, $matches[0]);
        return substr($word, $firstVowel) . substr($word, 0, $firstVowel) . 'ay';
}

function translate(string $input) :string
{
    return array_reduce(
        explode(' ', $input), function ($acc, $word) {
            return $acc ? $acc . ' ' . pigLatin($word) : $acc . pigLatin($word);
        }, ''
    );
}