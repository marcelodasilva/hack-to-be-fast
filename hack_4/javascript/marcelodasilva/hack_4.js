
function generate_list(start,end) {
  const list = [];

  for(let i = 0; i+start <= end; ++i) {
    list[i]= i+start;
  }
  return list;

}

function check_palindrome(number){
let reversed = 0,original = number, dig=0;

while (number > 0)
    {
      dig = number % 10;    
      reversed = reversed * 10 + dig;
      number = Math.floor(number / 10);
    }

    return original == reversed;

}

const list = generate_list(300,350);

list.forEach(function(item) {
  console.log(item+ " is palindrom? "+ check_palindrome(item));
});
