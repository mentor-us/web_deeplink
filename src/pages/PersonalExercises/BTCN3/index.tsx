import { useEffect, useState } from 'react'
import Meme from './Meme/Meme'
import { MemeModel } from './model'
import Service from './Service';
import styles from './styles.module.css'
import { useQuery } from 'react-query';

export default function BTCN3() {
    // Attribute
    const [loading, setLoading] = useState<boolean>(false);
    const [memeList, setMemeList] = useState<MemeModel[]>([]);
    const url = 'https://api.imgflip.com/get_memes';
    const getListMemeQuery = useQuery("meme-list", ()=>fetch(url).then(res=>res.json()), {
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
    })

    const {data, isLoading, isFetching, error} = getListMemeQuery;
    

    // Function/ Method
    const getMemeList = async () => {
        try{
            const {data, error}: any = await Service.getMemeList();
            if(error){
                console.log('@ERROR_LOG: ', error);
            }

            const customData = data?.memes.map((item: any): MemeModel=>{
                return item as MemeModel;
            })

            setMemeList(customData);
            setLoading(false);
        }
        catch(error){
            setLoading(false);
            console.log('@ERROR_LOG: ', error);
        }
    }

    // Side effect
    useEffect(()=>{
        if(loading){
            getMemeList();
        }
    }, [loading])

    useEffect(()=>{
        return ()=>{
            setMemeList([]);
        }
    }, [])

    if(isLoading){
        console.log('@DUKE_isLoading', isLoading);
        return (
            <p>Loading...</p>
        )
    }

    if(error){
        console.log('@DUKE_', error);
        
        return (
            <p>ERROR: {JSON.stringify(error)}</p>
        )
    }
    
    return (
        <div className={styles.container}>
            <button className={styles.reloadButton} onClick={()=>setLoading(true)}>{loading || isFetching ? "Loading" : "Reload"}</button>
            <div className={styles.wrapper}>
                {
                    memeList.map(item => <Meme data={item}/>)
                }
            </div>
        </div>
    )
}
