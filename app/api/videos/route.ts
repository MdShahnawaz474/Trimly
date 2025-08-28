import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { auth } from '@clerk/nextjs/server';

export const runtime = 'nodejs'

const prisma = new PrismaClient()

export async function GET(request: NextRequest){
    const {userId} = auth()

    if (!userId) {
        return NextResponse.json({error: "Unauthorized"}, {status: 401})
    }

    try {
        const videos = await prisma.video.findMany({
            where: {
                clerkId: userId
            },
            orderBy: {createdAt: "desc"}
        })
        return NextResponse.json(videos)
    } catch (error) {
        return NextResponse.json({error: "Error fetching videos"}, {status: 500})
    } finally {
        await prisma.$disconnect()
    }
}

export async function POST(request: NextRequest){
    const {userId} = auth()

    if (!userId) {
        return NextResponse.json({error: "Unauthorized"}, {status: 401})
    }

    try {
        const body = await request.json()
        const { title, description, publicId, originalSize, compressedSize, duration } = body

        if(!publicId || !title){
            return NextResponse.json({error: "Missing required fields"}, {status: 400})
        }

        // @ts-ignore
        const video = await prisma.video.create({
            data: {
                title,
                description,
                publicId,
                originalSize: String(originalSize || ''),
                compressedSize: String(compressedSize || ''),
                duration: Number(duration || 0),
                clerkId: userId
            }
        })
        return NextResponse.json(video)
    } catch (error) {
        return NextResponse.json({error: "Error saving video"}, {status: 500})
    } finally {
        await prisma.$disconnect()
    }
}
