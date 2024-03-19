import axios from "axios"

const instance= axios.create({
    baseURL: "https://difficult-crow-baseball-cap.cyclic.app/"
})

export default instance