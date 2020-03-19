import { getNames, getName, getNameList } from "country-list";

export default async function AllCountry() {
  let countries = await getNameList();

  //console.log(countries);

  let data = [];

  for (let c in countries) {
    //console.log(`${c}  : ${countries[c]}`);

    data.push({
      value: countries[c],
      label: c
    });
  }

  return data;
}
