function solution() {
  var my_string = "people";
  const uniqueStr = [...new Set(my_string)].join("");
  return console.log(uniqueStr);
}

solution();
