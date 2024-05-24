  switch (process.env.NODE_ENV) {
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
