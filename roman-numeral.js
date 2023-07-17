

    function convertTime(time) {
        let hours = parseInt(time.slice(0, 2));
        let minutes = time.slice(2, 5);
        let period = time.slice(5);
      
        if (period === "PM" && hours !== 12) {
          hours += 12;
        }
      
        if (period === "AM" && hours === 12) {
          hours = 0;
        }
      
        return `${hours}:${minutes}`;
      }
      
      console.log(convertTime("0230 PM")); 

// let arr = [7, 69, 2, 221, 8974, 45];
// let sumOne, sumTwo, sumThree, sumFour, sumFive;
// sumOne = arr[0] + arr[1] + arr[2] + arr[3];
// sumTwo = arr[1] + arr[2] + arr[3] + arr[4];
// sumThree = arr[2] + arr[3] + arr[4] + arr[0];
// sumFour = arr[3] + arr[4] + arr[0] + arr[1];
// sumFive = arr[4] + arr[0] + arr[1] + arr[2];
// let newTruth = sumOne > sumTwo > sumThree > sumFour > sumFive;
// console.log(sumOne, sumTwo, sumThree, sumFour, sumFive);
// console.log(newTruth);
// let maximumValue = Math.max(sumOne, sumTwo, sumThree, sumFour, sumFive);
// let minimumValue = Math.min(sumOne, sumTwo, sumThree, sumFour, sumFive);
// console.log(maximumValue, minimumValue);
