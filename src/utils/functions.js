
export const setData = (key,data)=> {
  return localStorage.setItem(key, JSON.stringify(data))
}

export const getData = (key) => JSON.parse(localStorage.getItem(key))


export const validateFormInput = (item) => {
  if(typeof item === 'object') {
    for(const key in item) {
      !item[key] &&  alert('Please input all the field')
      return
    }
  }
  else if( typeof item === 'string') {
    !item && alert('Please input the field')
  }
}