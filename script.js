const parseCode = (str) => {
	 const [firstName, lastName, id] = str.split(/0+/);
  
  return {
    firstName,
    lastName,
    id
  };
  // your code here
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
