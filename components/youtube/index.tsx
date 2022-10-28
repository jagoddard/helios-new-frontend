import React from 'react'
interface Props {
    video: any,
    vedioTitle: string
}
const Youtube = ({ video, vedioTitle }: Props) => {
    return (
        <div className="w-full px-3 pt-3 bg-[#25272A]">
            <div className="h-[230px]">
                <iframe
                    width="100%"
                    height="100%"
                    src={video}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
            </div>
            <p className="py-2 px-4 text-sm bg-[#25272A] text-primaryColor text-center">{vedioTitle}</p>
        </div>
    )
}

export default Youtube