import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { auth } from '@clerk/nextjs/server'

export const runtime = 'nodejs'

export async function GET(request: NextRequest){
    const { userId } = auth()
    if(!userId){
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const timestamp = Math.round(Date.now() / 1000)
    const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET || ''
    const apiSecret = process.env.CLOUDINARY_API_SECRET || ''
    const apiKey = process.env.CLOUDINARY_API_KEY || ''
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || ''

    if(!apiKey || !apiSecret || !cloudName){
        return NextResponse.json({
            error: 'Missing Cloudinary environment variables',
            details: {
                CLOUDINARY_API_KEY: !!apiKey,
                CLOUDINARY_API_SECRET: !!apiSecret,
                NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: !!cloudName,
                CLOUDINARY_UPLOAD_PRESET: uploadPreset ? true : 'optional'
            }
        }, { status: 500 })
    }

    const paramsToSign: Record<string, string | number> = { timestamp }
    if(uploadPreset){
        paramsToSign.upload_preset = uploadPreset
    }

    const toSign = Object.keys(paramsToSign)
        .sort()
        .map((key) => `${key}=${paramsToSign[key]}`)
        .join('&')

    const signature = crypto
        .createHash('sha1')
        .update(`${toSign}${apiSecret}`)
        .digest('hex')

    return NextResponse.json({
        timestamp,
        signature,
        apiKey,
        cloudName,
        uploadPreset
    })
}

