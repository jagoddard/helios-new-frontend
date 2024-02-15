import React from 'react'
import NewsItem from '../../../../components/newsItem'
import PressReleaseContainer from '../../../../components/pressReleaseContainer'
import { getAllNews, getFileFromBlob } from '../../../../services/news';
// import { getNews } from '../../../../services/api_old';

interface Props {
    data: any;
}

export const getStaticProps = async () => {
    let newsResp = await getAllNews();
    let latestNews
    if (newsResp.status === 200) {
        latestNews = (newsResp.data.payload || []).filter((item: any) => {
            return new Date(item.date).getFullYear() >= 2021;
        })
    }
    return {
        props: {
            data: latestNews
        },
        revalidate: 120,
    }
}

const LatestNewsReleases = ({ data }: Props) => {
    return (
        <PressReleaseContainer
            marketTabs='LatestNewsReleases'
        >
            <section className='py-10 px-5 md:px-4'>
                <p className='text-headerMobile md:text-header font-semibold mb-10 text-white'>Latest News Releases</p>
                <div className='flex flex-col gap-14'>
                    {
                        data.sort((a:any, b:any) => {
                            let c: any = new Date(a.date);
                            let d: any = new Date(b.date);
                            return d - c
                        }).map((item: any) => (
                            <NewsItem
                                key={item.id}
                                title={item.heading}
                                newsDate={new Date(item.date).toDateString().slice(4)}
                                newsDescription={item.content}
                                pdfLink={`/pdf-viewer/news/${item.id}`}
                            />
                        )
                        )
                    }
                </div>
            </section>
        </PressReleaseContainer>

    )
}

export default LatestNewsReleases