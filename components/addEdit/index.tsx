import React, { useEffect, useState } from 'react'
import CommonInput from '../commonInput'
import { AiOutlineClose } from 'react-icons/ai';

type data = {
    id: number,
    date?: string,
    year?: string,
    heading: string,
    content?: string,
    videoUrl?: string,
    file?: string,
    mdaFile?: string,
}

interface Props {
    data?: data,
    isAddNew?: boolean,
    tab: "NEWS" | "ARTICLES" | "TECHNICAL REPORTS" | "FINANCIALS" | "INVESTORS" | "AGM";
    onAdd?: (data: any) => void;
    onEdit?: (data: any, id: number) => void;
    onDelete?: (id: number) => void;
    onClose?: () => void;
    openFile?: (id: number) => void;
    isLoading?: boolean;
    openMda?: (id: number) => void;
}

const AddEdit = ({ data, isAddNew, tab, onDelete, onAdd, onEdit, onClose, isLoading, openFile, openMda }: Props) => {
    const [date, setDate] = useState<string | undefined>('');
    const [year, setYear] = useState<string | undefined>('');
    const [heading, setHeading] = useState<string>('');
    const [content, setContent] = useState<string | undefined>('');
    const [videoUrl, setVideoUrl] = useState<string | undefined>('');
    const [isEditMode, setIsEditMode] = useState<boolean>(isAddNew || false);
    const [file, setFile] = useState()
    const [mdaFile, setMdaFile] = useState()
    useEffect(() => {
        if (data) {
            setDate(data.date)
            setYear(data.year)
            setHeading(data.heading)
            setContent(data.content)
            setVideoUrl(data.videoUrl)
        }
    }, [data])

    const onEditClick = () => {
        setIsEditMode(true)
    }

    const onSaveClick = () => {
        const tempData = {
            date: date,
            year: year,
            heading: heading,
            content: content,
            videoUrl: videoUrl,
            file: file,
            mdaFile: mdaFile
        }
        if(onEdit && data){
            onEdit(tempData, data?.id)
        }
        setIsEditMode(false)

    }

    const onSubmitNew = () => {
        const tempData = {
            date: date,
            year: year,
            heading: heading,
            content: content,
            videoUrl: videoUrl,
            file: file,
            mdaFile: mdaFile
        }
        if (onAdd) {
            onAdd(tempData);
        }
    }

    return (
        <div className='bg-addEditBg py-4 px-20 w-[700px] m-auto relative'>
            {!isAddNew && <div className='flex justify-end gap-4'>
                <div className='flex bg-bgColor px-2 gap-2'>
                    <button
                        onClick={onEditClick}
                        className='text-white py-2 rounded-[5px] font-semibold'
                    >
                        EDIT
                    </button>
                    <img src="/edit.svg" className='w-5 cursor-pointer' />
                </div>
                <div className='flex border border-[#FF0000] px-2 gap-2'>
                    {(data && onDelete) && <button 
                        onClick={()=>onDelete(data.id)}
                        className=' text-[#FF0000] py-2 rounded-[5px] font-semibold'
                    >
                        DELETE
                    </button>}
                    <img src="/delete.svg" className='w-5 cursor-pointer' />
                </div>
            </div>}
            <div className='mt-20 mb-10'>
                {onClose && <button className='absolute top-[10px] right-[10px]' onClick={onClose}><AiOutlineClose /></button>}
                {(tab === "ARTICLES" || tab === "NEWS" || tab === "TECHNICAL REPORTS") && <CommonInput
                    type={"date"}
                    Label='Date:'
                    value={date || ""}
                    disabled={!isEditMode}
                    onChange={(e: any) => setDate(e.target.value)}
                />}
                {tab === "FINANCIALS" && <CommonInput
                    type={"text"}
                    Label='Year:'
                    value={year || ''}
                    disabled={!isEditMode}
                    onChange={(e: any) => setYear(e.target.value)}
                />}
                <CommonInput
                    type={"text"}
                    Label='Heading:'
                    value={heading}
                    disabled={!isEditMode}
                    onChange={(e: any) => setHeading(e.target.value)}
                />
                {(tab === "ARTICLES" || tab === "NEWS") && <div className=''>
                    <p className='font-medium mb-2 text-xl'>Content</p>
                    <textarea
                        id=""
                        value={content}
                        onChange={(e: any) => setContent(e.target.value)}
                        disabled={!isEditMode}
                        rows={10}
                        className="w-full rounded-[3px] focus:outline-none py-2 px-3 border-2 border-[#00000066] disabled:opacity-80"
                    >
                    </textarea>
                </div>}
                <div className='mb-6'>
                    <p className='font-medium mb-2 text-xl'>File Upload:</p>
                    <input 
                        type="file"
                        disabled={!isEditMode}
                        onChange={(e:any) => setFile(e.target.files[0])} 
                    />
                    {(data?.file && openFile) && 
                        <p 
                            onClick={()=>openFile(data.id)}
                            className='cursor-pointer border-b border-[#787676] text-[#787676] w-fit mt-2'
                        >
                            View File
                        </p>}
                </div>

                {(tab === "FINANCIALS") && <div className='mb-6'>
                    <p className='font-medium mb-2 text-xl'>Mda Upload:</p>
                    <input 
                        disabled={!isEditMode}
                        type="file"
                        onChange={(e:any) => setMdaFile(e.target.files[0])}
                    />
                    {(data?.mdaFile && openMda) && 
                        <p 
                            onClick={()=>openMda(data.id)}
                            className='cursor-pointer border-b border-[#787676] text-[#787676] w-fit mt-2'
                        >
                            View File
                        </p>
                    }
                </div>}

                {(tab === "ARTICLES" || tab === "NEWS") && <CommonInput
                    type={"text"}
                    Label='Video URL:'
                    value={videoUrl || ""}
                    onChange={(e: any) => setVideoUrl(e.target.value)}
                    disabled={!isEditMode}
                />}
            </div>
            {(isEditMode && !isAddNew) && <div className='flex justify-center gap-4'>
                <button
                    disabled={isLoading}
                    onClick={onSaveClick}
                    className='bg-bgColor text-primaryColor w-28 py-2 rounded-[5px] font-semibold disabled:opacity-60'

                >
                    {isLoading ? "SAVING..." : "SAVE"}
                </button>
            </div>}
            {isAddNew && <div className='flex justify-center gap-4'>
                <button
                    onClick={onSubmitNew}
                    disabled={isLoading}
                    className='bg-bgColor text-primaryColor w-28 py-2 rounded-[5px] font-semibold disabled:opacity-60'
                >
                    {isLoading ? "SUBMITING...": "SUBMIT"}
                </button>
            </div>}
        </div>
    )
}

export default AddEdit