import data from './database'

const delay = (time) => new Promise(resolve => setTimeout(resolve, time));

export default () => delay(2000).then(() => (data))
