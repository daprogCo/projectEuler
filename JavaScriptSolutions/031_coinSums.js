const coinSums = n => {
  let count = 0;
  for (let p200 = 0; p200 <= n; p200 += 200) {
    rest200 = n - p200;
    if (rest200 == 0) {
      count++;
      break;
    }
    for (let p100 = 0; p100 <= rest200; p100 += 100) {
      rest100 = rest200 - p100;
      if (rest100 == 0) {
        count++;
        break;
      }
      for (let p50 = 0; p50 <= rest100; p50 += 50) {
        rest50 = rest100 - p50;
        if (rest50 == 0) {
          count++;
          break;
        }
        for (let p20 = 0; p20 <= rest50; p20 += 20) {
          rest20 = rest50 - p20;
          if (rest20 == 0) {
            count++;
            break;
          }
          for (let p10 = 0; p10 <= rest20; p10 += 10) {
            rest10 = rest20 - p10;
            if (rest10 == 0) {
              count++;
              break;
            }
            for (let p5 = 0; p5 <= rest10; p5 += 5) {
              rest5 = rest10 - p5;
              if (rest5 == 0) {
                count++;
                break;
              }
              for (let p2 = 0; p2 <= rest5; p2 += 2) {
                rest2 = rest5 - p2;
                if (rest2 == 0) {
                  count++;
                  break;
                }
                for (let p1 = 0; p1 <= rest2; p1 += 1) {
                  rest1 = rest2 - p1;
                  if (rest1 == 0) {
                    count++;
                    break;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return count;
}
