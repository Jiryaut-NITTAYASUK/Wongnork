import axios from "axios";

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer jhbf6N9XuifejsA3BMIrfRhPMVFxJEl0_uoFRFReozfZNPc5ZlRkqAPto6cYU0pMwuOQkc-g65PCCpct9Vy5-8r6PWXmFcs8lcxGVwWDiIHywVCqMM_x3XrKYF4KYXYx"
    },
});