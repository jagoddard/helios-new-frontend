import React from 'react'
import SocialArtical from '../socialArtical'
import styles from '../../styles/homepage.module.css'
import { useRouter } from 'next/router';

interface KnowMoreProps {
    heading: string;
    articleData?: any;
    viewMore?: string;
}

const KnowMoreComp = ({ heading, articleData, viewMore }: KnowMoreProps) => {
    const router = useRouter()
    return (
        <div className={styles.kumCard}>
            <p className={styles.kumCardTitle}>{heading}</p>
            <div className='md:h-[465px] scrollable-content'>
            {
                articleData && articleData?.payload?.slice(0, 4).map((data: any, index: number) => {
                    return <>
                        <SocialArtical
                            key={index+1}
                            headline={data.heading}
                            description={data.content}
                            date={new Date(data.date).toDateString().slice(4)}
                            fileLink={(data.fileUrl != null && data.fileUrl != "null") ? data.fileUrl : '#'}
                        />
                    </>

                })
            }
            </div>
            <div className={styles.kmuButton}>
                <button onClick={()=>router.push(viewMore || "")} className={styles.kmuBtn}>View More</button>
            </div>
        </div>
    )
}

export default KnowMoreComp