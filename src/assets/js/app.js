$(document).ready(function (){
  var ExampleApplicationFactory = React.createFactory(Header);
  ReactDOM.render(ExampleApplicationFactory(), document.getElementById('app'))
})
