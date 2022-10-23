import { useEffect, useState } from 'react'
import Meme from './Meme/Meme'
import { MemeModel } from './model'
import Service from './Service';
import styles from './styles.module.css'

export default function BTCN3() {
    // Attribute
    const [loading, setLoading] = useState<boolean>(true);
    const [memeList, setMemeList] = useState<MemeModel[]>([]);

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
            setMemeList([]);
            getMemeList();
        }
    }, [loading])
    
    return (
        <div className={styles.container}>
            <button className={styles.reloadButton} onClick={()=>setLoading(true)}>{loading ? "Loading" : "Reload"}</button>
            <div className={styles.wrapper}>
                {
                    memeList.map(item => <Meme data={item}/>)
                }
            </div>
        </div>
    )
}
