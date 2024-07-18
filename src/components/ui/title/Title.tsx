import { titleFonts } from '@/config/fonts';
import React from 'react'



interface Props {
    title: string;
    subtitle?: string;
    className?: string;

}


const Title = ({ title, subtitle, className }: Props) => {
    return (
        <div className={`mt-3 ${className}`}>
            <h1 className={`${titleFonts.className} antialiased text-2xl font-semibold my-2`}>
                {title}
            </h1>

            {
                subtitle && (
                    <h3 className=' mb-5'>{subtitle}</h3>
                )
            }

        </div>
    )
}

export default Title
