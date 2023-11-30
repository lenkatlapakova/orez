const fillcut = () => {
    const str = prompt('Zadejte řetězec:');
    const len = parseInt(prompt('Zadejte délku:'), 10);
  
    if (!isNaN(len)) {
      if (str.length === len) {
        alert(str);
      } else if (str.length < len) {
        const dotsToAdd = len - str.length;
        const dots = '.'.repeat(dotsToAdd);
        alert(dots + str);
      } else {
        alert(str.slice(-len));
      }
    } else {
      alert('Neplatná délka. Zadejte kladné celé číslo.');
    }
  };
  

  fillcut();