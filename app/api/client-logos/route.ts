// app/api/client-logos/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { readdir } from 'fs/promises'
import path from 'path'

export async function GET(request: NextRequest) {
  try {
    // Path to your logos folder in the public directory
    const logosDirectory = path.join(process.cwd(), 'public', 'clients-logo')
    
    // Read all files in the logos directory
    const files = await readdir(logosDirectory)
    
    // Filter for image files only
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif']
    const logoFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase()
      return imageExtensions.includes(ext)
    })
    
    // Sort alphabetically for consistent order
    logoFiles.sort()
    
    return NextResponse.json(logoFiles)
  } catch (error) {
    console.error('Error reading logos directory:', error)
    return NextResponse.json(
      { error: 'Failed to read logos directory' },
      { status: 500 }
    )
  }
}