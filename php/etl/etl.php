<?php

function transform($data)
{
    $new = (array) [];
    foreach($data as $key=>$collection) {
        foreach($collection as $letter) {
            $new[strtolower($letter)] = $key;
        }
    }
    return $new;
}