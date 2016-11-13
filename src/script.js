
$(document).ready(function () {

  var result = 0;
  var ending = ['+', '-', '*', '/', '.'];
  //  var counter = 0;

  $(document).keydown(function (e) {
    console.log(e.keyCode);
    if (e.keyCode == 96) {
      $('#0').click();
    }
    if (e.keyCode == 97) {
      $('#1').click();
    }
    if (e.keyCode == 98) {
      $('#2').click();
    }
    if (e.keyCode == 99) {
      $('#3').click();
    }
    if (e.keyCode == 100) {
      $('#4').click();
    }
    if (e.keyCode == 101) {
      $('#5').click();
    }
    if (e.keyCode == 102) {
      $('#6').click();
    }
    if (e.keyCode == 103) {
      $('#7').click();
    }
    if (e.keyCode == 104) {
      $('#8').click();
    }
    if (e.keyCode == 105) {
      $('#9').click();
    }
    if (e.keyCode == 106) {
      $('#multiply').click();
    }
    if (e.keyCode == 107) {
      $('#plus').click();
    }
    if (e.keyCode == 109) {
      $('#minus').click();
    }
    if (e.keyCode == 110) {
      $('#dot').click();
    }
    if (e.keyCode == 111) {
      e.preventDefault();
      $('#divide').click();
    }
    if (e.keyCode == 13) {
      $('#equal').click();
    }
    if (e.keyCode == 46) {
      $('#ac').click();
    }
    if (e.keyCode == 8) {
      e.preventDefault(); /*to stop the page from going to the previously visited page if the user presses Backspace*/
      /*http://stackoverflow.com/questions/11112127/prevent-backspace-from-navigating-back-with-jquery-like-googles-homepage*/
      /*note that you can't prevent default action if you use    keyup   instead of keydown, because the keyup event is fired only after the default action for the key has been executed*/
      $('#ce').click();
    }
    if(e.keyCode == 35) {
      e.preventDefault();
      $('#root').click();
    }
  });

  /*
  From:
  http://stackoverflow.com/questions/9146651/trigger-an-event-on-click-and-enter
  Example of alternative instead of separating the keyboard from the click events like i did above :
  $(function(){
  $('#searchButton').on('keypress click', function(e){
    var search = $('#usersSearch').val();
    if (e.which === 13 || e.type === 'click') {
      $.post('../searchusers.php', {search: search}, function (response) {
        $('#userSearchResultsTable').html(response);
      });
    }
  });
});
  */

  $("#0").on('click', function () {
    $('#span').append(0);
    $('#hidden').append(0);
  });
  $("#1").on('click', function () {
    $('#span').append(1);
    $('#hidden').append(1);
  });
  $("#2").on('click', function () {
    $('#span').append(2);
    $('#hidden').append(2);
  });
  $("#3").on('click', function () {
    $('#span').append(3);
    $('#hidden').append('3');
  });
  $("#4").on('click', function () {
    $('#span').append(4);
    $('#hidden').append(4);
  });
  $("#5").on('click', function () {
    $('#span').append(5);
    $('#hidden').append(5);
  });
  $("#6").on('click', function () {
    $('#span').append(6);
    $('#hidden').append(6);
  });
  $("#7").on('click', function () {
    $('#span').append(7);
    $('#hidden').append(7);
  });
  $("#8").on('click', function () {
    $('#span').append(8);
    $('#hidden').append(8);
  });
  $("#9").on('click', function () {
    $('#span').append(9);
    $('#hidden').append(9);
  });

  $("#ac").on('click', function () {
    $('#span').empty();
    $('#hidden').empty();
    result = 0;
  });

  $("#ce").on('click', function () {
    var arr = $('#hidden').text().split('');
    var arr2 = $('#span').text().split('');
    //for (var j = 0; j <= ending.length - 1; j++) {
    //if(arr2[arr2.length-1]!==ending[j])//this isn't working because it's checking for the j index one at a time and removing elements from the end after every time it doesn't find a match?
    while (arr2.length >= 1 && (arr2[arr2.length - 1] !== "+" && arr2[arr2.length - 1] !== "-" && arr2[arr2.length - 1] !== "*" && arr2[arr2.length - 1] !== "/")) {
      arr2.pop();
      arr.pop();
    }
    //}
    var x = arr.join("");
    var y = arr2.join("");
    $('#hidden').text(x);
    $('#span').text(y);
    /*important ; you need to assign arr.join('') to a variable and use that to display the result in #hidden or else it will still return a joined string with numbers separated by comas*/
  });

  $("#dot").on('click', function () {
    var arr2 = $('#span').text();
    var counter = 0;

    function count() {
      for (var i = 0; i <= arr2.length - 1; i++) {
        if (arr2[i] === '.') {
          counter++;
          console.log(counter);
        }
      }

      /*as long as there are no more than 1 dots:*/
      if (counter >= 0 && counter < 2) {
        /* if there is no dot and nothing has been inputed at all OR if the last element is an operator (+,-,/,*) */
        if (arr2.indexOf('.') === -1 && arr2.length === 0 || arr2[arr2.length - 1] === "+" || arr2[arr2.length - 1] === "-" || arr2[arr2.length - 1] === "*" || arr2[arr2.length - 1] === "/") {
          $('#hidden').append('0.');
          $('#span').append('0.');
          //          count = 0;
          counter++;
          /*else if there have been some elements inputed in hte field and there is no dot*/
        } else if (arr2.indexOf('.') === -1) {
          $('#hidden').append('.');
          $('#span').append('.');
          //          count = 0;
          counter++;
          /*else if there is ONE dot AND an operator has been used AFTER the dot*/
        } else if ((counter === 1 && arr2.indexOf('+') !== -1 && arr2.indexOf('.') < arr2.indexOf('+')) || (counter === 1 && arr2.indexOf('-') !== -1 && arr2.indexOf('.') < arr2.indexOf('-')) || (counter === 1 && arr2.indexOf('*') !== -1 && arr2.indexOf('.') < arr2.indexOf('*')) || (counter === 1 && arr2.indexOf('/') !== -1 && arr2.indexOf('.') < arr2.indexOf('/'))) {
          //          console.log('wtf ?')
          $('#hidden').append('.');
          $('#span').append('.');
          counter++;
        }
        console.log(true);
        console.log(counter);
      } else {
        console.log(false);
        return false;
      }
    }
    count();

  });

  $("#root").on('click', function () {
    var arr = $('#hidden').text();
    var arr2 = $('#span').text();

    var sq1 = $('#hidden').text().slice(0, -1);

    if (((arr2[arr2.length - 1] !== '+') && (arr2[arr2.length - 1] !== '-') && (arr2[arr2.length - 1] !== '*') && (arr2[arr2.length - 1] !== '/') && (arr2[arr2.length - 1] !== '.')) && ((eval(arr2) < 0) === true)) {
      $('#hidden').text("Invalid Input");
      $('#span').text("Invalid Input");
    } else if (((arr2[arr2.length - 1] === '+') || (arr2[arr2.length - 1] === '-') || (arr2[arr2.length - 1] === '*') || (arr2[arr2.length - 1] === '/') || (arr2[arr2.length - 1] === '.'))) {
      var sq = Math.sqrt(eval($('#hidden').text().slice(0, -1)));
      $('#hidden').empty();
      $('#hidden').append(sq);
      $('#span').empty();
      $('#span').append(sq);
    } else {
      var sqrt = Math.sqrt(eval($('#hidden').text()));
      $('#hidden').empty();
      $('#hidden').append(sqrt);
      $('#span').empty();
      $('#span').append(sqrt);
    }
  });

  $("#divide").on('click', function () {
    var check = $('#span').text().split("");
    var arr = $('#hidden').text().split("");
    var arr2 = $('#span').text().split("");
    if (check.length > 0) {
      for (var i = 0; i <= ending.length - 1; i++) {
        if (arr[arr.length - 1] === ending[i] && arr[arr.length - 1] !== '/') {

          if (arr[arr.length - 2] !== ')') {
            arr.pop();
            arr.push(')');
            arr.push(')');
            arr.unshift('(');
          }
          arr.pop();
          arr.push('/');
          $('#hidden').text(arr.join(''));
          arr2.pop();
          arr2.push('/');
          $('#span').text(arr2.join(''));
          result = eval($('#hidden').text());
        }
      }
      result = eval($('#hidden').text());
      if (arr[arr.length - 1] !== "/") {
        if (arr[arr.length - 2] !== ')') {
          $('#hidden').prepend('(');
          $('#hidden').append(')');
        }
        $('#hidden').append('/');
        $('#span').text(result).append('/');
      }
    }
  });

  $("#multiply").on('click', function () {
    var check = $('#span').text().split("");
    var arr = $('#hidden').text().split("");
    var arr2 = $('#span').text().split("");
    if (check.length > 0) {
      for (var i = 0; i <= ending.length - 1; i++) {
        if (arr[arr.length - 1] === ending[i] && arr[arr.length - 1] !== '*') {

          if (arr[arr.length - 2] !== ')') {
            console.log('wtf');
            console.log(arr[arr.length - 2]);
            arr.pop();
            arr.push(')');
            arr.push(')');
            arr.unshift('(');
          }
          arr.pop();
          arr.push('*');
          $('#hidden').text(arr.join(''));
          arr2.pop();
          arr2.push('*');
          $('#span').text(arr2.join(''));
          result = eval($('#hidden').text());
        }
      }
      result = eval($('#hidden').text());
      if (arr[arr.length - 1] !== "*") {
        if (arr[arr.length - 2] !== ')') {
          $('#hidden').prepend('(');
          $('#hidden').append(')');
        }
        $('#hidden').append('*');
        $('#span').text(result).append('*');
      }
    }
  });

  $("#minus").on('click', function () {
    var check = $('#span').text().split("");
    var arr = $('#hidden').text().split("");
    var arr2 = $('#span').text().split("");
    if (check.length > 0) {
      for (var i = 0; i <= ending.length - 1; i++) {
        if (arr[arr.length - 1] === ending[i] && arr[arr.length - 1] !== '-') {
          arr.pop();
          arr.push('-');
          $('#hidden').text(arr.join(''));
          arr2.pop();
          arr2.push('-');
          $('#span').text(arr2.join(''));
          result = eval($('#hidden').text());
        }
      }
      result = eval($('#hidden').text());
      if (arr[arr.length - 1] !== "-") {
        $('#hidden').append('-');
        $('#span').text(result).append('-');
      }
    }
  });

  $("#plus").on('click', function () {
    var check = $('#span').text().split("");
    var arr = $('#hidden').text().split("");
    var arr2 = $('#span').text().split("");
    if (check.length > 0) {
      for (var i = 0; i <= ending.length - 1; i++) {
        if (arr[arr.length - 1] === ending[i] && arr[arr.length - 1] !== '+') {
          arr.pop();
          arr.push('+');
          $('#hidden').text(arr.join(''));
          arr2.pop();
          arr2.push('+');
          $('#span').text(arr2.join(''));
          result = eval($('#hidden').text());
        }
      }
      result = eval($('#hidden').text());
      if (arr[arr.length - 1] !== "+") {
        //$('#span').text('');
        $('#hidden').append('+');
        $('#span').text(result).append('+');
      }
    }
  });

  $("#equal").on('click', function () {
    var arr = $('#hidden').text().split('');
    for (var i = 0; i <= ending.length - 1; i++) {
      if (arr[arr.length - 1] === ending[i]) {
        arr.pop();
        $('#hidden').text(arr.join(''));
      }
    }
    result = eval($('#hidden').text());
    $('#span').text(result);
    $('#hidden').text(result);
    result = 0;
  });

  /*to force the #display to show the last inputed numbers*/
  $('.key').on('click', function () {
    $('#display').scrollLeft(10e10);
  });
});
  //to make the buttons not stay focused after click on mobile
  $('.key').on('click',function() {
    setTimeout(function(){$('.key').blur(); },200);
  });
