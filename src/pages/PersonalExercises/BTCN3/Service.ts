class Service{
    static async getMemeList () {
        const url = 'https://api.imgflip.com/get_memes';
        return fetch(url, {method: 'GET'}).then((response):any=>{
            if(response.ok){
                return response.json().then(response=>{

                    return {data: response?.data || []};
                })
            }
            return response.json().then(error=>({error}))
        })
    }
}

export default Service;