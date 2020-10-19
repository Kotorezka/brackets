module.exports = function check(str, bracketsConfig) {
  let startEnd = [];

        bracketsConfig.forEach(element => {
            startEnd.push(element.join(""));
        });

        for(let i = 0; i <= startEnd.length; i++) {
          startEnd.forEach(item => {
              while(str.indexOf(item) != -1) {
                str = str.replace(item, "");
              }
          })
          if(str.length == 0) return true;
        }
        return false;
}
