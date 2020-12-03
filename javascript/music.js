for(var i=0; i<8; i++){document.querySelectorAll(".key")[i].addEventListener("click", mus)}
document.addEventListener("keydown", muskey);
function mus(){
  var x=this.innerHTML;
  switch (x.trim()) {
    case "Sa":
      // alert(x+" is clicked");
    var y=new Audio("Sound/Sa.m4a");
      y.play();
      break;
      case "Re":
        // alert(x+" is clicked");
      var y=new Audio("Sound/Re.m4a");
        y.play();
        break;
        case "Ga":
          // alert(x+" is clicked");
        var y=new Audio("Sound/Ga.m4a");
          y.play();
          break;
          case "Ma":
            // alert(x+" is clicked");
          var y=new Audio("Sound/Ma.m4a");
            y.play();
            break;
            case "Pa":
              // alert(x+" is clicked");
            var y=new Audio("Sound/Pa.m4a");
              y.play();
              break;
              case "Dha":
                // alert(x+" is clicked");
              var y=new Audio("Sound/Dha.m4a");
                y.play();
                break;
                case "Ni":
                  // alert(x+" is clicked");
                var y=new Audio("Sound/Ni.m4a");
                  y.play();
                  break;
                  case "Sa1":
                    // alert(x+" is clicked");
                  var y=new Audio("Sound/Sa1.m4a");
                    y.play();
                    break;
                default:

  }

  }
  function muskey(){
    var x=event.keyCode;
    // alert(x);
    switch (x) {
      case 65:
        // alert(x+" is clicked");
      var y=new Audio("Sound/Sa.m4a");
        y.play();
        break;
        case 83:
          // alert(x+" is clicked");
        var y=new Audio("Sound/Re.m4a");
          y.play();
          break;
          case 68:
            // alert(x+" is clicked");
          var y=new Audio("Sound/Ga.m4a");
            y.play();
            break;
            case 70:
              // alert(x+" is clicked");
            var y=new Audio("Sound/Ma.m4a");
              y.play();
              break;
              case 71:
                // alert(x+" is clicked");
              var y=new Audio("Sound/Pa.m4a");
                y.play();
                break;
                case 74:
                  // alert(x+" is clicked");
                var y=new Audio("Sound/Dha.m4a");
                  y.play();
                  break;
                  case 75:
                    // alert(x+" is clicked");
                  var y=new Audio("Sound/Ni.m4a");
                    y.play();
                    break;
                    case 76:
                      // alert(x+" is clicked");
                    var y=new Audio("Sound/Sa1.m4a");
                      y.play();
                      break;
                  default:

    }

    }
