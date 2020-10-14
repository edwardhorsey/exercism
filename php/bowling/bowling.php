<?php

class Game {

  private $_score = 0;
  private $frames = [];

  public function roll($pins) {
    if ($pins < 0 || $pins > 10) {
      throw new Exception('.');
    }
    $totalFrames = count($this->frames);
    if ($totalFrames && (count($this->frames[$totalFrames-1]) === 1 && $this->frames[$totalFrames-1][0] !== 10)) {
      # Frame is INCOMPLETE and not a strike
      if ($this->frames[$totalFrames-1][0] + $pins > 10) {
        throw new Exception('.');
      }
      array_push($this->frames[$totalFrames-1], $pins);
    } else {
      # Create new frame
      array_push($this->frames, [$pins]);
    }
    return $this->frames;
  }

  public function score() {
    $totalFrames = count($this->frames);
    if (
      $totalFrames < 10
      || ($totalFrames > 10 && array_sum($this->frames[9]) < 10)
      || ($totalFrames === 10 && array_sum($this->frames[9]) >= 10)
      || ($totalFrames === 11 && $this->frames[$totalFrames-1][0] === 10 && $this->frames[$totalFrames-2][0] === 10)
    ) {
      throw new Exception('.');
    }
    foreach($this->frames as $key=>$frame) {
      if (count($frame) === 2 && array_sum($frame) === 10 && $key < 9) {
        # Apply bonus for SPARE
        $this->_score += $this->frames[$key+1][0];
      } else if ($frame[0] === 10 && $key < 9) {
        # Apply bonus for STRIKE
        $this->_score += $this->frames[$key+1][0];
        if (count($this->frames[$key+1])>1) {
          $this->_score += $this->frames[$key+1][1];
        } else {
          $this->_score += $this->frames[$key+2][0];
        }
      }
      # Adding frame score to total as normal
      $this->_score += array_sum($frame);
    };
    return $this->_score;
  }
}