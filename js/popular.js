let pupular=(name, artist)=>{
    return `<dl>${name} by ${artist}<dl>
    `
}
async function cPopular(){
    let API= "https://api.lyrics.ovh";
    let fResponce= await fetch(`${API}`)
    let response =await fResponce.json()
    let all = response.data
    console.log(all)
}

cPopular()