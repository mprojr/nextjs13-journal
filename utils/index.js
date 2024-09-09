export const gradients = {
  tealCoral: [
    '#e0f7fa',  // Light Teal
    '#b2ebf2',  // Pale Teal
    '#80deea',  // Soft Teal
    '#4dd0e1',  // Teal
    '#26c6da',  // Bright Teal
    '#00acc1',  // Strong Teal
    '#00838f',  // Deep Teal
    '#f48fb1',  // Pale Coral
    '#f06292',  // Soft Coral
    '#ec407a',  // Coral
  ],
  // Other existing gradients
  indigo: ['#dcd6ff', '#b8adff', '#9285ff', '#7766ff', '#4833ff', '#3525db', '#261ab1', '#1a1093', '#10097a'],
  green: ['#dcfdc3', '#affc9d', '#7cf86c', '#4bf246', '#0cea1c', '#0dc928', '#0ca82f', '#038731', '#047031'],
  blue: ['#ccfffa', '#9afefe', '#66f1fc', '#41dfa', '#07c2f7', '#0497d4', '#0171b1', '#02518e', '#003a76'],
  yellow: ['#fffbdb', '#fff0b8', '#ffe495', '#ffd97b', '#ffc84f', '#dba339', '#b78127', '#936118', '#7a4b10'],
  pink: ['#ffd8f2', '#ffb1ea', '#ff8aea', '#ff6df1', '#ff3dfe', '#cd2ddb', '#9d1fb7', '#731493', '#540b7a'],
};


export const baseRating = {
  "0": 2, "1": 5, "2": 4, "3": 1, "4": 3,
  "5": 2, "6": 4, "7": 1, "8": 5, "9": 3,
  "10": 2, "11": 4, "12": 1, "13": 3, "14": 5,
  "15": 2, "16": 4, "17": 1, "18": 3, "19": 5,
  "20": 2, "21": 4, "22": 1, "23": 3, "24": 5,
  "25": 2, "26": 4, "27": 2, "28": 5, "29": 2,
  "30": 4, "31": 1, "32": 3, "33": 5, "34": 2,
  "35": 4, "36": 1, "37": 5, "38": 3, "39": 2,
  "40": 5, "41": 4, "42": 1, "43": 3,
}

const Data = {
      2: 4,
      4: 4,
      5: 5,
      6: 2,
      8: 4,
      11: 3,
      14: 5,
      15: 2,
      16: 4,
      17: 1,
      18: 3,
      19: 5,
      20: 2,
      21: 4,
      22: 1,
      23: 3,
      24: 5,
}

function createMonthData(dataObject) {
  const monthData = {};
  Object.keys(dataObject).forEach((day) => {
    monthData[day] = dataObject[day]; // Map days from dataObject
  });
  return monthData;
}

export const demoData = {
  2024: {
    0:createMonthData(Data),
    1:createMonthData(Data),
    2:createMonthData(Data),
    3:createMonthData(Data),
    4:createMonthData(Data),
    5:createMonthData(Data),
    6:createMonthData(Data),
    7:createMonthData(Data),
    8:createMonthData(Data),
    9:createMonthData(Data),
    10:createMonthData(Data),
    11:createMonthData(Data),
  },
  2025: {
    
    0:createMonthData(Data),
    1:createMonthData(Data),
    2:createMonthData(Data),
    3:createMonthData(Data),
    4:createMonthData(Data),
    5:createMonthData(Data),
    6:createMonthData(Data),
    7:createMonthData(Data),
    8:createMonthData(Data),
    9:createMonthData(Data),
    10:createMonthData(Data),
    11:createMonthData(Data),
  },
  2026: {
    0:createMonthData(Data),
    1:createMonthData(Data),
    2:createMonthData(Data),
    3:createMonthData(Data),
    4:createMonthData(Data),
    5:createMonthData(Data),
    6:createMonthData(Data),
    7:createMonthData(Data),
    8:createMonthData(Data),
    9:createMonthData(Data),
    10:createMonthData(Data),
    11:createMonthData(Data),
  }
};
