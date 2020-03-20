export const formatNumber = (num: number) =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

export const formatDate = (dateString: Date) => {
  const dt = new Date(dateString);
  return `${(dt.getMonth() + 1).toString().padStart(2, '0')}/${dt
    .getDate()
    .toString()
    .padStart(2, '0')}/${dt
    .getFullYear()
    .toString()
    .padStart(4, '0')} ${dt
    .getHours()
    .toString()
    .padStart(2, '0')}:${dt
    .getMinutes()
    .toString()
    .padStart(2, '0')}:${dt
    .getSeconds()
    .toString()
    .padStart(2, '0')}`;
};

export interface ITimeSeriesConfirmed {
  id: string;
  value: number;
}

export const csvJSON = (csv: string):ITimeSeriesConfirmed[] => {
  let lines = csv.split("\n");
  let result: ITimeSeriesConfirmed[] = [];

  let headers = lines[0].split(",");

  for (let i = 1; i < lines.length; i++) {
    let obj: ITimeSeriesConfirmed = {id: '', value: 0};
    let currentLine = lines[i].split(",");

    for (let j = 0; j < headers.length; j++) {
      if (headers[j] === "Country/Region") {
        obj.id = currentLine[j];
      } else if (j === headers.length - 1) {
        obj.value = Number(currentLine[j]);
      }
    }
    const existingCountry = result.find(item => item.id === obj.id);
    if(existingCountry) {
      existingCountry.value += obj.value;
    } else {
      result.push(obj);
    }
  }

  return result; //JavaScript object
  // return JSON.stringify(result); //JSON
};
