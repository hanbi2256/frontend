

const getLatestNews=async()=>
{
    let url=new URL(` https://api.newscatcherapi.com/v2/latest_headlines?countries=kr&topic=business&page_size=10`);
    let header=new Headers({'x-api-key':'kM52f3-AO9LEbk9bwl6T1ztr6DSM19qnxZzZcCwJXoM'});
    let respones = await fetch(url,{headers:header});//ajx
    let data=respones.json()
    console.log(respones)
};
getLatestNews();