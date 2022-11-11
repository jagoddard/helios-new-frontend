import React, { useContext, useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { addNews, deleteNews, editNews, getAllNews, getFileFromBlob } from '../../services/news'
import { NewsType } from '../../types/newsTypes'
import AddEdit from '../addEdit'
import AppLoginContext from '../AppLoginContext'
import CommonModal from '../CommonModal/CommonModal'
import 'react-toastify/dist/ReactToastify.css'

const News = () => {
    const [data, setData] = useState([]);
    const loginContext = useContext(AppLoginContext);
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const fetchAllNews = async () => {
        try {
            const resp = await getAllNews();
            setData(resp.data.payload)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchAllNews();
    }, [])

    const closeModal = () => {
        setIsOpen(false)
    }

    const createNewNews = async (data: any) => {
        const tempData: NewsType = {
            content: data.content,
            date: data.date,
            heading: data.heading,
            file: data.file || null,
            videoUrl: data.videoUrl
        }
        setIsLoading(true)
        try {
            const resp = await addNews(tempData, loginContext.token)
            if (resp.data.status === 400) {
                toast.error(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })

            } else {
                toast.success(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            }
            setIsOpen(false)
            await fetchAllNews()
        } catch (err: any) {
            toast.error(err.response?.data?.message, {
                position: toast.POSITION.TOP_CENTER
            })
        } finally {
            setIsLoading(false)
        }
    }

    const editNewsArticles = async (data: any, NewsId: number) => {
        const tempData: NewsType = {
            content: data.content,
            date: data.date,
            heading: data.heading,
            file: data.file || null,
            videoUrl: data.videoUrl
        }
        setIsLoading(true)
        try {
            const resp = await editNews(tempData, loginContext.token, NewsId)
            if (resp.data.status === 400) {
                toast.error(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            } else {
                toast.success(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            }
            await fetchAllNews()
        } catch (err: any) {
            toast.error(err.response?.data?.message, {
                position: toast.POSITION.TOP_CENTER
            })
        } finally {
            setIsLoading(false)
        }  
    }

    const deleteNewsArticle = async (NewsId: number) => {
        try {
            const resp = await deleteNews(NewsId, loginContext.token)
            if (resp.data.status === 400) {
                toast.error(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            } else {
                toast.success(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            }
            await fetchAllNews()
        } catch (err: any) {
            toast.error(err.response?.data?.message, {
                position: toast.POSITION.TOP_CENTER
            })
        }
    }

    return (
        <div>
            <div className='flex flex-col items-center py-20'>
                <p>Selected: <span className='font-bold'>News</span></p>
                <button 
                    onClick={()=>setIsOpen(true)}
                    className='bg-primaryColor py-2 px-4 rounded-[5px] text-white font-bold mt-5'
                >Add More</button>
            </div>
            <div className='flex flex-col gap-4'>
                {data.map((item: any) => {
                    return (
                        <AddEdit
                            isAddNew={false}
                            tab="NEWS"
                            key={item.id}
                            data={item}
                            onDelete={(id:number)=>deleteNewsArticle(id)}
                            openFile={`/pdf-viewer/news/${item.id}`}
                            onEdit={(data, id)=>editNewsArticles(data, id)}
                            isLoading={isLoading}
                        />
                    )

                })}
            </div>
            <CommonModal isOpen={isOpen} >
                <AddEdit 
                    tab='NEWS'
                    isAddNew={true}
                    onClose={()=>closeModal()}
                    onAdd={(data)=>createNewNews(data)}
                    isLoading={isLoading}
                />
            </CommonModal>
            <ToastContainer />
        </div>

    )
}

export default News