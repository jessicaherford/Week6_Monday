$.ajax({
  url: 'https://api.myjson.com/bins/20gec',
  type: 'GET',
  data: {
    format: 'json'
  },
  error: function(){
    alert('An error has occurred');
  },
  success: function(results){
    console.log(results.data);
    //console.log(results.data[1].name);
    //var nameState = results.data[1].name;
    //$('body').append("<h1>"+nameState+"</h1");

    var states = results.data;
    for (i = 0; i< states.length; i++){
      console.log(states[i].name, states[i].capital, states[i].enteredUnion);
      var name = states[i].name;
      var cap = states[i].capital;
      var entered = states[i].enteredUnion + '.';
      var pop = states[i].population;
      var flag = states[i].symbols[1].flag;
      var bird = states[i].symbols[0].bird;
      var flower = states[i].symbols[0].flower;
      var tree = states[i].symbols[0].tree + '.';
     

      $('body').append("<img src = " +flag+ ">");
      $('body').append("<p>" +cap+ " is the capital of " +name+ ", a state whose population is " +pop+ ", that entered the union in " +entered+ "</p>");
      $('body').append("<p>" +bird+ 'is the state bird, the flower is the ' +flower+ ', and the state tree is the ' +tree+ "</p>");
     

  }

}
});



