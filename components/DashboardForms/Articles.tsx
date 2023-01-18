import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
import { getAllArticles, addArticle, editArticle, deleteArticle, getArticleFileFromBlob } from '../../services/articles'
import { ArticleType } from '../../types/articleTypes'
import AddEdit from '../addEdit'
import AppLoginContext from '../AppLoginContext'
import CommonModal from '../CommonModal/CommonModal'
import 'react-toastify/dist/ReactToastify.css'

const Articles = () => {
    const [data, setData] = useState([]);
    const loginContext = useContext(AppLoginContext);
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)


    const fetchAllArticles = async () => {
        try {
            const resp = await getAllArticles();
            setData(resp.data.payload)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchAllArticles();
    }, [])

    const closeModal = () => {
        setIsOpen(false)
    }

    //create new Articles
    const createNewArticle = async (data: any) => {
        const tempData: ArticleType = {
            content: data.content,
            date: data.date,
            heading: data.heading,
            file: data.file,
            videoUrl: data.videoUrl
        }
        setIsLoading(true)
        try {
            const resp = await addArticle(tempData, loginContext.token)
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
            await fetchAllArticles()
        } catch (err: any) {
            toast.error(err.response?.data?.message, {
                position: toast.POSITION.TOP_CENTER
            })
        } finally {
            setIsLoading(false)
        }
    }

    const editArticles = async (data: ArticleType, ArticleId: number) => {
        const tempData: ArticleType = {
            content: data.content,
            date: data.date,
            heading: data.heading,
            file: data.file || null,
            videoUrl: data.videoUrl
        }
        setIsLoading(true)
        try {
            const resp = await editArticle(tempData, loginContext.token, ArticleId)
            if (resp.data.status === 400) {
                toast.error(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            } else {
                toast.success(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            }
            await fetchAllArticles()
        } catch (err: any) {
            toast.error(err.response?.data?.message, {
                position: toast.POSITION.TOP_CENTER
            })
        } finally {
            setIsLoading(false)
        }
    }

    const handleDeleteArticle = async (ArticleId: number) => {
        try {
            const resp = await deleteArticle(ArticleId, loginContext.token)
            if (resp.data.status === 400) {
                toast.error(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            } else {
                toast.success(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            }
            await fetchAllArticles()
        } catch (err: any) {
            toast.error(err.response?.data?.message, {
                position: toast.POSITION.TOP_CENTER
            })
        }
    }
    return (
        <div>
            <div className='flex flex-col items-center py-20'>
                <p>Selected: <span className='font-bold'>Article</span></p>
                <button
                    onClick={() => setIsOpen(true)}
                    className='bg-primaryColor py-2 px-4 rounded-[5px] text-white font-bold mt-5'
                >Add More</button>
            </div>
            <div className='flex flex-col gap-4'>
                {data.sort((a: any, b: any) => {
                    let c: any = new Date(a.date);
                    let d: any = new Date(b.date);
                    return d - c
                }).map((item: any) => {
                    return (
                        <AddEdit
                            isAddNew={false}
                            tab="ARTICLES"
                            key={item.id}
                            data={item}
                            onDelete={(id: number) => handleDeleteArticle(id)}
                            openFile={`/pdf-viewer/articles/${item.id}`}
                            onEdit={(data, id) => editArticles(data, id)}
                        />
                    )

                })}
            </div>
            <CommonModal isOpen={isOpen} >
                <AddEdit
                    tab='ARTICLES'
                    isAddNew={true}
                    onClose={() => closeModal()}
                    onAdd={(data) => createNewArticle(data)}
                    isLoading={isLoading}
                />
            </CommonModal>
            <ToastContainer />
        </div>
    )
}

export default Articles
