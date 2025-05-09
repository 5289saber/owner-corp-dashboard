"use server"

import { neon } from "@neondatabase/serverless"

// Initialize the Neon SQL client
const sql = neon(process.env.DATABASE_URL!)

// Define the FinanceData type
export type FinanceData = {
  id: number
  amount: number
  date: string
  refNum: string
}

export async function queryPaymentsByUsername(username: string): Promise<{
  success: boolean
  data?: FinanceData[]
  error?: string
}> {
  try {
    // Execute the SQL query with proper parameter handling
    const payments = await sql`
      SELECT 
        payments.id, 
        payments.amount, 
        payments.date, 
        payments."refNum" 
      FROM payments 
      INNER JOIN users ON payments."userID" = users.id 
      WHERE users.username = "nick"
    `

    // Transform the data to ensure it matches the FinanceData type
    const typedData: FinanceData[] = payments.map((payment) => ({
      id: Number(payment.id),
      amount: Number(payment.amount),
      date: payment.date instanceof Date ? payment.date.toISOString() : String(payment.date),
      refNum: String(payment.refNum),
    }))

    return { success: true, data: typedData }
  } catch (error) {
    console.error("Database query error:", error)
    return {
      success: false,
      error: "An error occurred while fetching payment data",
    }
  }
}
