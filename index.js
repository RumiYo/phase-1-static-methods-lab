class Formatter {
  //add static methods here
  static capitalize(text){
    let words = text.split(' ');
    let length = words.length;
      
   if (length > 1){
    return text.toUpperCase();
   }else{
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }
}

  static sanitize(text){
    return text.replace(/[^a-zA-Z0-9\- ']/g, '')
  }

  static titleize(text){ 
    let words = text.split(' ');
    let titleizeWords = [];
    const excludeWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    for (const item of words){
      let word = item.toLowerCase();
      if(!excludeWords.includes(word)){
        titleizeWords.push(word.charAt(0).toUpperCase()+word.slice(1));
      }else{
        titleizeWords.push(word);
      }
    }
    titleizeWords[0] =  titleizeWords[0].charAt(0).toUpperCase()+ titleizeWords[0].slice(1);
    let titleizeText = titleizeWords.join(' ');
    return titleizeText;
  }
}