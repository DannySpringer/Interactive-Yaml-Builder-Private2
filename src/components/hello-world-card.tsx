"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function HelloWorldCard() {
  const handleLearnMore = () => {
    alert("Welcome! This is a shadcn/ui component showcasing modern React patterns.")
  }

  const handleGetStarted = () => {
    alert("Ready to build amazing UIs? Check out shadcn/ui documentation!")
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Hello World!</CardTitle>
        <CardDescription>
          Welcome to your shadcn/ui application built with Next.js 15 and React 19.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          This is a simple hello world application showcasing shadcn/ui components
          with modern styling and accessibility features.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleLearnMore}>
          Learn More
        </Button>
        <Button onClick={handleGetStarted}>
          Get Started
        </Button>
      </CardFooter>
    </Card>
  )
}