"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AuthPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [answer, setAnswer] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  // Get the redirect path from the URL query parameters
  const redirectPath = searchParams.get("from") || "/"

  // The correct answer to the security question
  const correctAnswer = "blue" // In a real app, this would be more secure

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    // Simple validation - in a real app, this would be more sophisticated
    if (answer.toLowerCase().trim() === correctAnswer) {
      // Set a cookie to remember the authenticated user
      document.cookie = "auth-token=authenticated; path=/; max-age=3600" // Expires in 1 hour

      // Redirect to the original requested page
      router.push(redirectPath)
    } else {
      setError("Incorrect answer. Please try again.")
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Authentication Required</CardTitle>
          <CardDescription>Please answer the security question to access the website.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="security-question">What color is the sky on a clear day?</Label>
              <Input
                id="security-question"
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter your answer"
                required
              />
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Verifying..." : "Submit"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
          Testing
        </CardFooter>
      </Card>
    </div>
  )
}
