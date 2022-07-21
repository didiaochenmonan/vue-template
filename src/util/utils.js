export const add = (x,y)=>{
    return x+y
}

export const minus = (x,y)=>{
    return x-y
}
export const getString=() =>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('[ hello word ] >', 'hello word')
        resolve('hello word');
      }, 2000);
    });
  }