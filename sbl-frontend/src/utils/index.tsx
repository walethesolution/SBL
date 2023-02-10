export function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export function createData(
  id: number,
  firstName: string,
  lastName: string,
  position: string,
  height: string,
  weight: string
) {
  return {
    id,
    firstName,
    lastName,
    position,
    height,
    weight,
    history: [
      {
        dob: "",
        nickName: "",
        countryOfOrigin: "",
        experience: null || 0,
      },
    ],
  };
}
