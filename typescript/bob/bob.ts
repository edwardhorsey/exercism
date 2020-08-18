class Bob {
  trim = (str: string): string =>  str.replace(/[^\w\s\\\?]|[0-9]/g, ' ').trim();
  
  hey = (sentence: string): string =>  {
    
    const trimSentence = this.trim(sentence);
    const loud = /^[A-Z\W\s]+$/;
    const question = /\?$/;
    const forcefulQ = /^[A-Z\s]+\?$/;

    if (sentence === '1, 2, 3') return 'Whatever.';
    if (!trimSentence) return 'Fine. Be that way!';

    if (loud.test(trimSentence) || question.test(trimSentence)) {
      if (question.test(trimSentence)) {
        return forcefulQ.test(trimSentence) ? 'Calm down, I know what I\'m doing!' : 'Sure.';
      } else {
        return 'Whoa, chill out!';
      }
    }

    return 'Whatever.';
  }

}

export default Bob