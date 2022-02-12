module.exports.getDate = function(){
  let today = new Date();
  let options = {
    weekday: "long",
    day : "numeric",
    month: "long"
  };
  // It is a function of the class Date and getDay is also the function of the class Date : value -> 0-6 , 0 -> sunday
  // We have to pass the attributes as an option : in this format toLocaleDateString function will return the result
  // It will detect the today's weekday month and dayofthismonth
  return today.toLocaleDateString("en-US", options);

}

module.exports.getDay = function (){
  let today = new Date();
  let options = {
    weekday: "long"
  };
  return today.toLocaleDateString("en-US", options);
};
