import React from 'react'
import NewsItem from '../../../../components/newsItem'
import PressReleaseContainer from '../../../../components/pressReleaseContainer'
import { getAllNews, getFileFromBlob } from '../../../../services/news';

interface Props {
    data: any;
}

export const getStaticProps = async () => {
    let newsResp = await getAllNews();
    let archivedNews
    if (newsResp.status === 200) {
        archivedNews = (newsResp.data.payload || []).filter((item: any) => {
            return new Date(item.date).getFullYear() < 2021;
        })
    }
    return {
        props: {
            data: archivedNews
        },
        revalidate: 10
    }
}

const ArchivedNewsReleases = ({ data }: Props) => {
    return (
        <PressReleaseContainer
            marketTabs='ArchivedNewsReleases'
        >
            <section className='py-10 px-5 md:px-5'>
                <p className='text-headerMobile md:text-header font-semibold mb-10 text-white'>Archived News Releases</p>
                <div className='flex flex-col md:gap-14'>
                    {
                        data.map((item: any) => (
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

export default ArchivedNewsReleases