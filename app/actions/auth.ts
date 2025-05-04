"use server"

import { cookies } from "next/headers"
import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export async function authenticateUser(username: string, password: string) {

    try {
        // Query the Neon PostgreSQL database to check credentials
        // Note: In production, passwords should be hashed
        const result = await sql`
        SELECT id, username 
        FROM users 
        WHERE username = ${username} AND password = ${password}
        LIMIT 1
        `

    if (result.length > 0) {
        // User found, set authentication cookie
        const user = result[0]

        // Set a secure HTTP-only cookie
        ;(await
            // Set a secure HTTP-only cookie
            cookies()).set({
            name: "auth-token",
            value: JSON.stringify({
            id: user.id,
            username: user.username,
            // Don't include sensitive data like passwords
            }),
            httpOnly: true,
            path: "/",
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60, // 1 hour
            sameSite: "strict",
        })

      return { success: true, user: { id: user.id, username: user.username } }
    } else {
      return { success: false, error: "Invalid username or password" }
    }
  } catch (error) {
    console.error("Authentication error:", error)
    return { success: false, error: "An error occurred during authentication" }
  }
}
