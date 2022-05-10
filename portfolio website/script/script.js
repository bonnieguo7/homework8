const TypeWriter = function(txtElem, words) {
    this.txtElem = txtElem;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.type();
}

TypeWriter.prototype.type = function() {
    const current = 0;
    const word = this.words;
    this.txt = word.substring(0, this.txt.length + 1)
    console.log(this.txt);
    this.txtElem.innerHTML = `<span class="txt">${this.txt}</span>`;
    setTimeout(() => this.type(), 200)
}

document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElem = document.querySelector('.txt-type');
    const words = txtElem.getAttribute('words');
    new TypeWriter(txtElem, words);

}