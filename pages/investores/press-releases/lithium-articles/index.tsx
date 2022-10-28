import React from 'react'
import NewsItem from '../../../../components/newsItem'
import PressReleaseContainer from '../../../../components/pressReleaseContainer'
import { getAllArticles, getArticleFileFromBlob } from '../../../../services/articles';

interface Props {
    data: any;
}

export const getServerSideProps = async () => {
    let newsResp = await getAllArticles();
    let latestArticles
    if (newsResp.status === 200) {
        latestArticles = (newsResp.data.payload || []).filter((item: any) => {
            return new Date(item.date).getFullYear() >= 2021;
        })
    }
    return {
        props: {
            data: latestArticles
        }
    }
}

const LithiumArticle = ({ data }: Props) => {
    return (
        <PressReleaseContainer
            marketTabs='LithiumArticles'
        >
            <section className='py-10 px-5 md:px-4'>
                <p className='text-headerMobile md:text-header font-semibold mb-10 text-white'>Lithium Articles</p>
                <div className='flex flex-col gap-14'>
                    {
                        data.map((item: any) => (
                            <NewsItem
                                key={item.id}
                                title={item.heading}
                                newsDate={new Date(item.date).toDateString().slice(4)}
                                newsDescription={item.content}
                                pdfLink={item.file}
                                openFile={()=>getArticleFileFromBlob(item.id)}
                            />
                        )
                        )
                    }
                </div>
            </section>
        </PressReleaseContainer>

    )
}

export default LithiumArticle