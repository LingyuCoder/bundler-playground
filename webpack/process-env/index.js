switch ("production") {
  case "wtf":
    console.log(10);
    break;
  case "none":
    console.log(4);
    break;
  case "development":
    console.log(3); 
    break;
  case "production": 
    if (aaa === 1) {
      console.log(1);
      break;
    }
  default:
      console.log(2);
}