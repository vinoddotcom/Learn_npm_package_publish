function printSmileyEmoji(name: string): void {
    const emoji = [
      '  *****  ',
      ' *     * ',
      '* o   o *',
      '*   ^   *',
      ' * \\_/ * ',
      '  *****  '
    ];
  
    for (let i = 0; i < emoji.length; i++) {
      console.log(emoji[i]);
    }
    console.log("hello, " + name);
  }
  
  export default printSmileyEmoji