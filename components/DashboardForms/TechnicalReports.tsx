import React, { useContext, useEffect, useState } from 'react'
import { getTechnicalReports, addTechnicalReports, editTechnicalReports, deleteTechnicalReports, getTechnicalFileFromBlob } from '../../services/technicalReports'
import { TechnicalReportsType } from '../../types/technicalReportsType'
import AddEdit from '../addEdit'
import AppLoginContext from '../AppLoginContext'
import CommonModal from '../CommonModal/CommonModal'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'


const TechnicalReports = () => {
    const [data, setData] = useState([]);
    const loginContext = useContext(AppLoginContext);
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const fetchAllTecnicalReports = async () => {
        try {
            const resp = await getTechnicalReports();
            setData(resp.data.payload)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchAllTecnicalReports();
    }, [])

    const closeModal = () => {
        setIsOpen(false)
    }
    
    const createNewTecnicalReports = async (data: any) => {
        const tempData: TechnicalReportsType = {
            date: data.date,
            heading: data.heading,
            file: data.file || null,
        }
        setIsLoading(true)
        try {
            const resp = await addTechnicalReports(tempData, loginContext.token)
            if (resp.data.status === 400) {
                toast.error(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            } else {
                toast.success(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            }
            await fetchAllTecnicalReports()
            setIsOpen(false)
        } catch (err: any) {
            toast.error(err.response?.data?.message, {
                position: toast.POSITION.TOP_CENTER
            })
        } finally {
            setIsLoading(false)
        }
    }

    const editTecnicalReports = async (data: TechnicalReportsType, ReportId: number) => {
        const tempData: TechnicalReportsType = {
            date: data.date,
            heading: data.heading,
            file: data.file || null,
        }
        setIsLoading(true)
        try {
            const resp = await editTechnicalReports(tempData, loginContext.token, ReportId)
            if (resp.data.status === 400) {
                toast.error(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            } else {
                toast.success(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            }
            await fetchAllTecnicalReports()
        } catch (err: any) {
            toast.error(err.response?.data?.message, {
                position: toast.POSITION.TOP_CENTER
            })
        } finally {
            setIsLoading(false)
        } 
    }

    const handleDeleteTecnicalReports = async (ReportId: number) => {
        try {
            const resp = await deleteTechnicalReports(ReportId, loginContext.token)
            if (resp.data.status === 400) {
                toast.error(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            } else {
                toast.success(resp?.data?.message, {
                    position: toast.POSITION.TOP_CENTER
                })
            }
            await fetchAllTecnicalReports()
        } catch (err: any) {
            toast.error(err.response?.data?.message, {
                position: toast.POSITION.TOP_CENTER
            })
        }
    }
    return (
        <div>
            <div className='flex flex-col items-center py-20'>
                <p>Selected: <span className='font-bold'>Technical Reports</span></p>
                <button
                    onClick={() => setIsOpen(true)}
                    className='bg-primaryColor py-2 px-4 rounded-[5px] text-white font-bold mt-5'
                >Add More</button>
            </div>
            <div className='flex flex-col gap-4'>
                {data.map((item: any) => {
                    return (
                        <AddEdit
                            isAddNew={false}
                            tab="TECHNICAL REPORTS"
                            key={item.id}
                            data={item}
                            onDelete={(id:number)=>handleDeleteTecnicalReports(id)}
                            openFile={`/pdf-viewer/technical-report/${item.id}`}
                            onEdit={(data,id)=>editTecnicalReports(data,id)}
                        />
                    )

                })}
            </div>
            <CommonModal isOpen={isOpen} >
                <AddEdit
                    tab="TECHNICAL REPORTS"
                    isAddNew={true}
                    onClose={() => closeModal()}
                    onAdd={(data)=>createNewTecnicalReports(data)}
                    isLoading={isLoading}
                />
            </CommonModal>
            <ToastContainer />
        </div>
    )
}

export default TechnicalReports